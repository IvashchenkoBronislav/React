import React from "react";
import "../css/pricing.css"

class Cost extends React.Component{
    constructor(props){
        super(props);

        this.price = {
            priceInfo:[
                {name:"STARTER", cost:"$29.00", info:[
                    "PER MONTH",
                    "100 MB Disk Space",
                    "2 Subdomains",
                    "5 Email Accounts",
                    "5 Email Accounts",
                    "Customer Support 24/7",
                ]},
                {name:"PREMIUM", cost:"$39.00", info:[
                    "PER MONTH",
                    "100 MB Disk Space",
                    "2 Subdomains",
                    "5 Email Accounts",
                    "5 Email Accounts",
                    "Customer Support 24/7",
                ]},
                {name:"UNLIMITED", cost:"$59.00", info:[
                    "PER MONTH",
                    "100 MB Disk Space",
                    "2 Subdomains",
                    "5 Email Accounts",
                    "5 Email Accounts",
                    "Customer Support 24/7",
                ]},
            ]
        }
    }

    render(){
        return this.price.priceInfo.map((part)=>{
            return(
                <div className="cost" key={part.name}>
                    <div className="cost__cont">
                        <div className="cost__cont__name">{part.name}</div>
                        <div className="cost__cont__money">{part.cost}</div>
                        <div className="cost__cont__month">{part.info[0]}</div>
                    </div>
                    <div className="cost__info">
                        <span>{part.info[1]}</span>
                        <span>{part.info[2]}</span>
                        <span>{part.info[3]}</span>
                        <span>{part.info[4]}</span>
                        <span>{part.info[5]}</span>
                    </div>
                    <button className="cost__button">PURCHASE NOW</button>
                </div>
            )
        })
            
        
    }

}



class Pricing extends React.Component{

    render(){
        return(
            <div className="pricing">
                <div className="pricing__title">Pricing Plan</div>
                <div className="pricing__text">Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc mi a libero.</div>
                <div className="pricing__cost_cont" >
                    <Cost/>
                </div>
            </div>
        )
    }
}

export {Pricing}