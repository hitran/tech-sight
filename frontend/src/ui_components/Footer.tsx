import copyright from '../assets/copyright.svg'
const Footer = () => {
    return <footer className="bg-yellow fixed left-0 bottom-0 w-full p-2.5">
        <p className="text-center">Copyright <img src={copyright} className="inline-block w-3.5"/> 2024. All Rights Reserved</p>
    </footer>
}

export default Footer;