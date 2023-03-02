import React, { useState } from "react"
import Paper from "@mui/material/Paper"
import {
  ViewState,
  EditingState,
  IntegratedEditing
} from "@devexpress/dx-react-scheduler"
import {
  Scheduler,
  DayView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog
} from "@devexpress/dx-react-scheduler-material-ui"

import { appointments } from "../demo-data/appointments"

const DatePicker = () => {
  const [apptData, setApptData] = useState({
    data: appointments,
    currentDate: "2018-06-27"
  })

  const commitChanges = ({ added, changed, deleted }) => {
    let { data } = apptData
    if (added) {
      const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0
      data = [...data, { id: startingAddedId, ...added }]
    }
    if (changed) {
      data = data.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      )
    }
    if (deleted !== undefined) {
      data = data.filter((appointment) => appointment.id !== deleted)
    }
    return { data }
  }

  const { data, currentDate } = apptData

  return (
    <>
      <Paper>
        <Scheduler data={data} height={660}>
          <ViewState currentDate={currentDate} />
          <EditingState onCommitChanges={commitChanges} />
          <IntegratedEditing />
          <DayView startDayHour={9} endDayHour={19} />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm />
        </Scheduler>
      </Paper>
    </>
  )
}

export default DatePicker
