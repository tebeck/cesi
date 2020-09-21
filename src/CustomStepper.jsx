import React from 'react'
import {
  Typography,
  Paper,
  MenuItem,
  Select,
  TextField,
  Button,
  Step,
  Stepper,
  StepButton,
  StepContent,
} from '@material-ui/core'
import { format } from 'date-fns'
import deLocale from 'date-fns/locale/es'
import DatePicker from './Pickers/DatePicker'
import TimePicker from './Pickers/TimePicker'
import AlertDialog from './AlertDialog'

export default function CustomStepper() {
  const [activeStep, setActiveStep] = React.useState(0)
  const [appointmentDate, setAppointmentDate] = React.useState()
  const [appointmentMeridiem, setAppointmentMeridiem] = React.useState(0)
  const [appointmentSlot, setAppointmentSlot] = React.useState()
  const [firstname, setFirstname] = React.useState('')
  const [lastname, setLastname] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const [appointment, setAppointment] = React.useState('')
  const [checkFormFields, setCheckFormFields] = React.useState(false)
  const [selectedTreatment, setSelectedTreatment] = React.useState('Estetica')
  const smallScreen = window.innerWidth < 768
  const medicalTreatment = ['Estetica', 'Piernas', 'Cara', 'Algo', 'Rayos', 'Rollos']

  const handleNextStep = () => (activeStep < 3 ? setActiveStep(activeStep + 1) : null)
  const handleClose = () => setOpen(false)

  const resetInputs = () => {
    setActiveStep(0)
    setAppointmentDate()
    setAppointmentMeridiem()
    setAppointmentSlot()
    setFirstname()
    setLastname()
    setPhone()
    setEmail()
    setOpen(false)
  }

  const handleSubmit = () => {
    resetInputs()
  }

  const handleConfirm = () => {
    setAppointment(
      `${format(appointmentDate, 'PPPP', { locale: deLocale })} de ${appointmentSlot.toString()} ${
        appointmentMeridiem === 0 ? ' AM' : ' PM'
      }`
    )
    setOpen(true)
  }

  function renderConfirmationString() {
    return (
      <Typography style={{ padding: '1em' }} variant="h5">
        <span style={{ fontWeight: '600', color: 'rgb(189, 189, 189)' }}>Programando un turno de</span>
        <span style={{ fontWeight: '600', color: '#2196f3' }}> 30 minutos </span>
        <span style={{ fontWeight: '600', color: 'rgb(189, 189, 189)' }}>para el dia </span>
        <span style={{ fontWeight: '600', color: '#2196f3' }}>
          {appointmentDate ? format(appointmentDate, 'dd/MM/yyyy') : null}
        </span>
        <span style={{ fontWeight: '600', color: 'rgb(189, 189, 189)' }}>{appointmentSlot ? ' de ' : null}</span>
        <span style={{ fontWeight: '600', color: '#2196f3' }}>{appointmentSlot && appointmentSlot.toString()}</span>
        <span style={{ fontWeight: '600', color: 'rgb(189, 189, 189)' }}>
          {appointmentSlot ? (appointmentMeridiem === 0 ? ' AM' : ' PM') : null}
        </span>
      </Typography>
    )
  }

  React.useEffect(() => {
    setCheckFormFields(firstname && lastname && email && phone)
  }, [firstname, lastname, email, phone])

  return (
    <div>
      <section style={{ maxWidth: !smallScreen ? '80%' : '100%', margin: 'auto', marginTop: !smallScreen ? 20 : 0 }}>
        {renderConfirmationString()}
        <Paper
          style={{
            padding: '10px 10px 25px 10px',
            height: smallScreen ? '100vh' : null,
          }}
        >
          <Stepper activeStep={activeStep} orientation="vertical">
            <Step disabled={false}>
              <StepButton onClick={() => setActiveStep(0)}>Elija un día disponible para su turno</StepButton>
              <StepContent>
                <DatePicker
                  handleNextStep={handleNextStep}
                  appointmentDate={appointmentDate}
                  setAppointmentDate={setAppointmentDate}
                />
              </StepContent>
            </Step>
            <Step disabled={!appointmentDate}>
              <StepButton onClick={() => setActiveStep(1)}>Elija un horario disponible para su turno</StepButton>
              <StepContent>
                <TimePicker
                  handleNextStep={handleNextStep}
                  appointmentMeridiem={appointmentMeridiem}
                  setAppointmentMeridiem={setAppointmentMeridiem}
                  appointmentSlot={appointmentSlot}
                  setAppointmentSlot={setAppointmentSlot}
                />
              </StepContent>
            </Step>
            <Step disabled={!appointmentSlot}>
              <StepButton onClick={() => setActiveStep(2)}>Elija el tratamiento médico para su turno</StepButton>
              <StepContent>
                <Select
                  style={{ width: '12em' }}
                  labelId="select-label"
                  id="select-label"
                  value={selectedTreatment}
                  onChange={(e) => {
                    setSelectedTreatment(e.target.value)
                    handleNextStep()
                  }}
                >
                  {medicalTreatment.map((spe) => (
                    <MenuItem key={spe} value={spe}>
                      {spe}
                    </MenuItem>
                  ))}
                </Select>
              </StepContent>
            </Step>
            <Step disabled={!selectedTreatment}>
              <StepButton onClick={() => setActiveStep(3)}>
                Comparta su información de contacto con nosotros y le enviaremos un recordatorio.
              </StepButton>
              <StepContent>
                <section>
                  <TextField
                    style={{ display: 'block' }}
                    margin="dense"
                    required
                    name="firstname"
                    label="Nombre"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                  <TextField
                    style={{ display: 'block' }}
                    margin="dense"
                    required
                    name="lastname"
                    label="Apellido"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                  <TextField
                    style={{ display: 'block' }}
                    required
                    name="email"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <TextField
                    style={{ display: 'block' }}
                    required
                    name="phone"
                    label="Phone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <Button
                    style={{ marginTop: '2em' }}
                    variant="contained"
                    size="large"
                    fullWidth
                    onClick={() => handleConfirm()}
                    disabled={!checkFormFields}
                  >
                    {checkFormFields ? 'Sacar turno' : 'Complete su informacion para sacar turno'}
                  </Button>
                </section>
              </StepContent>
            </Step>
          </Stepper>
        </Paper>
        <AlertDialog
          open={open}
          handleClose={handleClose}
          handleSubmit={handleSubmit}
          onClose={handleClose}
          text="Confirma tu turno"
          firstname={firstname}
          lastname={lastname}
          phone={phone}
          email={email}
          appointment={appointment}
        />
      </section>
    </div>
  )
}
