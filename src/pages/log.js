import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";


export function LogIN({ users }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = () => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const user = storedUsers.find(user => user.email === email && user.password === password);
    
        if (user) {
            navigate("/home");
        } else {
            alert("Invalid email or password.");
        }
    }

    return (
        <div className="container">
            <div className="content">
                <div className="namePage">
                    <h1>S h o w H u b</h1>
                    <p>Login to ShowHub</p>
                </div>

                <div className="login">
                    <label>email</label><br/>
                    <input  
                        onChange={handleEmailChange}
                    /><br/>

                    <label>Password</label><br/>
                    <input
                        onChange={handlePasswordChange}
                    /><br/>

                    <button onClick={handleLogin}>Login</button>
                </div>

                <div className="alt">
                    <p>New to ShowHub? <Link to="/">Create an account.</Link></p>
                </div>
            </div>

            <div className="footer">
                <div className="footerFlex">
                    <div className="footerChild">
                        <h1>social media links</h1>
                        <p>nourddine benyahya</p>
                        <p>nourddine benyahya</p>
                        <p>EedinNour</p>
                        <p>+212607-081298</p>
                        <p>nourddine ben</p>
                    </div>

                    <div className="footerChild">
                        <h1>sponsers</h1>
                        <p>Ciso - Amazon - Google - Azure - Linkedln</p>
                        <p>IBM - Facebook - Tesla - Appel - Microsoft</p>
                        <p>Ofppt - 1337</p>
                    </div>

                    <div className="footerChild">
                        <h1>company</h1>
                        <p>Register            Login</p>
                        <p>Wishlist            Our Products</p>
                    </div>
                </div>
                
                <div className="footerChild2">
                    <p>A Fawectt book</p>
                    <p>Published The Random House Publishing Group</p>
                    <p>Copyright @ 2022 by nourddine</p>
                    <p>All rights reserved</p>
                </div>
            </div>
        </div>
    )
}