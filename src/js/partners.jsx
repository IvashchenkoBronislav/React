import React from "react"
import Woo from "../img/part/par-1.png"
import WordPress from "../img/part/par-2.png"
import VisualComposer from "../img/part/par-3.png"
import MailChimp from '../img/part/par-4.png'
import MassiveAddons from "../img/part/par-5.png"
import ReduX from '../img/part/par-6.png' 
import  "../css/partners.css"
 
class PartnersImg extends React.Component{
    constructor(props){
        super(props);
        this.state={
            partner:[
                {name:"woo", link:Woo},
                {name:"wordPress", link:WordPress},
                {name:"visualComposer", link:VisualComposer},
                {name:"mailChimp", link:MailChimp},
                {name:"massiveAddons", link:MassiveAddons},
                {name:"reduX", link:ReduX}
            ]
        }
    }

   



    render(){
        return <div className="cont_part__img">
            {this.state.partner.map((part)=>{
                return (
                    <img className="part_img" src={part.link} alt={part.name} key={part.name} onClick={()=>{console.log(part)}}/>
                )
            })}
        </div>
    }
    h

}



class PartnersCont extends React.Component{
    
    render(){
        return (
            <div className="cont_part">
                <div className="cont_part__tex">Client's Who Trust Us</div>
                <PartnersImg/>
            </div>
        )
    }
} 




export {PartnersCont}