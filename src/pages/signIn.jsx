import React from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignIn from "../components/Fragments/FormSignIn";
import {loginService} from "../services/authService";
import {AuthContext} from "../context/AuthContext";

function signIn() {
    const {login} = React.useContext(AuthContext);

    const handleLogin = async (email, password) => {
    try {
      const { refreshToken } = await loginService(email, password);

		await login(refreshToken);
    } catch (err) {
      console.error(err.msg);
    }
  };

    return (
        <AuthLayout>
            <FormSignIn onSubmit={handleLogin} />
        </AuthLayout>
    );
}

export default signIn;