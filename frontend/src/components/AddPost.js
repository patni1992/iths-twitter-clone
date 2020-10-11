import React, { useState } from "react";
import {
    Button,
    Dialog,
    DialogTitle,
    DialogContent,
    TextField,
    DialogActions
  } from "@material-ui/core";

function AddPost({open, onClose, onAdd}) {
    const [message, setMessage] = useState('')
    return (<Dialog fullWidth maxWidth="sm" open={open} onClose={onClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">New post</DialogTitle>
    <DialogContent>
      <TextField
       onChange={event => setMessage(event.target.value)} 
        autoFocus
        label="Post message"
        fullWidth
      />
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={() => onAdd(message)} color="primary">
        Add post
      </Button>
    </DialogActions>
  </Dialog>)
}

export default AddPost