import { useLocation } from "react-router-dom";


export const navbarLogic = () => {
    const location = useLocation();
    const isSignUpPage = location.pathname === '/signUp' || location.pathname === '/signUp/planForm';
    const showItem = location.pathname === '/signIn';
    const isStartHome = location.pathname === '/home';
    return { isSignUpPage, showItem,isStartHome };
};