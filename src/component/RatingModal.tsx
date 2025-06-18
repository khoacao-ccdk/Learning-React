import React from "react";
import { Rating, Stack, Typography } from "@mui/material";

const labels: { [index: number]: string } = {
  0: "HEH",
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

export default function RatingModal() {
  const [rating, setRating] = React.useState<number | null>(null);
  const [hover, setHover] = React.useState(-1);

  return (
    <Stack direction="row">
      <Rating
        value={rating}
        onChange={(_e, newValue) => {
          setRating(newValue);
        }}
        onChangeActive={(_e, newValue) => {
          setHover(newValue);
        }}
        max={5}
        size="large"
        precision={0.5}
      />
      {(hover !== -1 || rating !== null) && (
        <Typography>
          {hover !== -1 ? labels[hover] : rating !== null ? labels[rating] : ""}
        </Typography>
      )}
    </Stack>
  );
}
