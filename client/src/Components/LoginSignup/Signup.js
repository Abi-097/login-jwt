import { useState, React } from "react";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./signup.css";
export const Signup = () => {
  const initialValues = {username:"", password:"", email:"" };
  const [values, setValues] = useState(initialValues);
  const [action, setAction] = useState("Sign In");
  const [error, setError] = useState({});

  const handleChange = (e) =>{
    const{name, value} = e.target
    setValues({...values,[name]: value});
  }

  const handleSubmit = (e) =>{
  e.preventDefault();
  setError(validate(values));
  };

  const validate = (values) => {

  }
  return (
    <div className="Signin">
    
    <form onSubmit={handleSubmit}>
    <pre>{JSON.stringify(values, undefined, 2)}</pre>
      <Paper
        elevation={3}
        sx={{
          textAlign: "center",
          justifyContent: "center",
          width: "25rem",
          height: "30rem",
        }}
      >
        <div className="login_heading"> {action} </div>

        {action === "Sign In" ? (
          <TextField
            required
            id="outlined-required"
            label="User Name"
            placeholder="User Name"
            values= {values.username}
            onChange={handleChange}
            sx={{ marginTop: "10%", marginBottom: "10%", width: "300px" }}
          />
        ) : null}

        <TextField
          required
          id="outlined-required"
          label="Email"
          placeholder="Email"
          values= {values.email}
          onChange={handleChange}
          sx={{
            marginTop: action === "Sign Up" ? "10%" : "0",
            marginBottom: "10%",
            width: "300px",
          }}
        />

        <TextField
          required
          id="outlined-required"
          label="Password"
          placeholder="Password"
          values= {values.password}
          onChange={handleChange}
          sx={{ marginBottom: "10%", width: "300px" }}
        />
        <br />
        <Button
          className={action === "Sign In" ? "submit_clicked" : "submit"}
          size="large"
          variant="contained"
          color="info"
          sx={{ marginRight: "1%" }}
          onClick={() => {
            setAction("Sign Up");
          }}
        >
          {" "}
          Sign Up{" "}
        </Button>
        <Button
          className={action === "Sign Up" ? "submit_clicked" : "submit"}
          size="large"
          variant="contained"
          sx={{ width: "100px" }}
          onClick={() => {
            setAction("Sign In");
          }}
        >
          {" "}
          Sign In{" "}
        </Button>
      </Paper>
      </form>
    </div>
  );
};
