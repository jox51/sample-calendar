import React, { useState } from "react"

import { AppointmentForm } from "@devexpress/dx-react-scheduler-material-ui"

export const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === "multilineTextEditor") {
    return null
  }
  return <AppointmentForm.TextEditor {...props} />
}

// sets basic layout for appt form
export const BasicLayout = ({
  onFieldChange,
  appointmentData,
  ...restProps
}) => {
  // sets state for appt form data
  const [layout, setLayout] = useState({
    locationField: "",
    prepField: "",
    covidField: ""
  })

  // fx to handle location field
  const onLocationFieldChange = (nextValue) => {
    setLayout((prevState) => ({ ...prevState, locationField: nextValue }))
    let { locationField } = layout
    onFieldChange({ locationField: nextValue })
  }
  const onPrepFieldChange = (nextValue) => {
    setLayout((prevState) => ({ ...prevState, prepField: nextValue }))
    let { prepField } = layout
    onFieldChange({ prepField: nextValue })
  }
  const onCovidFieldChange = (nextValue) => {
    setLayout((prevState) => ({ ...prevState, covidField: nextValue }))
    let { covidField } = layout
    console.log("value field", nextValue)
    onFieldChange({ covidField: nextValue })
  }

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label text="Location" type="title" />
      <AppointmentForm.TextEditor
        value={appointmentData.locationField}
        onValueChange={onLocationFieldChange}
        placeholder="Doctors Office"
        type="ordinaryTextEditor"
      />
      <AppointmentForm.Label
        className="pt-5"
        text="Prep Instructions"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.prepField}
        onValueChange={onPrepFieldChange}
        placeholder="Prep Info"
        type="multilineTextEditor"
      />
      <AppointmentForm.Label
        className="pt-5"
        text="Covid Vaccinated"
        type="title"
      />
      {/* <AppointmentForm.TextEditor
        value={covidField}
        onValueChange={onCovidFieldChange}
        placeholder="Are You Covid Vaccinated"
        type="ordinaryTextEditor"
      /> */}
      {
        <AppointmentForm.Select
          value={appointmentData.covidField}
          onValueChange={onCovidFieldChange}
          placeholder="Yes or No"
          availableOptions={[
            { id: 1, text: "No" },
            { id: 2, text: "Yes" }
          ]}
          type="filledSelect"
        />
      }
    </AppointmentForm.BasicLayout>
  )
}
