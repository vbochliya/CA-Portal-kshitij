import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 400,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  triggerElement = null // New prop: selector string or DOM element reference
}) => {
  const stackRef = useRef(null);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  const lastTransformsRef = useRef(new Map());

  const calculateProgress = useCallback((scrollTop, start, end) => {
    if (scrollTop < start) return 0;
    if (scrollTop > end) return 1;
    return (scrollTop - start) / (end - start);
  }, []);

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  const getTriggerElementOffset = useCallback(() => {
    if (!triggerElement) return 0;
    
    let element;
    if (typeof triggerElement === 'string') {
      element = document.querySelector(triggerElement);
    } else if (triggerElement instanceof Element) {
      element = triggerElement;
    }
    
    if (!element) return 0;
    
    return element.offsetTop + element.offsetHeight;
  }, [triggerElement]);

  const updateCardTransforms = useCallback(() => {
    const stack = stackRef.current;
    if (!stack || !cardsRef.current.length) return;

    const scrollTop = window.scrollY;
    const containerHeight = window.innerHeight;
    const stackTop = stack.offsetTop;
    const triggerOffset = getTriggerElementOffset();

    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);

    const lastCard = cardsRef.current[cardsRef.current.length - 1];
    const lastCardTop = lastCard ? stackTop + lastCard.offsetTop : 0;
    const stackEndPosition = lastCardTop - stackPositionPx;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = stackTop + card.offsetTop;
      // Adjust trigger positions to be relative to the trigger element
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i - triggerOffset;
      const triggerEnd = cardTop - scaleEndPositionPx - triggerOffset;
      const pinStart = cardTop - stackPositionPx - itemStackDistance * i - triggerOffset;
      const pinEnd = stackEndPosition - triggerOffset;

      // Adjust scrollTop to be relative to trigger element
      const adjustedScrollTop = scrollTop - triggerOffset;

      const scaleProgress = calculateProgress(adjustedScrollTop, triggerStart, triggerEnd);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      let translateY = 0;
      const isPinned = adjustedScrollTop >= pinStart && adjustedScrollTop <= pinEnd;

      if (isPinned) {
        translateY = adjustedScrollTop - cardTop + stackPositionPx + itemStackDistance * i + triggerOffset;
      } else if (adjustedScrollTop > pinEnd) {
        translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i + triggerOffset;
      }

      const newTransform = {
        translateY: Math.round(translateY * 100) / 100,
        scale: Math.round(scale * 1000) / 1000
      };

      const lastTransform = lastTransformsRef.current.get(i);
      const hasChanged =
        !lastTransform ||
        Math.abs(lastTransform.translateY - newTransform.translateY) > 0.1 ||
        Math.abs(lastTransform.scale - newTransform.scale) > 0.001;

      if (hasChanged) {
        card.style.transform = `translate3d(0, ${newTransform.translateY}px, 0) scale(${newTransform.scale})`;
        lastTransformsRef.current.set(i, newTransform);
      }
    });
  }, [itemScale, itemStackDistance, stackPosition, scaleEndPosition, baseScale, calculateProgress, parsePercentage, getTriggerElementOffset]);

  const setupLenis = useCallback(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false
    });

    lenis.on('scroll', updateCardTransforms);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;
    return lenis;
  }, [updateCardTransforms]);

  useLayoutEffect(() => {
    const timeoutId = setTimeout(() => {
      const cards = Array.from(stackRef.current.querySelectorAll('.scroll-stack-card'));
      cardsRef.current = cards;

      cards.forEach((card, i) => {
        if (i < cards.length - 1) {
          card.style.marginBottom = `${itemDistance}px`;
        }
        card.style.willChange = 'transform';
        card.style.transformOrigin = 'top center';
        card.style.transform = 'translateZ(0)';
      });

      setupLenis();
      updateCardTransforms();
    }, 0);

    return () => {
      clearTimeout(timeoutId);
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
      cardsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [itemDistance, setupLenis, updateCardTransforms]);

  return (
    <section className={`scroll-stack-section ${className}`.trim()} ref={stackRef}>
      <div className="heading">
        Incentives
      </div>
      <div className="scroll-stack-inner">
        {children}
        {/* <div className="scroll-stack-spacer" /> */}
      </div>
    </section>
  );
};

export default ScrollStack;