import LoginForm from '../forms/login'

const LoginPage = () => {
    return (
        <div className="auth-container login-page">
            <div
                className="
                    auth-box
                    shadow-lg
                "
            >
                <div className="form-side">
                    <div className="form-wrapper">
                        <LoginForm />
                    </div>
                </div>
                <div className="banner-side">
                    <div>
                        <h1 className="fw-bold mb-3">
                            Welcome Back
                        </h1>
                        <p>
                            Login to continue using the system
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;