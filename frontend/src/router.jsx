import { createBrowserRouter} from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./pages/dashboard";
import Teachers from "./pages/teachers";
import SignIn from "./pages/auth/sign-in";
import Students from "./pages/Students";

// Function to get the access token from cookies
const getAccessToken = () => {
    return localStorage.getItem("token");
  }
  
  // Function to check if the user is authenticated
  const isAuthenticated = () => {
    return !!getAccessToken();
  }

const router = createBrowserRouter([
    {
        path: "/sign-in",
        element: <SignIn />
    },
    {
        element: <ProtectedRoute isAuthenticated={()=>isAuthenticated()}/>,
        path: "/",
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/teachers",
                element: <Teachers />
            },
            {
                path: "/students",
                element: <Students />
            },
        ]
    }
])



export default router;