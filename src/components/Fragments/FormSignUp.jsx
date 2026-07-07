import React from "react";
import LabeledInput from "../Elements/LabeledInput";
import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";

function FormSignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    // Validasi form menggunakan Yup
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    // Handling submit ke API backend sesuai instruksi soal
    onSubmit: async (values, { setSubmitting, setStatus }) => {
      setStatus(null); // Reset status notifikasi setiap kali submit
      try {
        const response = await axios.post(
          "https://jwt-auth-eight-neon.vercel.app/register", 
          values
        );
        // Jika sukses (Mencoba email baru)
        setStatus({ success: "Registration Success!" });
      } catch (error) {
        // Jika error (Mencoba email mahasiswa yang sudah terdaftar)
        setStatus({ 
          error: error.response?.data?.message || "Registration Failed!" 
        });
      } finally {
        setSubmitting(false); // Mengembalikan state loading tombol
      }
    },
  });

  return (
    <>
      {/* form start */}
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          
          {/* Notifikasi Alert dari API */}
          {formik.status?.error && (
            <div className="p-3 bg-red-100 text-red-700 text-xs rounded-lg font-medium">
              {formik.status.error}
            </div>
          )}
          {formik.status?.success && (
            <div className="p-3 bg-green-100 text-green-700 text-xs rounded-lg font-medium">
              {formik.status.success}
            </div>
          )}

          <div>
            <LabeledInput
              label="Name"
              id="name"
              type="text"
              placeholder="Enter your name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.name}</p>
            )}
          </div>

          <div>
            <LabeledInput
              label="Email address"
              id="email"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.email}</p>
            )}
          </div>

          <div>
            <LabeledInput
              label="Password"
              id="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-500 text-xs mt-1">{formik.errors.password}</p>
            )}
          </div>

          <p className="text-xs text-gray-500">
            By continuing, you agree to our{" "}
            <span className="text-primary">terms of service</span>
          </p>

          {/* Mengubah tulisan tombol menjadi "Loading.." jika sedang submit */}
          <Button type="submit" variant="primary" disabled={formik.isSubmitting}>
            {formik.isSubmitting ? "Loading.." : "Sign up"}
          </Button>

        </form>
      </div>

      {/* separator */}
      <div className="flex flex-col justify-center items-center text-xs text-gray-400 relative">
        <div className="border border-gray-200 w-full"></div>
        <div className="bg-special-mainBg px-2 absolute">or sign up with</div>
      </div>

      {/* google button */}
      <Button type="button" variant="secondary">
        Continue with Google
      </Button>

      {/* footer */}
      <div className="flex justify-center mt-2 text-sm text-gray-500">
        <p>
          Already have an account?{" "}
          <Link to="/login" className="text-primary font-semibold">
            Sign In Here
          </Link>
        </p>
      </div>
    </>
  );
}

export default FormSignUp;