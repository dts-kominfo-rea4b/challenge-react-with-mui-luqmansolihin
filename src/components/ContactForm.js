// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card
import React, { useState } from "react";
import { Grid, Card, TextField, Button } from "@mui/material";
import { yellow } from "@mui/material/colors";

const ContactForm = ({ handleClick }) => {
  // Form berisi name, phone, email, dan photo url
  // Buatlah state newContact berupa objek sesuai dengan data yang ada

  const [newContact, setNewContact] = useState({
    name: "",
    phone: "",
    email: "",
    photo: "",
  });

  return (
    <>
      <Grid item xs={5}>
        <Card style={{ padding: 10, backgroundColor: yellow[50] }}>
          <TextField
            fullWidth
            required
            id="name"
            label="Name"
            margin="dense"
            variant="filled"
            onChange={(e) => {
              setNewContact({ ...newContact, name: e.target.value });
            }}
          />
          <TextField
            fullWidth
            required
            id="phone"
            label="Phone"
            margin="dense"
            variant="filled"
            onChange={(e) => {
              setNewContact({ ...newContact, phone: e.target.value });
            }}
          />
          <TextField
            fullWidth
            required
            id="email"
            label="Email"
            margin="dense"
            variant="filled"
            onChange={(e) => {
              setNewContact({ ...newContact, email: e.target.value });
            }}
          />
          <TextField
            fullWidth
            required
            id="photo"
            label="Photo"
            margin="dense"
            variant="filled"
            onChange={(e) => {
              setNewContact({ ...newContact, photo: e.target.value });
            }}
          />
          <Button
            onClick={() => {
              handleClick(newContact);

              document.getElementById("name").value = "";
              document.getElementById("phone").value = "";
              document.getElementById("email").value = "";
              document.getElementById("photo").value = "";

              setNewContact({
                name: "",
                phone: "",
                email: "",
                photo: "",
              });
            }}
          >
            ADD NEW
          </Button>
        </Card>
      </Grid>
    </>
  );
};

export default ContactForm;
