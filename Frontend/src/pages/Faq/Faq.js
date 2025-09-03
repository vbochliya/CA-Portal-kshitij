import React from "react";
import styles from "../ContactUs/contact.module.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import "./faq.css";

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
      "After you register through our website, you will have to go through a short telephonic interview before being selected. ",
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
      "There is no particular constraint on the number of hours per week that you need to devote. It may vary depending on the number of tasks allotted and how smartly and efficiently you perform it. ",
  },
];

function Faq() {
  return (
    <div className={styles.cov}>
      <h1 className={styles.title}> FAQS</h1>
      <div class="faq_div">
        {data.map((item) => {
          return (
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography sx={{ color: "white", fontSize: "1.8rem" }}>
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: "#fffc", fontSize: "1.7rem" }}>
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default Faq;
