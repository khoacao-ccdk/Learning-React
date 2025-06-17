import React from "react"
import {Rating, Stack, Typography} from "@mui/material"

const labels: { [index: number]: string } = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};


export default function RatingModal() {
  const [rating, setRating] = React.useState<number | null>(null);
  const [hover, setHover] = React.useState(-1);


  return(
    <Stack direction="row">
      <Rating 
        value={rating} 
        onChange={(e, newValue) => {setRating(newValue)}}
        onChangeActive={(e, newValue) => {setHover(newValue)}}
        max={5}
        size="large"
        precision={0.5}
      />
      {(hover !== -1 || rating) && 
        <Typography>
          {hover !== -1 ? labels[hover] : labels[rating]}
        </Typography>}
    </Stack>
  )  
}