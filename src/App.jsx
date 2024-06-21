import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AccountSettings from "./Components/AccountSettings";
import CreateAccount from "./Components/CreateAccount";
import SignIn from "./Components/SignIn";
import Welcome from "./Components/Welcome";
import AccountDetails from "./Components/AccountDetails";

function App() {
  return (
    <>
      <Router>
        {/* Welcome page should always be visible */}
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>

        {/* Define routes for SignIn, CreateAccount, and AccountSettings */}
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/account-settings" element={<AccountSettings />} />
          <Route path="/AccountDetails" element={<AccountDetails/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
