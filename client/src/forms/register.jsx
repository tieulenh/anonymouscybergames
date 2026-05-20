import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveAuthData } from '../utils/localstorage';

const RegisterForm = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async (e) => { // Phải có async ở đây
        e.preventDefault();

        // Kiểm tra khớp mật khẩu
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                // Gửi đủ các trường mà model Accounts ở Backend yêu cầu
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('data', data);
                saveAuthData(data.token, data.data);
                alert(data.message); // "Register success!" từ Java
                navigate('/'); // Chuyển hướng về trang chủ sau khi đăng ký thành công
            } else {
                alert(data.message); // Hiển thị lỗi từ Java (ví dụ: "Email already in use!")
            }
        } catch (error) {
            console.error('Error:', error);
            alert("Registration failed! Please check if the server is running.");
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
                Register
            </h2>

            <form
                className="register-form"
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
                        className="form-control"
                        required
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                    />

                </div>

                <div className="form-group mb-3">

                    <label
                        htmlFor="password"
                        className="form-label"
                    >
                        Password:
                    </label>

                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        required
                        value={password}
                        onChange={(e) =>
                            setPassword(e.target.value)
                        }
                    />

                </div>

                <div className="form-group mb-4">

                    <label
                        htmlFor="confirmPassword"
                        className="form-label"
                    >
                        Confirm Password:
                    </label>

                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        required
                        value={confirmPassword}
                        onChange={(e) =>
                            setConfirmPassword(
                                e.target.value
                            )
                        }
                    />

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
                    Register
                </button>

            </form>

            <div className="mt-3 text-center">

                Already have an account?

                <a
                    href="/login"
                    className="btn btn-link"
                >
                    Login here
                </a>

            </div>

        </div>
    );
}

export default RegisterForm;