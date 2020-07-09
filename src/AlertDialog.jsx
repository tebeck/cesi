import React from 'react'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { withRouter } from 'react-router-dom'
import { Typography } from '@material-ui/core'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />
})

function AlertDialog(props) {
  const { open, handleClose, text, firstname, lastname, phone, email, appointment } = props

  return (
    <div>
      <Dialog
        fullWidth
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-slide-title">{text}</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <Typography component="span" style={{ margin: '1em', display: 'block' }}>
              Nombre: {`${firstname} ${lastname}`}
            </Typography>
            <Typography component="span" style={{ margin: '1em', display: 'block' }}>
              Telefono: {phone}
            </Typography>
            <Typography component="span" style={{ margin: '1em', display: 'block' }}>
              Email: {email}
            </Typography>
            <Typography component="span" style={{ margin: '1em', display: 'block' }}>
              Turno: {appointment}
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ marginLeft: '2em', marginBottom: '1em' }}>
            <Typography component="span" color="secondary" style={{ display: 'block' }}>
              Dra. Josefina Magariños
            </Typography>
            <Typography component="span" variant="caption" color="secondary" style={{ display: 'block' }}>
              Especialista en dermatologia
            </Typography>
          </div>
          <div>
            <Button style={{ marginRight: '1em' }} onClick={handleClose} color="primary">
              CANCELAR
            </Button>
            <Button onClick={props.handleSubmit} variant="contained" color="primary">
              CONFIRMAR
            </Button>
          </div>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default withRouter(AlertDialog)
