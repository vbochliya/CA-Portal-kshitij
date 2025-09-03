import React, { useState, Children, cloneElement } from "react";
import "./faqnew.css";

const data = [
  {
    question: "What is the role of a Campus Ambassador?",
    answer:
      "Campus Ambassador will represent Kshitij, IIT Kharagpur in their colleges. They will be the first point of contact to any student who requires information about Kshitij. They would promote and motivate students to participate in the events conducted by Kshitij.",
  },
  {
    question: "Am I suitable to become a Campus Ambassador?",
    answer:
      "Yes. Any college student driven with enthusiasm is eligible to become a Campus Ambassador.",
  },
  {
    question: "How can I apply for the post of Campus Ambassador?",
    answer:
      "Click on Sign Up and register. You will receive an email after successful registration.",
  },
  {
    question: "What is the selection process?",
    answer:
      "After you register through our website, you will have to go through a short telephonic interview before being selected.",
  },
  {
    question:
      "How many Campus Ambassadors are usually chosen from a particular college?",
    answer:
      "One or more campus ambassadors are chosen depending on the size of the college and the number of students who have applied for the position.",
  },
  {
    question:
      "How much time do I need to devote to Kshitij, IIT Kharagpur once selected as a Campus Ambassador?",
    answer:
      "There is no particular constraint on the number of hours per week that you need to devote. It may vary depending on the number of tasks allotted and how smartly and efficiently you perform it.",
  },
];

// Accordion Container
const Accordion = ({ children }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="accordion-container">
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => setOpenIndex(openIndex === index ? null : index),
        })
      )}
    </div>
  );
};

// Accordion Item
const AccordionItem = ({ children, isOpen, onToggle }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      {Children.map(children, (child) =>
        cloneElement(child, { isOpen, onToggle })
      )}
    </div>
  );
};

// Accordion Trigger (Question)
const AccordionTrigger = ({ children, isOpen, onToggle }) => (
  <button className="accordion-trigger" onClick={onToggle}>
    <span className="que">{children}</span>
    <span className={`accordion-icon ${isOpen ? "open" : ""}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 -960 960 960"
      >
        <path d="M480-348q-10.26 0-20.09-3.91-9.82-3.92-17.52-11.61L258.96-546.96Q244-561.91 244-584t14.96-37.04Q273.91-636 296-636t37.04 14.96L480-474.09l146.96-146.95Q641.91-636 664-636t37.04 14.96Q716-606.09 716-584t-14.96 37.04L517.61-363.52q-7.7 7.69-17.52 11.61Q490.26-348 480-348Z" />
      </svg>
    </span>
  </button>
);

// Accordion Panel (Answer)
const AccordionPanel = ({ children, isOpen }) => (
  <div className={`ans accordion-panel ${isOpen ? "open" : ""}`}>
    {children}
  </div>
);

// Main FAQ Component
function Faq26() {
  return (
    <div className="faq-container">
      <h1 className="faq-title">FAQS</h1>
      <div className="faq-content">
        <Accordion>
          {data.map((item, index) => (
            <AccordionItem key={index}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionPanel>{item.answer}</AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default Faq26;
