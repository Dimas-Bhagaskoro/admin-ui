import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";

function FormSignUp() {
  return (
    <>
      {/* form start */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <form action="" className="space-y-5">

          <div>
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
            />
          </div>

          <div>
            <LabeledInput
              label="Email address"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </div>

          <div>
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
            />
          </div>

          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <span className="text-primary">
              terms of service
            </span>
          </p>

          <Button type="submit" variant="primary">
            Sign up
          </Button>

        </form>
      </div>

      {/* separator */}
      <div className="flex flex-col justify-center items-center text-xs text-gray-400 relative">
        <div className="border border-gray-200 w-full"></div>

        <div className="bg-special-mainBg px-2 absolute">
          or sign up with
        </div>
      </div>

      {/* google button */}
      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      {/* footer */}
      <div className="flex justify-center mt-2 text-sm text-gray-500">
        <p>
          Already have an account?{" "}
          <span className="text-primary font-semibold cursor-pointer">
            Sign in here
          </span>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;