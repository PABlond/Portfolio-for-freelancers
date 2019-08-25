import moment from "moment"
import React, { createClass } from "react"
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default () => {

  const onSelect = () => {
    console.log("SELECT")
  }

  const onDatesChange = ({ startDate, endDate }) => {
    console.log({ startDate, endDate })
  }

  const onFocusChange = (focusedInput) =>  {
    console.log(focusedInput)
  }

  const focusedInput = moment().format() 

  return (
    <DateRangePicker 
    onDatesChange={onDatesChange}
    onFocusChange={onFocusChange}
    focusedInput={focusedInput}
    startDate={focusedInput}
    endDate={focusedInput} />
  )
}
