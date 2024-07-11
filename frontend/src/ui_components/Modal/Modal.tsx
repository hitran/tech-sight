import Button from "../Button/Button";
import "./Modal.css";

const Modal = ({title, message, type, icon, link, btn_text}) => {
    return (
        <div className="modal-wrapper">
            <div className="bg-grey modal text-center">
                <div className="bg_img"></div>
                <div className="w-[40px] h-[40px] m-auto mb-[10px]"><img src={icon} className="w-full"/></div>
                <h1 className="mb-[10px]">{title}</h1>
                <p className="mb-[20px]">{message}</p>
                {link && btn_text && <Button btn_type={type} btn_text={btn_text} btn_link={link}/>}
            </div>
        </div>
       
    )
}

export default Modal;