import "./HeaderRow.css";
import { NavInput, NavLink } from "./NavLink.jsx";

function HeaderRow() {
    return (
        <div className="HeaderRow">
            <NavLink iconLink = "fa-brands fa-internet-explorer" linkText = "Content" link = "#" />
            <NavLink iconLink = "fa-brands fa-internet-explorer" linkText = "Learning" link = "#" />
            <NavInput />
            <NavLink iconLink = "fa-brands fa-internet-explorer" linkText = "News Paper/ Journal/ Book" link = "#" />
        </div>
    );
}
export default HeaderRow;