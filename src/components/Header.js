import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function Header() {

    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;
    useEffect(() => {
        try {
            fetch('https://myblog-api.onrender.com/profile', {
                credentials: 'include'
            }).then(response => {
                response.json().then(userInfo => {
                    setUserInfo(userInfo)
                })
            }).catch(err => {
                console.log(err);
            })
        } catch (error) {
            console.log(error);
        }
    }, [])


    function logout() {
        fetch('https://myblog-api.onrender.com/logout', {
            credentials: 'include',
            method: 'POST',
        })
        setUserInfo(null)
    }

    return (
        <header>
            <Link to="/" className='logo'>MyBlog</Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'>Create new post</Link>
                        <a className="logoutBtn" onClick={logout} >Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </nav>
        </header>
    );
}