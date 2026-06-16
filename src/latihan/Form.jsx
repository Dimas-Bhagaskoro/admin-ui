import React, { useState } from "react";


const Form = () => {
  const [email, setEmail] = useState("cobaemail@example.com");
  const [password, setPassword] = useState("cobapassword");

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post(
      "https://jwt-auth-eight-neon.vercel.app/login",
      { email, password },
    );

    console.log(response.data);
    localStorage.setItem("token", response.data.refreshToken);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        Email :
        <input 
            type="text" 
            id="email" 
            name="email" 
            className="border" 
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        <br />
        Password :
        <input 
            type="text" 
            id="password" 
            name="password" 
            className="border" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            <br />
            <input type="submit" value="send" className="bg-gray-200 p-2" />
      </form>
    </div>
  );
};

export default Form;