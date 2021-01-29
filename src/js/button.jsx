
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

        render(){
            return (<button className="buttonNav" key={Math.render} onClick={()=>{
                
                let go = (i)=>{
                    let moveTo = document.querySelector(i)
                    moveTo.ScrollIntoView()
                }

                if(this.props.children === "HOME"){
                    // go(".header")
                    document.getElementById('header').ScrollIntoView(true)
                    console.log(go(".header"))
                }else if(this.props.children === "ABOUT"){

                    console.log(go(".aboutApp"))
                }else if(this.props.children === "HOW TO USE"){
                    
                    console.log(go(".htu"))
                }else if(this.props.children === "FAQ`S"){
                    
                    console.log(go(".faq"))
                }else if(this.props.children === "SCREENSHORTS"){
                    
                    console.log(go(".screenshorts"))
                }else if(this.props.children === "DOWNLOAD"){
                    
                    console.log(go(".downApp"))
                }else if(this.props.children === "PRICING"){
                    
                    console.log(go(".pricing"))
                }else if(this.props.children === "CONTACT"){
                    
                    console.log(go(".contact"))
                }
                
            }}>{this.props.children}</button>
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