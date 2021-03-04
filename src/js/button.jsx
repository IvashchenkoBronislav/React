
    import React from 'react';
    import '../css/button.css';


    class AppButton extends React.Component{    
        
        render(){
            return(
            <button className="button_app" onClick={()=>{

            }}>{this.props.children}</button>
            )
        }
    };

    class ButtonNav extends React.Component{

        go(i){
            let moveTo = document.querySelector(i)
            moveTo.scrollIntoView({block:"start",behavior: "smooth"})
        }

        nav(){
            if(this.props.children === "HOME"){
                this.go(".header")
            }else if(this.props.children === "ABOUT"){
                this.go(".aboutApp")
            }else if(this.props.children === "HOW TO USE"){
                this.go(".htu")
            }else if(this.props.children === "FAQ`S"){
                this.go(".faq")
            }else if(this.props.children === "SCREENSHORTS"){
                this.go(".screenshorts")
            }else if(this.props.children === "DOWNLOAD"){
                this.go(".downApp")                        
            }else if(this.props.children === "PRICING"){
                this.go(".pricing")                        
            }else if(this.props.children === "CONTACT"){
                this.go(".contact")                        
            }
        }

        render(){
            return (
                <button className="buttonNav" key={Math.render} onClick={()=>{
                    this.nav()
                }
            }>{this.props.children}</button>
            )
        }   
    };






    class Minu extends React.Component{
        
        render(){
            return(
            <div className="box_button">
                <span className="top"></span>
                <span className="mid"></span>
                <span className="bot"></span>
            </div>
            )
        }
    };





    class ButtonToggle extends React.Component {
        constructor(props){
            super(props);
            this.state={togg:false};
        }


        
        
        render(){
            return(
                <div className="box" onClick={()=>{

                    let navBlack = document.querySelector('.header__nav__black')
                    let minTop = document.querySelector(".top")
                    let minTop1 = document.querySelector(".top_1")
                    let minMid = document.querySelector(".mid")
                    let minMid1 = document.querySelector(".mid_1")
                    let minBot = document.querySelector(".bot")
                    let minBot1 = document.querySelector(".bot_1")

                    if(this.state.togg === true){
                        
                        minTop1.classList = "top"
                        minBot1.classList = "bot"
                        minMid1.classList = "mid"
                        navBlack.style.height = "0px"
                        navBlack.style.top = "-380px"
                    return this.state.togg = false
                    }else{
                        minTop.classList = "top_1"
                        minBot.classList = "bot_1"
                        minMid.classList = "mid_1"
                        navBlack.style.height = "300px"
                        navBlack.style.top = "0px"           
                        return this.state.togg = true
                    }
                }} >
                    {<Minu></Minu>}
                </div>
            );
        }
    };





    export {AppButton , ButtonNav, ButtonToggle};