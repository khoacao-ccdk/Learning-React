import React from "react";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { ExpandMore } from "@mui/icons-material";

export type FrequentlyAskQuestionsProps = {
  question: string;
  answer: string;
  open?: boolean;
};

export default function FrequentlyAskQuestions({
  answer,
  question,
  open = false,
}: FrequentlyAskQuestionsProps) {
  return (
    <Accordion defaultExpanded={open}>
      <AccordionSummary
        expandIcon={<ExpandMore />}
        style={{
          flexDirection: "row-reverse",
        }}
      >
        {question}
      </AccordionSummary>
      <AccordionDetails>{answer}</AccordionDetails>
    </Accordion>
  );
}
