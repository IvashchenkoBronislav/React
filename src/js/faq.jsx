import React from "react"
import "../css/faq.css"

class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"Frequently Asked Questions?",
            question:[{
                id:"1",
                name:"In magne posuere eget, vestibulum tempor aucto?",
                text1:"Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.",
                text2:"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
                list:["Vestibulum ante ipsum primis in faucibus orci.", "Luctus et ultrices posuere cubilia quis.","In ac dui quis mi consectetuer lacinia."]
            },{
                id:"2",
                name:"Donec pede justo fringilla vel aliquet nec vulputate?", 
                text1:"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.",
                text2:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.",
                list:[]
            },{
                id:"3",
                name:"Aenean commodo ligula eget dolor aenean massa?",
                text1:"Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
                list:["Vestibulum ante ipsum primis in faucibus orci.","Luctus et ultrices posuere cubilia quis.","In ac dui quis mi consectetuer lacinia."]
            }],
        }

        this.togg = {
            t1:true,
            t2:true,
            t3:true,
        }

    }

    toggle=()=>{
        this.setState(()=>{
           return  this.togg.t1 = !this.togg.t1})
        console.log(1)
        console.log(this.togg.t1)
    }

    render(){
       
        return(
            <div className="faq">
                <div className="faq__titul">
                    {this.state.title}
                </div>
                <div>
                    {this.state.question.map((part)=>{
                        return(
                            <div className="faq__case" key={part.id}>
                                <label className="faq__case__title">
                                    <span className={`faq__case__title `} id={"check"+ part.id}>+</span>
                                    <input type="checkbox" onClick={this.toggle}></input>
                                    <span>{part.name}</span>
                                </label>
                                <div className={`faq__case__text ${this.togg[`t`+part.id] ? 'open' : 'close'}`} id={part.id}>
                                    <span>{part.text1}</span>
                                    <span>{part.text2}</span>
                                    <div>
                                        <ul>
                                            {part.list.map((i)=>{
                                                return(
                                                    <li key={Math.floor(Math.random)*20}>{i}</li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export {Faq}