import { createBrowserRouter } from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Student from "./pages/students/Student";
import Teacher from "@/pages/teachers/teacher"

// Function to get the access token from cookies
const getAccessToken = () => {
    return localStorage.getItem('accessToken');
  }
  
  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return !!getAccessToken();
  }

  const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/',
        element: <ProtectedRoute isAuthenticated={isAuthenticated} />, // Pass function directly
        children: [
            {
                path: '/',
                element: <Dashboard />,
            },
            {
                path: '/students',
                element: <Student />,
            },
            {
                path: '/teachers',
                element: <Teacher />,
            }
        ]
    }
]);

export default router;  // Export the router objects