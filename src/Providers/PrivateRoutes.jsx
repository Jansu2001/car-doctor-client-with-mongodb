import { useContext } from "react";
import { AuthContext } from "./AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {

    const { user, loader } = useContext(AuthContext)

    if (loader) {
        return <progress className="progress w-56"></progress>
    }
    else if (user) {
        return children;
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoutes;