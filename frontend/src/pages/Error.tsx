import Footer from "../ui_components/Footer";
import NavBar from "../ui_components/NavBar/NavBar";
import Modal from "../ui_components/Modal/Modal";
import warningIcon from "../assets/warning.svg";


const Error = () => {
    return <>
    <NavBar/>
    <main>
        <Modal 
        title="An Error Occurred!" 
        message="404 Page Not Found" 
        icon={warningIcon} 
        link="/" 
        btn_text="Back To Home" 
        type="error"/>
    </main>
    <Footer/>
    </>
}

export default Error;