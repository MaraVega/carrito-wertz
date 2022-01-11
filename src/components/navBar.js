import React from "react";
export default function NavBar({linksNavBar}){
    return(
        <>
        <ul className="navBar">
            {linksNavBar.map(link=><li><a href='#'>{link}</a></li>)}
        </ul>
        </>
    )
}