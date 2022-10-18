import "./search-box.css";
import React from "react";

export const SearchBox = ({placeholder,handler})=> {
    return(
        <input
            className="search" 
            type='search'
            placeholder= {placeholder}
            onChange={handler}
        />

    )
  
}