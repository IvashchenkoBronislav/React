import React from "react"
import "../css/faq.css"

class Faq extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            title:"Frequently Asked Questions?",
            toggle:[false,false,false],
            question:[{
                id:0,
                togg:false,
                name:"In magne posuere eget, vestibulum tempor aucto?",
                text1:"Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.",
                text2:"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
                list:["Vestibulum ante ipsum primis in faucibus orci.", "Luctus et ultrices posuere cubilia quis.","In ac dui quis mi consectetuer lacinia."]
            },{
                id:1,
                togg:false,
                name:"Donec pede justo fringilla vel aliquet nec vulputate?", 
                text1:"Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla.",
                text2:"Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis, ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a, consectetuer eget, posuere ut, mauris. Praesent adipiscing. Phasellus ullamcorper ipsum rutrum nunc. Nunc nonummy metus. Vestibulum volutpat pretium libero. Cras id dui. Aenean ut eros et nisl sagittis vestibulum.",
                list:[]
            },{
                id:2,
                togg:false,
                name:"Aenean commodo ligula eget dolor aenean massa?",
                text1:"Quis gravida magna mi a libero. Fusce vulputate eleifend sapien. Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.",
                list:["Vestibulum ante ipsum primis in faucibus orci.","Luctus et ultrices posuere cubilia quis.","In ac dui quis mi consectetuer lacinia."]
            }],
        }

        
    }

    
    change=(i)=>{
        this.setState((state)=>{
            return state.question[i].togg = !this.state.question[i].togg
        })
        console.log(this.state.question[i].togg)
    }

    toggle=(event)=>{
        let tsq0 =  this.state.question[0].togg
        let tsq1 =  this.state.question[1].togg
        let tsq2 =  this.state.question[2].togg

        if (event.currentTarget.id === "0"){
            this.change(0)
            if(tsq1 === true){
                this.change(1)
            }else if(tsq2 === true){
                this.change(2)
            }

        }else if(event.currentTarget.id === "1"){
            this.change(1)
            if(tsq0 === true){
                this.change(0)
            }else if(tsq2 === true){
                this.change(2)
            }
        }else if(event.currentTarget.id === "2"){
            this.change(2)
            if(tsq0 === true){
                this.change(0)
            }else if(tsq1 === true){
                this.change(1)
            }
        }
        console.log(event.currentTarget.id,0)
    }

    render(){
       
        return(
            <div className="faq">
                <div className="faq__titul">
                    {this.state.title}
                </div>
                {this.state.question.map((part)=>{
                    return(
                        <div className="faq__case" key={part.id}>
                            <label className="faq__case__title">
                                <span className="faq__case__title" id={"check"+ part.id}>{part.togg ? `-`:`+`}</span>
                                <input type="checkbox" onClick={this.toggle} id={part.id}></input>
                                <span>{part.name}</span>
                            </label>
                            <div className={`faq__case__text ${part.togg ? 'open' : 'close' }`} id={part.id}>
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
        )
    }
}

export {Faq}