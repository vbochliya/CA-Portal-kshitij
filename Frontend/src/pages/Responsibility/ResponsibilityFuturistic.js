import React, { useState, useEffect, useRef } from 'react';
import styles from './ResponsibilityFuturistic.module.css';
import Data from './Data.json';

const ResponsibilityFuturistic = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [autoScrollKey, setAutoScrollKey] = useState(0); // Key to restart auto-scroll cycle
    const intervalRef = useRef(null);
    const observerRef = useRef(null);
    const containerRef = useRef(null);

    // Auto scroll through responsibilities
    useEffect(() => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }
        
        intervalRef.current = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % Data.length);
        }, 4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
            }
        };
    }, [autoScrollKey]); // Restart when autoScrollKey changes

    // Intersection Observer for scroll animations
    useEffect(() => {
        observerRef.current = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.animate);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (containerRef.current) {
            observerRef.current.observe(containerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, []);

    const handleResponsibilityChange = (index) => {
        if (index !== activeIndex) {
            setIsAnimating(true);
            setActiveIndex(index);
            
            // Restart the auto-scroll cycle from the selected index after 6 seconds
            setTimeout(() => {
                setAutoScrollKey(prev => prev + 1); // This will trigger useEffect to restart interval
            }, 6000);

            setTimeout(() => setIsAnimating(false), 600);
        }
    };

    return (
        <div className={styles.container} ref={containerRef}>
            <div className={styles.background}>
                {/* Animated grid background */}
                <div className={styles.grid}></div>
                
                {/* Floating particles */}
                <div className={styles.particles}>
                    {[...Array(50)].map((_, i) => (
                        <div 
                            key={i} 
                            className={styles.particle}
                            style={{
                                '--delay': `${Math.random() * 3}s`,
                                '--duration': `${3 + Math.random() * 4}s`,
                                '--x': `${Math.random() * 100}%`,
                                '--y': `${Math.random() * 100}%`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.title}>
                    <span className={styles.titleGlow}>RESPONSIBILITIES</span>
                </h1>

                <div className={styles.mainSection}>
                    {/* Left side - Signal lines */}
                    <div className={styles.signalContainer}>
                        {Data.map((_, index) => (
                            <div key={index} className={styles.signalGroup}>
                                {/* Primary signal line */}
                                <div 
                                    className={`${styles.signalLine} ${styles.primary} ${
                                        index === activeIndex ? styles.active : ''
                                    }`}
                                    style={{ '--index': index }}
                                >
                                    <div className={styles.signalPulse}></div>
                                    <div className={styles.signalTrail}></div>
                                    <div className={styles.dataPacket}></div>
                                </div>
                                
                                {/* Secondary signal lines */}
                                <div 
                                    className={`${styles.signalLine} ${styles.secondary} ${
                                        index === activeIndex ? styles.active : ''
                                    }`}
                                    style={{ '--index': index }}
                                >
                                    <div className={styles.signalPulse}></div>
                                    <div className={styles.signalTrail}></div>
                                    <div className={styles.dataPacket}></div>
                                </div>
                                
                                <div 
                                    className={`${styles.signalLine} ${styles.tertiary} ${
                                        index === activeIndex ? styles.active : ''
                                    }`}
                                    style={{ '--index': index }}
                                >
                                    <div className={styles.signalPulse}></div>
                                    <div className={styles.signalTrail}></div>
                                    <div className={styles.dataPacket}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center - Main sphere */}
                    <div className={styles.centralHub}>
                        <div className={styles.sphere}>
                            <div className={styles.sphereCore}>
                                <div className={styles.energyRings}>
                                    <div className={styles.ring}></div>
                                    <div className={styles.ring}></div>
                                    <div className={styles.ring}></div>
                                </div>
                                <div className={styles.centralPulse}></div>
                            </div>
                            
                            {/* Electric arcs around sphere */}
                            <div className={styles.electricArcs}>
                                <div className={styles.arc}></div>
                                <div className={styles.arc}></div>
                                <div className={styles.arc}></div>
                                <div className={styles.arc}></div>
                            </div>
                            
                            {/* Connection dots around sphere */}
                            {Data.map((_, index) => (
                                <div 
                                    key={index}
                                    className={`${styles.connectionDot} ${
                                        index === activeIndex ? styles.active : ''
                                    }`}
                                    style={{ 
                                        transform: `rotate(${(index * 360) / Data.length}deg) translateX(120px)`
                                    }}
                                    onClick={() => handleResponsibilityChange(index)}
                                >
                                    <div className={styles.dotInner}></div>
                                </div>
                            ))}
                        </div>

                        {/* Status indicator */}
                        <div className={styles.statusIndicator}>
                            <div className={styles.statusLight}></div>
                            <span className={styles.statusText}>SYSTEM ACTIVE</span>
                        </div>
                    </div>

                    {/* Right side - Information card */}
                    <div className={styles.infoPanel}>
                        <div className={`${styles.card} ${isAnimating ? styles.cardExit : styles.cardEnter}`}>
                            <div className={styles.cardHeader}>
                                <div className={styles.cardTitle}>
                                    {Data[activeIndex].heading.toUpperCase()}
                                </div>
                            </div>
                            
                            <div className={styles.cardContent}>
                                <div className={styles.cardImage}>
                                    <img 
                                        src={Data[activeIndex].img} 
                                        alt={Data[activeIndex].heading}
                                    />
                                    <div className={styles.imageOverlay}></div>
                                </div>
                                
                                <div className={styles.cardDescription}>
                                    <p>{Data[activeIndex].description}</p>
                                </div>
                            </div>

                            <div className={styles.cardFooter}>
                                <div className={styles.progressBar}>
                                    <div 
                                        className={styles.progressFill}
                                        style={{ width: `${((activeIndex + 1) / Data.length) * 100}%` }}
                                    ></div>
                                </div>
                                <span className={styles.progressText}>
                                    {activeIndex + 1} / {Data.length}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Navigation dots */}
                <div className={styles.navigation}>
                    {Data.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.navDot} ${
                                index === activeIndex ? styles.activeDot : ''
                            }`}
                            onClick={() => handleResponsibilityChange(index)}
                        >
                            <span className={styles.navDotInner}></span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ResponsibilityFuturistic;
