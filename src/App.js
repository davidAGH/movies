import { LogIN } from "./pages/log";
import { SignIN } from "./pages/sign";
import { Home } from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import { Film } from "./film";
import { useDispatch } from "react-redux";
import { addMovie } from "./store/movies/movie.actions"
import { Admin } from "./pages/admin";
import { ClockLoader } from "react-spinners"


function App() {
    const [users, setUsers] = useState([]);
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        setTimeout(() => {
            dispatch(addMovie([...Film]))
            setLoading(false)
        }, 3000)
    }, [])

    return (
        <>
            {
                loading ? <ClockLoader
                        color={ '#18a7ad' }
                        size={ 300 }
                        cssOverride={{ margin: '200px auto' }}
                    /> 
                :
                <div className="App">
                    <Router>
                        <Routes>
                            <Route path="/home" element={<Home />}/>
                            <Route path="/" element={<SignIN users={users} setUsers={setUsers} />} />
                            <Route path="/logIn" element={<LogIN users={users} />} />
                            <Route path="/admin" element={<Admin/>}/>
                        </Routes>
                    </Router>
                </div>
            } 
        </>
    );
}

export default App;
