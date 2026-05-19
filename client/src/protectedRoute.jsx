import { Navigate } from "react-router-dom"
import { getToken } from "./utils/localstorage"
import { jwtDecode } from "jwt-decode"

function ProtectedRoute({ children, role }) {
    const token = getToken()

    if (!token) {
        return <Navigate to="/login" />
    }

    try {
        const decoded = jwtDecode(token)

        if (role && decoded.role !== role) {
            return <Navigate to="/" />
        }

        return children
    } catch (err) {
        return <Navigate to="/login" />
    }
}

export default ProtectedRoute;