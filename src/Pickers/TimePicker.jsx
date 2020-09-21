import React from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import { FormControl, FormControlLabel, Radio, FormLabel, RadioGroup, Select } from '@material-ui/core'

import { withRouter } from 'react-router-dom'

function CustomTimePicker(props) {
  const handleChangeAppointmentSlot = (e) => {
    props.setAppointmentSlot(e.target.value)
    props.handleNextStep()
  }

  return (
    <>
      <FormControl>
        <Select value={props.appointmentMeridiem} onChange={(e) => props.setAppointmentMeridiem(e.target.value)}>
          <MenuItem value={0}>AM</MenuItem>
          <MenuItem value={1}>PM</MenuItem>
        </Select>
      </FormControl>
      <div style={{ marginTop: '2em' }}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Horario</FormLabel>
          {props.appointmentMeridiem ? (
            <RadioGroup
              aria-label="time"
              name="time"
              value={props.appointmentSlot}
              onChange={handleChangeAppointmentSlot}
            >
              <FormControlLabel value="8:00 a 8:30" control={<Radio />} label="8:00 a 8:30" />
              <FormControlLabel value="8:30 a 9:00" control={<Radio />} label="8:30 a 9:00" />
              <FormControlLabel value="9:30 a 10:00" control={<Radio />} label="9:30 a 10:00" />
            </RadioGroup>
          ) : (
            <RadioGroup
              aria-label="time"
              name="time"
              value={props.appointmentSlot}
              onChange={handleChangeAppointmentSlot}
            >
              <FormControlLabel value="13:30 a 13:30" control={<Radio />} label="13:30 a 13:30" />
              <FormControlLabel value="14:30 a 15:00" control={<Radio />} label="15:30 a 16:00" />
            </RadioGroup>
          )}
        </FormControl>
      </div>
    </>
  )
}

export default withRouter(CustomTimePicker)
