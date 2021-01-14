import React from 'react'
import Header from "./header.jsx";
import {PartnersCont} from "./partners.jsx"
import AboutApp from "./aboutApp.jsx"
import {HowToUse} from "./howToUSe.jsx"
import {Faq} from "./faq";
import {ScreenShots} from "./screenShorts"
import {DownloadApp} from "./downloadApp";
import {Pricing} from "./pricing"
import {Contact} from "./contact";


class OnLoad extends React.Component{
    render(){
        return(
            <div className="app">
                <Header/>
                <PartnersCont/>
                <AboutApp/>
                <HowToUse/>
                <Faq/>
                {/* <ScreenShots/> */}
                <DownloadApp/>
                <Pricing/>
                <Contact/>
                <div></div>
            </div>
        )
    }
}

export default OnLoad