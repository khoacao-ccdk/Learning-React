import React from "react"
import {Typography, Paper} from "@mui/material"

export default function DigitalClock() {
  const [time, setTime] = React.useState<Date>(new Date());

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000)
  })

  function getFormattedNumber(num: number) {
    return num.toString().padStart(2,'0');
  }

  return(
    <Paper 
      style={{
        padding: "1rem",
        width: "fit-content",
        backgroundColor: "black",
        border: "0.5rem solid #F7F8F9",
        borderColor: "white",

      }}
    >
      <Typography variant="h2" color="white">
        {getFormattedNumber(time.getHours())}:{getFormattedNumber(time.getMinutes())}:{getFormattedNumber(time.getSeconds())}
      </Typography>
    </Paper>
  )
}