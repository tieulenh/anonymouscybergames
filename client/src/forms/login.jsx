import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAuthData } from '../utils/localstorage';

const LoginForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            console.log("response status:", response.status);
            
            const data = await response.json();
            if (data.success) {
                alert(data.message);
                saveAuthData(data.token, data.data);
                navigate('/');
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div
            className="
                border
                rounded-4
                shadow
                p-4
                bg-white
                d-flex
                flex-column
                justify-content-center
            "
            style={{
                width: "320px",
                minHeight: "420px"
            }}
        >

            <h2 className="text-center mb-4">
                Login
            </h2>

            <form
                className="login-form"
                onSubmit={handleSubmit}
            >

                <div className="form-group mb-3">

                    <label
                        htmlFor="email"
                        className="form-label"
                    >
                        Email:
                    </label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        className="form-control"
                        required
                    />

                </div>

                <div className="form-group mb-4">

                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password:
                    </label>

                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                        className="form-control"
                        required
                    />
                    <div className="text-end mt-2">
                        <a
                            href="/"
                            className="
                                text-decoration-none
                                small
                            "
                        >
                            Forgot password?
                        </a>

                    </div>

                </div>

                <button
                    type="submit"
                    className="
                        btn
                        text-white
                        w-100
                    "
                    style={{
                        backgroundColor: "#007bff"
                    }}
                >
                    Login
                </button>

            </form>

            <div className="mt-3 text-center">

                Don't have an account?

                <a
                    href="/register"
                    className="btn btn-link"
                >
                    Register here
                </a>

            </div>

        </div>
    );
}

export default LoginForm;