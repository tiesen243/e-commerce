import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material'

interface Props {
  open: boolean
  setOpen: (value: boolean) => void
  handleDelete: () => void
}

const ConfirmDialog: React.FC<Props> = ({ open, setOpen, handleDelete }) => (
  <Dialog open={open} onClose={() => setOpen(false)}>
    <DialogTitle>Delete Account</DialogTitle>
    <DialogContent>
      <DialogContentText>Are you sure you want to delete your account? This action cannot be undone.</DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button variant="contained" component="p" onClick={() => setOpen(false)} color="secondary">
        Cancel
      </Button>
      <Button variant="contained" component="p" onClick={handleDelete} color="error">
        Delete
      </Button>
    </DialogActions>
  </Dialog>
)

export default ConfirmDialog
