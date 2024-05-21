import { useNavigate, useLocation } from "react-router-dom";
import { WiAlien } from "react-icons/wi";

const NavBar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    
    const isActive = (path) => {
        return location.pathname === path;
    }

    const routeChange = (path) => {
      return () => navigate(path);
    }
    return (
        <>
            <div className="w-3/5">
                <button onClick={routeChange('/circleProfile')} className={`flex items-center navbar-button w-30 font-bold text-xl pl-30 ${isActive('/circleProfile') ? 'navbar-button-selected' : ''}`}>
                    <p className="text-5xl"><WiAlien/></p> 
                    <span>Khye Jac</span>
                </button>
            </div>
            <div className="flex w-2/5">
                <button onClick={routeChange('/circleProfile/aboutMe')} className = {isActive('/circleProfile/aboutMe') ? "navbar-button-selected" : "navbar-button"}>
                    About Me
                </button>
                <button onClick={routeChange('/circleProfile/hobbies')} className = {isActive('/circleProfile/hobbies') ? "navbar-button-selected" : "navbar-button"}>
                    Hobbies
                </button>
                <button onClick={routeChange('/circleProfile/music')} className = {isActive('/circleProfile/music') ? "navbar-button-selected" : "navbar-button"}>
                    Music
                </button>
            </div>
        </>
    )
}

export default NavBar;