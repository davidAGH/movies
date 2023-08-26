import { LogIN } from "./pages/log";
import { SignIN } from "./pages/sign";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";

function App() {
    const [users, setUsers] = useState([]);
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/home" element={<Home />}/>
                    <Route path="/" element={<SignIN users={users} setUsers={setUsers} />} />
                    <Route path="/logIn" element={<LogIN users={users} />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
