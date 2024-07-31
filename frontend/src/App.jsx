import { RouterProvider } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./components/ThemeProvider";
import router from "./router";
import  Toaster from "./components/ui/toaster";

function App({children}) {
  return (
    <div>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </div>
  );
}

export default App;
