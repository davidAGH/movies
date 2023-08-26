import { useState } from 'react'

export function Home() {
    const [film, setFilm] = useState([
        
    ])

    


    return (
        <div className="container3">
            <div className="header">
                <p className="logo">ShowHub</p>
                <div className="about">
                    <p>Movies</p>
                    <p>Series</p>
                    <p>Contact</p>
                    <p>About Us</p>
                </div>

                <div className="inputButton">
                    <input/>
                    <button>add FILM</button>
                </div>
            </div>

            <div className="main">
                

                <div className="films">
                    <h1>Films for you</h1>
                    
                </div>

                <div className="sevice">
                    <div className='buy'>
                        <div className='h1'><h1>basic</h1></div>
                        <div>
                            <p>Watch all you want. Ad-free.</p>
                            <p>Recommendations just for you.</p>
                            <p>Change or cancel your plan anytime.</p>
                            <p>Resolution. 480p</p>
                            <p>Video quality. Good</p>
                            <p>Monthly price. MAD65</p>
                        </div>
                        <div className='h1'><h1>buy</h1></div>
                    </div>

                    <div className='buy'>
                        <div className='h1'><h1>standard</h1></div>
                        <div>
                            <p>Watch all you want. Ad-free.</p>
                            <p>Recommendations just for you.</p>
                            <p>Change or cancel your plan anytime.</p>
                            <p>Resolution. 480p</p>
                            <p>Video quality. Good</p>
                            <p>Monthly price. MAD65</p>
                        </div>
                        <div className='h1'><h1>buy</h1></div>
                    </div>

                    <div className='buy'>
                        <div className='h1'><h1>premuim</h1></div>
                        <div>
                            <p>Watch all you want. Ad-free.</p>
                            <p>Recommendations just for you.</p>
                            <p>Change or cancel your plan anytime.</p>
                            <p>Resolution. 480p</p>
                            <p>Video quality. Good</p>
                            <p>Monthly price. MAD65</p>
                        </div>
                        <div className='h1'><h1>buy</h1></div>
                    </div>
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