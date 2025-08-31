import "./App.css";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "./routes/AppRoutes";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthContextProvider>
  );
}

export default App;
