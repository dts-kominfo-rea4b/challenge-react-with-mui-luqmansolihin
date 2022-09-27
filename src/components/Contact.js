// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";
import {
  Avatar,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
const Contact = ({ data }) => {
  // Contact berisi foto, nama, telepon, dan email
  return (
    <>
      <ListItem>
        <ListItemAvatar>
          <Avatar src={data.photo} />
        </ListItemAvatar>
        <ListItemText
          primary={data.name}
          secondary={
            <React.Fragment>
              <Typography component="span" variant="body2" color="text.primary">
                {data.phone}
              </Typography>
              <br />
              {data.email}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default Contact;
