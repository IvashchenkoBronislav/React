import React from 'react';
import "../css/header.css";
import {ButtonNav, AppButton, ButtonToggle} from "./button.jsx";
// import AppButton from "./button";
import logo from "../img/logo-1.png"
import TitleIMG from "../img/watch-phone.png"
import "../css/button.css"


class TitleImg extends React.Component{
    render(){
        return(
            <img src={TitleIMG} alt="Phone"/>
        )
    }
}



class TitleText extends React.Component{
    render(){
        return(
            <div className="title__text">
                <div className="text__head">Make Business Easy With Zero</div>
                <div className="text__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nulla excepturi vel, ea quia sint minus beatae quis labore iusto!</div>
                <div className="appButton__conteiner">
                    <AppButton><i className="fa fa-android" aria-hidden="true"></i> GOOGLE PLAY</AppButton>
                    <AppButton><i className="fa fa-apple" aria-hidden="true"></i> APP STORE</AppButton>
                </div>
            </div>
        )
    }
}


class HeaderTitle extends React.Component{
    render(){
        return(
            <div className="header__title">
                <TitleText></TitleText>
                <TitleImg></TitleImg>
            </div>
        )
    }
}



class LogoHeader extends React.Component{
    render(){
        return(       
            <img src={logo} alt="Logo" className={this.props.children}/>

        )
    }
}

class NavBar extends React.Component{
    render(){
        return(
            <div className={this.props.children}>
                <ButtonNav ref="test">HOME</ButtonNav>
                <ButtonNav>ABOUT</ButtonNav>
                <ButtonNav>HOW TO USE</ButtonNav>
                <ButtonNav>FAQ`S</ButtonNav>
                <ButtonNav>SCREENSHORTS</ButtonNav>
                <ButtonNav>DOWNLOAD</ButtonNav>
                <ButtonNav>PRICING</ButtonNav>
                <ButtonNav>CONTACT</ButtonNav>
            </div>
        )
    }
}

class Header extends React.Component{
    
    render(){
        return(
            <div className="header" id="header">
                <div className='header__box_nav'>
                    <div className="header__button">
                        <LogoHeader>header__logo</LogoHeader>
                        <NavBar>header__nav</NavBar>
                    </div>
                    <div className="header__button1">
                        <LogoHeader>header__logo</LogoHeader>
                        <NavBar>header__nav</NavBar>
                    </div>
                </div>
                <div className='header__mini_nav'>
                    <div className="header__button__black" >
                        <div className="header__button_mini_cont">
                            <LogoHeader>header__mini_logo</LogoHeader>
                            <ButtonToggle></ButtonToggle>
                        </div>
                        <NavBar>header__nav__black</NavBar>
                        </div>
                </div>
                
                <HeaderTitle></HeaderTitle>
                </div>
        )
        
    }
}

let checkScroll =() =>{
    window.addEventListener("scroll",()=>{
        if (window.scrollY >=40){
            document.querySelector(".header__button").style.display = "none"
            document.querySelector(".header__button1").style.top = "0px"
        }else {
            document.querySelector(".header__button").style.display = "flex"
            document.querySelector(".header__button1").style.top = "-140px"
        }
    })
}


window.onload = checkScroll()



export default Header