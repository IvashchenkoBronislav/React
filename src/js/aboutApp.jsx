import React from "react"
import About from "../img/about.jpg"
import "../css/aboutApp.css"


class AboutApp extends React.Component{ 
    constructor(props){
        super(props);
        this.state = {
            info:[
                {title:"About App", text:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed! Facere quod consectetur a qui dignissimos aspernatur eum maiores, eius nihil, atque est ratione vitae, hic blanditiis consequuntur facilis placeat?",text1:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, sed! Facere quod consectetur a qui dignissimos aspernatur eum maiores, eius nihil, atque est ratione vitae, hic blanditiis consequuntur facilis placeat?"},
                {name:"img", link:About}
            ]
        }
    }



    render(){
        return(
            <div className="aboutApp">
                <img src={this.state.info[1].link} alt={this.state.info[0].name} className="aboutApp__img"/>
                <div className="aboutApp__info">
                    <div className="aboutApp__info__title">{this.state.info[0].title}</div>
                    <div className="aboutApp__info__text">{this.state.info[0].text}</div>
                    <div className="aboutApp__info__text">{this.state.info[0].text1}</div>
                </div>
            </div>
        )
    }
}


export default AboutApp