import React from "react";
import CartWidget from "./cartWidget";

export default function NavBar({linksNavBar}){
    return(
        <>
        <ul className="navBar">
            {linksNavBar.map(link=><li><a href='#'>{link}</a></li>)}
        <CartWidget/>
        </ul>
        </>
    )
}