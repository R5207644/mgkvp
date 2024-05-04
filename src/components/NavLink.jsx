import "./NavLink.css";

function NavLink({iconLink, linkText, link, property}) {
    return (
        <>
        <a href={link} style={property}>
            <i className = { iconLink } ></i>
            { linkText }
        </a>
        </>
    );
}

function NavInput() {
    return (
        <input type="text" placeholder="search E-Content" />
    );
}

export { NavInput, NavLink };
