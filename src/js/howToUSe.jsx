import React from "react"
import "../css/howToUse.css"
import Download from "../img/howToUse/download.svg"
import Install from "../img/howToUse/install.svg"
import rTUse from "../img/howToUse/ready-to-use.svg"
import Icon from"../img/howToUse/icons.jpg"
import screen1 from "../img/howToUse/screen/htu-f1.png"
import screen2 from "../img/howToUse/screen/htu-f2.png"

class HTU_BigInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            info:[{
                name:"div",
                title:"User Friendly Interface, Very Easy To Use",
                text1:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel.",
                text2:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
                link:screen1,
            },{
                name:"div1",
                title:"User Friendly Interface, Very Easy To Use",
                text1:"Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc blandit vel.",
                text2:"Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.",
                link:screen2,
            }]
        }
    }

    render(){
        return(
            <div className="htu__big_info">
                {this.state.info.map((part)=>{
                    return(
                        <div className="htu__big_info__case" key={part.name}>
                            
                            <div className="htu__case_text">
                                <div className="htu__titul">{part.title}</div>
                                <div className="htu__text">{part.text1}</div>
                                <div className="htu__text">{part.text2}</div>
                            </div>
                            <img src={part.link} alt=""/>
                        </div>
                    )
                })}
            </div>
        )
    }
}


class HTU_TF extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:[{
                    name:"Total Download",
                    text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
                    nume:"17",
                    numeT:"m+"
                },
                {
                    name:"App Rating",
                    text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
                    nume:"9.5",
                    numeT:"/10"
                },
                {
                    name:"User Reviews",
                    text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris.",
                    nume:"2500"
            }],

            info:{
                title:"True Facts",
                text:"Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero."
            }
        }
    }
    render(){
        return(
            <div className="htu__dop_info">
                <div>
                    <div className="htu__titul">{this.state.info.title}</div>
                    <div className="htu__text">{this.state.info.text}</div>
                </div>
                <div>{this.state.text.map((part)=>{
                    return(
                        <div className="htu__dop_info__case" key={part.name}>
                            <div className="htu__dop_info__stat">{part.nume}<span>{part.numeT}</span></div>
                            <div className="htu__dop_info__titul">{part.name}</div>
                            <div className="htu__dop_info__text">{part.text}</div>
                        </div>                            
                    )
                    })}   
                </div>             
            </div>
        )
    }

}


class HTU_Table extends React.Component{
    render(){
        return(
            <div className="htu__info__table">
                <ul>
                    <li>Nulla consequat massa quis enim.</li>
                    <li>Donec pede justo, fringilla</li>
                    <li>In enim justo, rhoncus ut</li>
                </ul>
                <ul>
                    <li>Aenean leo ligula porttitor</li>
                    <li>Phasellus viverra nulla</li>
                    <li>Curabitur ullamcorper nisi</li>
            </ul>
            </div>
        )
    }

    
}

class HTU_Info extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text:"Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Vivamus elementum semper nisi. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.",
            titul:"Why choose Zero?",
        }
    }

    render(){
        return (
            <div className="htu__info">
                <div className="htu__info__conte">
                    <div className="htu__titul">{this.state.titul}</div>
                    <div className="htu__text">{this.state.text}</div>
                    <HTU_Table/>
                </div>
                <img  src={Icon} alt="icon"/>
            </div>
        )
    }

}


class HowToUse extends React.Component{
    constructor(props){
        super(props);
        this.state={
            htuInfo:{
                title:"How To Use",
                text:"Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero."
            },

            htuCase:[
                {link:Download, titul:"Download" ,text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan."},
                {link:Install, titul:"Install" ,text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan."},
                {link:rTUse , titul:"Ready To Use" ,text:"Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan."}
            ]

        }
    }

    render(){
        return(
            <div className="htu">
                <div className="htu__intro">
                    <div className="htu__titul">{this.state.htuInfo.title}</div>
                    <div className="htu__text">{this.state.htuInfo.text}</div>
                </div>
                <div className="htu__cont">{this.state.htuCase.map((eliment)=>{
                    return(
                        <div className="htu__case" key={eliment.titul}>
                            <img className="htu__case__img" src={eliment.link} alt={eliment.titul}/>
                            <div className="htu__titul">{eliment.titul}</div>
                            <div className="htu__text">{eliment.text}</div>
                        </div>
                    )
                })}</div>
                <HTU_Info/>
                <HTU_TF/>
                <HTU_BigInfo/>
            </div>
        )
    }
}  



export {HowToUse} 