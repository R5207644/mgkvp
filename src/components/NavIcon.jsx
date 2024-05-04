import "./NavIcon.css";

function NavIcon({ link, colour, iconLink, property}) {
    return(
        <a href={link} id="anchor" className={colour} style={property}>
            <i className= { iconLink } ></i>
        </a>
    );
}
export default NavIcon;