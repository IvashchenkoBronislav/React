import React from 'react';
import "../css/header.css";
import {ButtonNav, AppButton, ButtonToggle} from "./button.jsx";
import logo from "../img/logo-1.png"
import TitleIMG from "../img/watch-phone.png"
import "../css/button.css"




class HeaderNav extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            headNavFix:false
        }

        this.nav = {
            buttomId:[0,1,2,3,4,5,6,7],
            buttomName:["HOME","ABOUT","HOW TO USE","FAQ`S","SCREENSHORTS","DOWNLOAD", "PRICING", "CONTACT"]
        }
    }

    render(){
        return(
            <div className="header__nav">
                <img src={logo} alt="logo"/>
                <div className="header__nav__case_button">

                </div>
            </div>
        )
    }
}

class HeaderMini extends React.Component{
    constructor(props){
        super(props);
        this.state ={

        }
    }


}


class Header extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            headNavFix:false
        }
    }
    render(){
        return(
            <div className="header">
                
            </div>
        )
    }


}

export {Header}