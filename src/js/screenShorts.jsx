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
            width:window.innerWidth,
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

        this.bottum = {
                b_3:false,
                b_4:false,
                b_8:false
        }
        this.classb = {
            act:"scroll_button",
        }
    }

    size(){
        if(this.state.width <=1330 && this.state.width >=1001 ){

            this.setState(()=>{
                return (
                    this.bottum.b_3=true,
                    this.bottum.b_4=false,
                    this.bottum.b_8=false
                )
            })

            
            
        }else if(this.state.width <=1000 && this.state.width >=634){
            this.setState(()=>{
                return (
                    this.bottum.b_3=true,
                    this.bottum.b_4=true,
                    this.bottum.b_8=false
                )
            })
            
        
        }else if(this.state.width <=633){
            this.setState(()=>{
                return (
                    this.bottum.b_3=true,
                    this.bottum.b_4=true,
                    this.bottum.b_8=true
                )
            })
            

        }else{
            
            this.setState(()=>{
                return this.bottum.b_3=false
            })
            
        }
    }

    width(){
        

        window.onload= ()=>{
            this.size()

            window.addEventListener("resize",()=>{
                this.setState((state)=>{
                    return state.width = window.innerWidth
                })
                        
                this.size()
            }
        )}
    }

    scrollTo(id,position){
        
        document.getElementById(id).scrollIntoView({block:"nearest",behavior: "smooth"})
    }

    act(id){
        document.getElementById(id).classList.add("active")
    }

    off(id){
        document.getElementById(id).classList.remove("active")
    }

    active(num){


        let idb = num;
        let eliment = (id)=>{
            return document.getElementById(id).classList.contains("active")
        }

        if(this.bottum.b_3 === false && this.bottum.b_4 === false && this.bottum.b_8 === false){
            if (idb === 0){
                if(eliment("b0")===false){
                    this.act("b0")
                    this.scrollTo("scrn1")
                    if(eliment("b1")===true){
                        this.off("b1")
                    }
                }         
            }else if (idb === 1) {
                if(eliment("b1")===false){
                    this.act("b1")
                    this.scrollTo("scrn8","start")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }
                }       
            }


        }else if(this.bottum.b_3 === true && this.bottum.b_4 === false && this.bottum.b_8 === false){

            if (idb === 0){
                if(eliment("b0")===false){
                    this.act("b0")
                    this.scrollTo("scrn1")
                    if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }
                }         
            }else if (idb === 1) {
                if(eliment("b1")===false){
                    this.act("b1")
                    this.scrollTo("scrn5")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }
                }       
            }else if (idb === 2) {
                if(eliment("b2")===false){
                    this.act("b2")
                    this.scrollTo("scrn8")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }
                }       
            }
            

        }else if (this.bottum.b_3 === true && this.bottum.b_4 === true && this.bottum.b_8 === false){

            if (idb === 0){
                if(eliment("b0")===false){
                    this.act("b0")
                    this.scrollTo("scrn1")
                    if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    } 
                }         
            }else if (idb === 1) {
                if(eliment("b1")===false){
                    this.act("b1")
                    this.scrollTo("scrn4")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    } 
                }       
            }else if (idb === 2) {
                if(eliment("b2")===false){
                    this.act("b2")
                    this.scrollTo("scrn6")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    } 
                }       
            }else if (idb === 3) {
                if(eliment("b3")===false){
                    this.act("b3")
                    this.scrollTo("scrn8")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }
                }  
            }

        }else if (this.bottum.b_3 === true && this.bottum.b_4 === true && this.bottum.b_8 === true){

            if (idb === 0){
                if(eliment("b0")===false){
                    this.act("b0")
                    this.scrollTo("scrn1")
                    if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }         
            }else if (idb === 1) {
                if(eliment("b1")===false){
                    this.act("b1")
                    this.scrollTo("scrn2")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }       
            }else if (idb === 2) {
                if(eliment("b2")===false){
                    this.act("b2")
                    this.scrollTo("scrn3")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }       
            }else if (idb === 3) {
                if(eliment("b3")===false){
                    this.act("b3")
                    this.scrollTo("scrn4")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }  
            }else if (idb === 4) {
                if(eliment("b4")===false){
                    this.act("b4")
                    this.scrollTo("scrn5")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }
            }else if (idb === 5) {
                if(eliment("b5")===false){
                    this.act("b5")
                    this.scrollTo("scrn6")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }
            }else if (idb === 6) {
                if(eliment("b6")===false){
                    this.act("b6")
                    this.scrollTo("scrn7")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b7")===true){
                        this.off("b7")
                    }
                }
            }else if (idb === 7) {
                if(eliment("b7")===false){
                    this.act("b7")
                    this.scrollTo("scrn8")
                    if(eliment("b0")===true){
                        this.off("b0")
                    }else if(eliment("b1")===true){
                        this.off("b1")
                    }else if(eliment("b2")===true){
                        this.off("b2")
                    }else if(eliment("b3")===true){
                        this.off("b3")
                    }else if(eliment("b4")===true){
                        this.off("b4")
                    }else if(eliment("b5")===true){
                        this.off("b5")
                    }else if(eliment("b6")===true){
                        this.off("b6")
                    }
                }
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
                                <img className="screenshorts__carousel__img"  id={n.name} src={n.link} alt={n.name} key={n.name}/>
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
                    <button className={`scroll_button ${this.bottum.b_3 ? 'on':'off'}`} id="b2"  onClick={()=>{
                        this.active(2)
                    }}></button>
                    <button className={`scroll_button ${this.bottum.b_4 ? 'on':'off'}`} id="b3" onClick={()=>{
                        this.active(3)
                    }}></button>
                    <button className={`scroll_button ${this.bottum.b_8 ? 'on':'off'}`}  id="b4" onClick={()=>{
                        this.active(4)
                    }}></button>
                    <button className={`scroll_button ${this.bottum.b_8 ? 'on':'off'}`}  id="b5" onClick={()=>{
                        this.active(5)
                    }}></button>
                    <button className={`scroll_button ${this.bottum.b_8 ? 'on':'off'}`} id="b6" onClick={()=>{
                        this.active(6)
                    }}></button>
                    <button className={`scroll_button ${this.bottum.b_8 ? 'on':'off'}`}  id="b7" onClick={()=>{
                        this.active(7)
                    }}></button>
                    
                    
                </div>
            </div>
        )
    }
}


export {ScreenShots}