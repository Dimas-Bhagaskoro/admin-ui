import React from "react";
import Logo from "../Elements/Logo";

function AuthLayout(props) {
    const { children } = props;

    return (
    <>
        <main className="min-h-screen bg-special-mainBg flex justify-center items-center px-4">
        {/* container start */}
        <div className="w-full max-w-md space-y-8">
        {/* logo start */}
        <Logo />
        {/* logo end */}
        {/* form */}
        {children}
        </div>
        {/* container end */}
        </main>
    </>
        
    );
}

export default AuthLayout;