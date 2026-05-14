import "./App.css";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorPage from "./pages/error";
import { createBrowserRouter, Link, RouterProvider} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div className="flex justify-center items-center min-h-screen">
          <Link to="/login" className="p-2 m-5 bg-primary text-white">
            Login
          </Link>
          |
          <Link to="/register" className="p-2 m-5 bg-primary text-white">
            Register
          </Link>
        </div>
      ),
      errorElement: <ErrorPage />,
    },
    {
      path: "/sign-up",
      element: <SignUpPage />,
    },
    {
      path: "/sign-in",
      element: <SignInPage />,
    },
  ]);

  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;