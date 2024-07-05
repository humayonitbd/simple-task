import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { TextField, Button, Typography, Container, Box } from "@mui/material";


export interface UserDetails {
  name: string;
  phoneNumber: string;
  email: string;
}


const FirstPage = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

   
    if (!name || !phoneNumber || !email) {
      setErrorMessage("Please enter all fields.");
      return;
    }

 
    const userDetails: UserDetails = { name, phoneNumber, email };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    // Redirect to second page
    navigate("/userShow-page");
  };
  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        User Information
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        autoComplete="off"
      >
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Phone Number"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </Container>
  );
};

export default FirstPage;
