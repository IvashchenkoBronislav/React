import React from "react"
import "../css/screenShorts.css"
import sc_1 from "../img/screen/screen-1.jpg"
import sc_2 from "../img/screen/screen-2.jpg"
import sc_3 from "../img/screen/screen-3.jpg"
import sc_4 from "../img/screen/screen-4.jpg"
import sc_5 from "../img/screen/screen-5.jpg"
import sc_6 from "../img/screen/screen-6.jpg"
import sc_7 from "../img/screen/screen-7.jpg"
import sc_8 from "../img/screen/screen-8.jpg"




class ScreenShots extends React.Component {
    constructor(props){
        super(props);
        this.state={
            titul:"APP SCREENSHOTS",
            text:"Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero."
        }

        this.carousel={
            scr:[
                {name:"scrn1", link:sc_1},
                {name:"scrn2", link:sc_2},
                {name:"scrn3", link:sc_3},
                {name:"scrn4", link:sc_4},
                {name:"scrn5", link:sc_5},
                {name:"scrn6", link:sc_6},
                {name:"scrn7", link:sc_7},
                {name:"scrn8", link:sc_8},
            ]
        }

        this.toggle = {
            width:0,
        }

        this.bAct = {

        }

        
    }

    width(){
        window.onload= ()=>{
            setInterval (()=>{
            
                
            
                if(window.innerWidth <=1330 && window.innerWidth >=1001 ){

                    document.getElementById("b2").style.display = "block"
                    document.getElementById("b3").style.display = "none"
                    document.getElementById("b4").style.display = "none"
                    document.getElementById("b5").style.display = "none"
                    document.getElementById("b6").style.display = "none"
                    document.getElementById("b7").style.display = "none"
                    

                    return this.toggle.width = 1

                }else if(window.innerWidth <=1000 && window.innerWidth >=634){

                    document.getElementById("b3").style.display = "block"
                    document.getElementById("b2").style.display = "block"
                    document.getElementById("b4").style.display = "none"
                    document.getElementById("b5").style.display = "none"
                    document.getElementById("b6").style.display = "none"
                    document.getElementById("b7").style.display = "none"
                    

                    return this.toggle.width = 2
                
                }else if(window.innerWidth <=633){
                    document.getElementById("b3").style.display = "block"
                    document.getElementById("b2").style.display = "block"
                    document.getElementById("b4").style.display = "block"
                    document.getElementById("b5").style.display = "block"
                    document.getElementById("b6").style.display = "block"
                    document.getElementById("b7").style.display = "block"
                    

                    return this.toggle.width = 3

                }else{
                    document.getElementById("b2").style.display = "none"
                    document.getElementById("b3").style.display = "none"
                    document.getElementById("b4").style.display = "none"
                    document.getElementById("b5").style.display = "none"
                    document.getElementById("b6").style.display = "none"
                    document.getElementById("b7").style.display = "none"
                    
                    return this.toggle.width = 0

                }
            })        
        }
    }


    active(num){
        let idb = num;
        let carousel = document.querySelector(".carousel__cont");


        if(this.toggle.width === 0){

            if (idb === 1){
                carousel.style.transform = "translate(-1300px, 0)";
            }else if (idb === 0) {
                carousel.style.transform = "translate(0px, 0px)"
            }

        }else if(this.toggle.width === 1){

            if (idb === 0){
                carousel.style.transform = "translate(0px, 0px)"
            }else if (idb === 1) {
                carousel.style.transform = "translate(-970px, 0px)"
            }else if (idb === 2) {
                carousel.style.transform = "translate(-1650px, 0px)"
            }

        }else if (this.toggle.width === 2){

            if (idb === 0){
                carousel.style.transform = "translate(0px, 0px)"
            }else if (idb === 1) {
                carousel.style.transform = "translate(-650px, 0px)"
            }else if (idb === 2) {
                carousel.style.transform = "translate(-1300px, 0px)"
            }else if (idb === 3) {
                carousel.style.transform = "translate(-1950px, 0px)"
            }    

        }else if (this.toggle.width === 3){

            if (idb === 0){
                carousel.style.transform = "translate(0px, 0px)"
            }else if (idb === 1) {
                carousel.style.transform = "translate(-330px, 0px)"
            }else if (idb === 2) {
                carousel.style.transform = "translate(-662px, 0px)"
            }else if (idb === 3) {
                carousel.style.transform = "translate(-994px, 0px)"
            }else if (idb === 4) {
                carousel.style.transform = "translate(-1326px, 0px)"
            }else if (idb === 5) {
                carousel.style.transform = "translate(-1658px, 0px)"
            }else if (idb === 6) {
                carousel.style.transform = "translate(-1990px, 0px)"
            }else if (idb === 7) {
                carousel.style.transform = "translate(-2322px, 0px)"
            }

        }
    }

    render(){
        return(
            <div className="screenshorts">
                {this.width()}
                <div className="screenshorts__info">
                    <div className="screenshorts__info__titul">{this.state.titul}</div>
                    <div className="screenshorts__info__text">{this.state.text}</div>
                </div>
                <div className="screenshorts__carousel">
                    <div className="carousel__cont" style={{transform: "translate(0px , 0px)"}}>
                        {this.carousel.scr.map((n)=>{
                            return (
                                <img className="screenshorts__carousel__img"  src={n.link} alt={n.name} key={n.name}/>
                            )
                        })}
                    </div>
                    
                </div>
                <div className="screenshorts__button_cont">
                    <button className="scroll_button" id="b0" onClick={()=>{
                        this.active(0)
                    }}></button>
                    <button className="scroll_button" id="b1" onClick={()=>{
                        this.active(1)
                    }}></button>
                    <button className="scroll_button" id="b2"  onClick={()=>{
                        this.active(2)
                    }}></button>
                    <button className="scroll_button"  id="b3" onClick={()=>{
                        this.active(3)
                    }}></button>
                    <button className="scroll_button"  id="b4" onClick={()=>{
                        this.active(4)
                    }}></button>
                    <button className="scroll_button"  id="b5" onClick={()=>{
                        this.active(5)
                    }}></button>
                    <button className="scroll_button"  id="b6" onClick={()=>{
                        this.active(6)
                    }}></button>
                    <button className="scroll_button"  id="b7" onClick={()=>{
                        this.active(7)
                    }}></button>
                    
                    
                </div>
            </div>
        )
    }
}


export {ScreenShots}