import React from "react";
import { Typography, Paper, Stack } from "@mui/material";
import CustomAccordion from "./component/CustomAccordion";
import CustomTab from "./component/CustomTab";
import RatingModal from "./component/RatingModal";
import DigitalClock from "./component/DigitalClock";
import FrequentlyAskQuestions from "./challenges/FrequentlyAskQuestions";

function App() {
  const data = [
    {
      label: "HTML",
      body: "The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.",
    },
    {
      label: "CSS",
      body: "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
    },
    {
      label: "Javascript",
      body: "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
    },
  ];

  const questions = [
    {
      question: "How many bones does a cat have?",
      answer: "A cat has 230 bones - 6 more than a human",
    },
    {
      question: "How much do cats sleep?",
      answer: "The average cat sleeps 12-16 hours per day",
    },
    {
      question: "How long do cats live",
      answer:
        "Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.",
    },
  ];

  return (
    <Paper style={{ overflow: "scroll" }}>
      <Stack spacing={2}>
        <Typography variant="h1">Playground</Typography>
        <DigitalClock />
        <RatingModal />
        <Stack spacing={1}>
          {data.map((row, index) => (
            <CustomAccordion key={index} label={row.label} body={row.body} />
          ))}
        </Stack>
        <CustomTab data={data} />
      </Stack>

      {questions.map((question, index) => (
        <FrequentlyAskQuestions
          key={index}
          question={question.question}
          answer={question.answer}
          open={true}
        />
      ))}
    </Paper>
  );
}

export default App;
