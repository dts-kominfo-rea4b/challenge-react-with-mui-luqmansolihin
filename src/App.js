import "./App.css";
import React from "react";
import { Grid, Card, List } from "@mui/material";
import { green } from "@mui/material/colors";
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";
const App = () => {
  // Masukkan Header dan lakukan map untuk Contact ke dalam div App
  // untuk membuat daftar kontak bisa menggunakan MUI list
  // https://mui.com/material-ui/react-list/#folder-list

  // Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
  // Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm

  const [contacts, setContact] = React.useState(contactsJSON);

  const handleClick = (newContact) => {
    setContact([...contacts, newContact]);
  };

  return (
    <div className="App">
      <Grid container spacing={12} style={{ padding: 20 }}>
        <Header />
        <ContactForm handleClick={handleClick} />
        <Grid item xs={5}>
          <Card style={{ padding: 10, backgroundColor: green[100] }}>
            <List>
              {contacts.map((data, index) => {
                return <Contact data={data} key={index} />;
              })}
            </List>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
