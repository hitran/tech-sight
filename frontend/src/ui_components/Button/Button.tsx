import "./Button.css";
import { useNavigate } from "react-router-dom";

const Button = ({btn_type, btn_text, btn_link}) => {
    const navigate = useNavigate();
    let bg_color = ""
    switch(btn_type) {
        case "success":
            bg_color = "green";
            break;
        case "error":
            bg_color = "red";
            break;
        default:
            bg_color = "yellow";
    }

    const handleClick = () => {
        navigate(btn_link);
    }
    
    return <button className={`${btn_type}`} onClick={handleClick}>{btn_text}</button>;
}

export default Button;
