import { NavLink } from "../NavLink";
import './Nav.css';

let property = {fontSize: '1rem', fontWeight: '600'}
let bgColors = {backgroundColor: "white", color: 'black', fontSize: '1rem', fontWeight: '600'}
export default function Nav() {
    return (
        <>
        <div className="Nav">
            <NavLink linkText="HOME" link="#" property={bgColors}/>
            <NavLink linkText="THE UNIVERSITY" link="#" property={property}/>
            <NavLink linkText="ADMINISTRATION" link="#" property={property}/>
            <NavLink linkText="ACADEMICS" link="#" property={property}/>
            <NavLink linkText="STUDENTS" link="#" property={property}/>
            <NavLink linkText="AFFILIATION" link="#" property={property}/>
            <NavLink linkText="FACILITIES" link="#" property={property}/>
            <NavLink linkText="CAREERS" link="#" property={property}/>
            <NavLink linkText="ALUMNI" link="#" property={property}/>
            <NavLink linkText="IQAC/NAAC/NIRF" link="#" property={property}/>
            <NavLink linkText="CONTACT US" link="#" property={property}/>
        </div>
        </>
    );
}