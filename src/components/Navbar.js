 import React from 'react'
 import { FaUserAlt } from "react-icons/fa";
 import { FaSearch } from "react-icons/fa";
 import { FaShopify } from "react-icons/fa";

export default function  Navbar() {
    return(
        <>
        <div className="header">
    <div className="container">
   <div className="row">
        <div className="col-sm-4 shoppy">
            <h1 id="logo">Shoppy</h1>
            <FaShopify/>
        </div>
       
    <div className="col-sm-4">
            <div className="search-box">
                <div className="input-group custom-search-form">
                    <input type="text" className="form-control"/>
                    <span className="input-group-btn">
                    <button className="btn btn-default" type="button">
                    <FaSearch/>
                    </button>
                    </span>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="register">
                <span><FaUserAlt/></span>
                <button className="btn btn_register">Register</button>
            </div>
        </div>
    </div>
</div>

</div>



</>


    )
}