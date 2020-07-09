import React from 'react'
import DateFnsUtils from '@date-io/date-fns'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import { withRouter } from 'react-router-dom'
import deLocale from 'date-fns/locale/es'

function disableWeekends(date) {
  return date.getDay() === 0 || date.getDay() === 6
}
// function getFullScheduledDates() {
//   return Math.random() > 0.7
// }

function CustomDatePicker(props) {
  const smallScreen = window.innerWidth < 768

  return (
    <div>
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={deLocale}>
        <DatePicker
          format="dd/MM/yyyy"
          cancelLabel="Cancelar"
          disablePast
          shouldDisableDate={disableWeekends}
          style={{ marginTop: 10, marginLeft: 10 }}
          value={props.appointmentDate}
          placeholder="Select a date"
          mode={smallScreen ? 'portrait' : 'landscape'}
          onChange={(date) => {
            props.setAppointmentDate(date)
            props.handleNextStep()
          }}
          // shouldDisableDate={(day) => this.checkDisableDate(day)}
        />
      </MuiPickersUtilsProvider>
    </div>
  )
}

export default withRouter(CustomDatePicker)
