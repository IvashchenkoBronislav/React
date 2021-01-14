import React from "react";
import "../css/contact.css"
import Logo from "../img/logo-1.png"


class ContGreen extends React.Component{
    render(){
        return(
            <div className="contact_green">
                <div className="contact_green__text">Make Your App Landing Page in Just a Minute</div>
                <button className="contact_green__button">PURCHASE NOW</button>
            </div>
        )
    }
}

class GIT extends React.Component{
    render(){
        return(
            <div className="GIT">
                <div className="GIT__titul">GET IN TOUCH</div>
                <div className="GIT__text">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero.</div>
                <div className="GIT__massage">
                    <input className="GIT__massage__input" type="text" placeholder="Full Name"/>
                    <input className="GIT__massage__input" type="text" placeholder="E-mail Address"/>
                    <textarea className="GIT__massage__text_area" name="" cols="30" rows="10" placeholder="Your Message"></textarea>
                    <button className="GIT__massage__button">SEND MESSAGE</button>
                </div>
            </div>
        )
    }
}

class ContBlack extends React.Component{
    constructor(props){
        super(props);

        this.contact = {
            icon:[
                {name:"mark", icon:"lnr lnr-map-marker",text:"ADDRESS",info0:"A 586, Eiffel Tower, North Evenue, New York City, USA 58986",},
                {name:"mail", icon:"lnr lnr-envelope",text:"Email", info0:"theme@domainname.com",info1:"support@domainname.com"},
                {name:"phone", icon:"lnr lnr-phone-handset",text:"Phone", info0:"+0 44 568 6589",info1:"+0 44 365 4859"}
        ]}

        this.footer = {
            text:"All right reserved.",    
            icon:[
                {name:"faceboock", icon:"fa fa-facebook icon"},
                {name:"twitter", icon:"fa fa-twitter icon"},
                {name:"pinterest", icon:"fa fa-pinterest-p icon"},
                {name:"linktin", icon:"fa fa-linkedin icon"}
            ]
        }
    }

    render(){
        return(
            <div className="contact_black">
                <img className="contact_black__logo" src={Logo} alt="logo"/>
                <div className="contact_black__cont">{this.contact.icon.map((part)=>{
                    return(
                        <div className="contact_black__cont__eliment" key={part.name}>
                            <i className={part.icon}></i>
                            <div className="contact_black__cont__eliment__text">{part.text}</div>
                            <div className="contact_black__cont__eliment__info">{part.info0}</div>
                            <div className="contact_black__cont__eliment__info">{part.info1}</div>
                        </div>
                    )
                })}</div>
                <div className="contact_black__footer">
                    <div className="contact_black__footer__text">{this.footer.text}</div>
                    <div className="contact_black__footer__icon">{this.footer.icon.map((part)=>{
                        return(
                            <i className={part.icon} key={part.name}></i>
                        )
                    })}</div>
                </div>
            </div>
        )
    }
}

class Contact extends React.Component{
    render(){
        return(
            <div className="contact">
                <GIT/>
                <ContGreen/>
                <ContBlack/>
            </div>
        )
    }
}



export {Contact}