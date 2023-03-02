import React, { useState } from "react"
import Calendar from "react-calendar"
import "../calendar.css"

// const datesToAddContentTo = [tomorrow, in3Days, in5Days]

// function tileContent({ date, view }) {
//   // Add class to tiles in month view only
//   if (view === "month") {
//     // Check if a date React-Calendar wants to check is on the list of dates to add class to
//     if (datesToAddContentTo.find((dDate) => isSameDay(dDate, date))) {
//       return "My content"
//     }
//   }
// }

const DatePicker = () => {
  const [date, setDate] = useState(new Date())

  return (
    <>
      <div className="app h-screen pt-10">
        <h1 className="text-center">React Calendar</h1>
        <div className="calendar-container flex justify-center items-center">
          <Calendar
            onChange={setDate}
            value={date}
            tileContent={({ date, view }) => {
              return view === "month" && date.getDay() === 0 ? (
                <p>It's Sunday!</p>
              ) : null
            }}
            onClick={(value) => alert("New date is: ", value)}
          />
        </div>
        <p className="text-center">
          <span className="bold">Selected Date:</span> {date.toDateString()}
        </p>
      </div>
    </>
  )
}

export default DatePicker
