import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Overview from "./Pages/Dashboard/Overview/Overview";
import PatientList from "./Pages/Dashboard/PatientList/PatientList/PatientList";
import Calendar from "./Pages/Dashboard/Navbar/Calendar";
import Message from "./Pages/Dashboard/Message/Message";
import PaymentInformation from "./Pages/Dashboard/PaymentInformation/PaymentInformation";
import Settings from "./Pages/Dashboard/Settings/Settings";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />}>
                        <Route path="/overview" element={<Overview />} />
                        <Route path="/calendar" element={<Calendar />} />
                        <Route path="/patientList" element={<PatientList />} />
                        <Route path="/message" element={<Message />} />
                        <Route
                            path="/paymentInformation"
                            element={<PaymentInformation />}
                        />
                        <Route path="/settings" element={<Settings />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
