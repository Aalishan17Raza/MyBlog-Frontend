import { useState } from 'react'

export default function RegisterPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    async function register(e) {
        e.preventDefault();
        try {
            const response = await fetch('https://myblog-api-lefl.onrender.com/register', {
                method: 'POST',
                body: JSON.stringify({ username, password }),
                headers: { 'Content-Type': 'application/json' },
            })
            if (response.status !== 200) {
                alert("Registration Failed");
            } else {
                alert("Registration successfull");
            }
        } catch (error) {
            alert("registration failed");
            console.log(error);
        }
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <input type="password" placeholder="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
    );
}