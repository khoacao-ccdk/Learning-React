import React from "react"
import { Tab, Typography } from "@mui/material"
import { TabPanel, TabContext, TabList } from "@mui/lab"

export type CustomTabProps = {
  data: Array<{
    label: string;
    body: string
  }>
}

export default function CustomTab({data}: CustomTabProps) {

  const [tab, setTab] = React.useState<number>(0);

  function handleTabChange(e: React.SyntheticEvent, newValue: number) {
    setTab(newValue);
  }

  return (
    <TabContext value={tab} >
      <TabList onChange={handleTabChange}>
      {data.map((row, index) => (
        <Tab key={index} value={index} label={row.label}/>
      ))}
      </TabList>

      {data.map((row, index) => (
        <TabPanel key={index} value={index}>
          <Typography>
            {row.body}
          </Typography>
        </TabPanel>
      ))}
    </TabContext>
  )
}