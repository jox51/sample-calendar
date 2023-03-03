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
  WeekView,
  MonthView,
  Toolbar,
  DateNavigator,
  TodayButton,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  ViewSwitcher,
  DragDropProvider
} from "@devexpress/dx-react-scheduler-material-ui"

import { appointments } from "../demo-data/appointments"
import { TextEditor, BasicLayout } from "../utils/formLayout"

const DatePicker = () => {
  const [apptData, setApptData] = useState({
    data: appointments,
    currentDate: new Date().toJSON().slice(0, 10),
    currentViewName: "work-week",
    addedAppointment: {},
    appointmentChanges: {},
    editingAppointment: undefined
  })

  const commitChanges = ({ added, changed, deleted }) => {
    let { data } = apptData
    let dataCopy = [...data]
    if (added) {
      const startingAddedId =
        dataCopy?.length > 0 ? dataCopy[dataCopy?.length - 1].id + 1 : 0
      dataCopy = [...dataCopy, { id: startingAddedId, ...added }]
    }
    if (changed) {
      dataCopy = dataCopy?.map((appointment) =>
        changed[appointment.id]
          ? { ...appointment, ...changed[appointment.id] }
          : appointment
      )
    }
    if (deleted !== undefined) {
      dataCopy = dataCopy.filter((appointment) => appointment.id !== deleted)
    }
    setApptData((prevState) => ({ ...prevState, data: dataCopy }))
    console.log(dataCopy)
    return { dataCopy }
  }

  const {
    data,
    currentDate,
    currentViewName,
    addedAppointment,
    appointmentChanges,
    editingAppointment
  } = apptData
  const currentDateChange = (currentDate) => {
    setApptData((prevState) => ({ ...prevState, currentDate }))
  }
  const currentViewNameChange = (currentViewName) => {
    setApptData((prevState) => ({ ...prevState, currentViewName }))
  }
  const changeAppointmentChanges = (appointmentChanges) => {
    setApptData((prevState) => ({ ...prevState, appointmentChanges }))
  }
  const changeAddedAppointment = (addedAppointment) => {
    setApptData((prevState) => ({ ...prevState, addedAppointment }))
  }
  const changeEditingAppointment = (editingAppointment) => {
    setApptData((prevState) => ({ ...prevState, editingAppointment }))
  }

  console.log("appt data :", apptData)

  return (
    <>
      <Paper>
        <Scheduler data={data} height={400} className="mt-10">
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={currentDateChange}
            currentViewName={currentViewName}
            onCurrentViewNameChange={currentViewNameChange}
          />
          <EditingState
            onCommitChanges={commitChanges}
            addedAppointment={addedAppointment}
            onAddedAppointmentChange={changeAddedAppointment}
            appointmentChanges={appointmentChanges}
            onAppointmentChangesChange={changeAppointmentChanges}
            editingAppointment={editingAppointment}
            onEditingAppointmentChange={changeEditingAppointment}
          />
          <IntegratedEditing />
          <WeekView
            startDayHour={9}
            endDayHour={19}
            name="work-week"
            displayName="Work Week"
            excludedDays={[0, 6]}
          />
          <MonthView name="month-view" displayName="Month View" />
          <DayView
            startDayHour={10}
            endDayHour={19}
            name="day-view"
            displayName="Day View"
          />
          <Toolbar />
          <ViewSwitcher />
          <DateNavigator />
          <TodayButton />
          <ConfirmationDialog />
          <Appointments />
          <AppointmentTooltip showOpenButton showDeleteButton />
          <AppointmentForm
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
          <DragDropProvider />
        </Scheduler>
      </Paper>
    </>
  )
}

export default DatePicker
