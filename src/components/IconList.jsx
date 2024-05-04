import "./IconList.css";
import NavIcon from "./NavIcon.jsx";

function IconList() {
    return(<div className="icons">
        <NavIcon iconLink = "fa-brands fa-facebook" link = "#" colour="blue" />
        <NavIcon iconLink = "fa-brands fa-instagram" link = "#" colour = "violet"/>
        <NavIcon iconLink = "fa-brands fa-twitter" link = "#" colour = "skyblue"/>
        <NavIcon iconLink = "fa-brands fa-whatsapp" link = "#" colour = "green"/>
        <NavIcon iconLink = "fa-brands fa-youtube" link = "#" colour = "lightred"/>
        </div>
    );
}

export default IconList;