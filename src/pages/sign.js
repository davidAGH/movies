import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../component/customButton";
import { Input } from "../component/customInput";
export function SignIN({ users }) {
    const [list, setList] = useState([]);
    const [inputValue1, setInputValue1] = useState('');
    const [inputValue2, setInputValue2] = useState('');
    const [inputValue3, setInputValue3] = useState('');
    const [inputValue4, setInputValue4] = useState('');
    const [inputValue5, setInputValue5] = useState('');
    const navigate = useNavigate();

    const InputChange1 = (e) => {
        setInputValue1(e.target.value);
    };

    const InputChange2 = (e) => {
        setInputValue2(e.target.value);
    };

    const InputChange3 = (e) => {
        setInputValue3(e.target.value);
    };

    const InputChange4 = (e) => {
        setInputValue4(e.target.value);
    };

    const InputChange5 = (e) => {
        setInputValue5(e.target.value);
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const isValidPhoneNumber = (phoneNumber) => {
        const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
        
        return phoneRegex.test(phoneNumber);
    };

    const signInButton = () => {
        if (!inputValue1 || !inputValue2 || !inputValue3 || !inputValue4 || !inputValue5) {
            alert("Please fill in all fields.");
            return;
        }

        if (!isValidEmail(inputValue2)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!isValidPhoneNumber(inputValue3)) {
            alert("Please enter a valid phone number.");
            return;
        }

        if (inputValue4.length < 8) {
            alert("Password must be at least 8 characters long.");
            return;
        }
    
        if (inputValue4 !== inputValue5) {
            alert("Passwords do not match.");
            return;
        }

        const newUser = {
            username: inputValue1,
            email: inputValue2,
            number: inputValue3,
            password: inputValue4,
        };

        setList([...list, newUser]);

        localStorage.setItem("users", JSON.stringify([...users, newUser]));

        setInputValue1('');
        setInputValue2('');
        setInputValue3('');
        setInputValue4('');
        setInputValue5('');

        navigate("/home");
    }

    console.log(list)
    return (
        <div className="container2">
            <div className="content">
                <div className="namePage">
                    <h1>S h o w H u b</h1>
                    <p>Sign in to ShowHub</p>
                </div>

                <div className="signin">
                    <form>
                        <label>username</label><br/>
                        <Input
                            value={inputValue1}
                            onChange={InputChange1}
                        /><br/>

                        <label>email</label><br/>
                        <Input
                            type={"email"}
                            value={inputValue2}
                            onChange={InputChange2}
                        /><br/>

                        <label>number</label><br/>
                        <Input
                            value={inputValue3}
                            onChange={InputChange3}
                        /><br/>

                        <label>password</label><br/>
                        <Input
                            value={inputValue4}
                            onChange={InputChange4}
                        /><br/>

                        <label>confirm password</label><br/>
                        <Input
                            value={inputValue5}
                            onChange={InputChange5}
                        /><br/>

                        <Button onClick={signInButton} text={"sign in"}/>
                    </form>
                </div>

                <div className="alt">
                    <p>already have a account? <Link to="/logIn">Sign up</Link></p>
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