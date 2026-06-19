import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import {loginService} from "../services/authService";
import {AuthContext} from "../context/AuthContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import {useState} from "react";

function signIn() {
    const {login} = React.useContext(AuthContext);

    const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  }); 
  
  const handleCloseSnackbar = () => {
    setSnackbar({ open: true, message: err.msg, severity: "error" });
  };

    const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);

		await login(refreshToken);
    } catch (err) {
      console.error(err.msg);
    }
  };

    return (
      <>
        <AuthLayout>
            <FormSignIn onSubmit={handleLogin} />
            <AppSnackbar
          open={snackbar.open}
          message={snackbar.message}
          severity={snackbar.severity}
          onClose={handleCloseSnackbar}
        />
        </AuthLayout>
      </>
    );
}

export default signIn;