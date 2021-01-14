import React from "react";
import ios from "../img/download/app-store.png";
import android from "../img/download/google-play.png";
import "../css/downloadApp.css";

class Subscribe extends React.Component{
    render(){
        return(
            <div className="subscribe">
                <div className="subscribe__titul">Subscribe to Newsletter</div>
                <div className="subscribe__text">Stay up to date with our latest news and products.</div>
                <div className="subscribe__label">
                    <label>
                        <input type="text" placeholder="Your eamill address..."/>
                        <button>SUBSCRIBE NOW!</button>
                    </label>
                </div>
            </div>
        )
    }
}



class DownloadApp extends React.Component {
    constructor(props){
        super(props);

        this.data = {
            button:[
                {name:"iosDownload", link:ios},
                {name:"androidDownload", link:android}
            ],
        }
    }

    render(){
        return(
            <div>
                <div className="downApp">
                    <div className="downApp__info">Now Available On</div>
                    <div className="downApp__titul">DOWNLOAD APP</div>
                    <div className="downApp__text">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero.</div>
                    <div className="downApp__case">{
                        this.data.button.map((part)=>{
                            return <button className="downApp__case__button" key={part.name}><img src={part.link} alt={part.name} /></button>
                        })
                    }</div>
                </div>
                <Subscribe/>
            </div>
        )
    }
}

export {DownloadApp}