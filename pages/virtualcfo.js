import React, { useEffect } from "react"
import style from "../styles/virtualCFO.module.css"
import Head from "next/head"
import FixedNavigator from "../components/FixedNavigator"
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer"
import ImageBar from "../components/ImageBar"
function Cards(props){
    return(
        <div className={style.cardContainer}>
            <div className={style.rowContainer}>
                <div className={style.card}>
                    <span>Budget</span>
                </div>
                <div className={style.card}>
                    Financial planning
                </div>
            </div>
            <div className={style.rowContainer}>
                <div className={style.card}>
                    MIS
                </div>
                <div className={style.card}>
                    cashflow
                </div>
            </div>
        </div>
    )
}
function ListItems(props){
    const items= props.items.map((element,index)=>{
        return(<li key={index}>{element}</li>)
    })
    return(
        <ul>
            {items}
        </ul>
    )
}

function Heading(){

    return(
        <header className={style.mainHeading}>
            <h2>Role of Finance and how Win can fulfill the role:</h2>
            <p>Finance is an integral part of any organization without which an organization cannot even survive. While the entrepreneur is technically sound and expert in his domain area but the same need to be complimented by a wise allocation of resources, raising of resources, compliance, budget and cost control. Depending upon the life cycle of an enterprise, the requirement of finance vary between a finance executive to finance manager and then to CFO. At WIN we provide all three assistance on use basis. Which means you only pay for what you require and not necessarily block the capital in fixed expenses. WIN will provide an expert solution on how to survive, grow and thrive through their vast experience of its team who has been dealing with more than 250 enterprises. Win will be with you for allocation of resources, raising of resources, compliance, budget and cost control</p>
        </header>

    )

}

function GenImgPara(props){
    let item = <ListItems items={props.text.body} />
    let item2 = 0;
    if(props.index!=2){
        item2 = <figure><img src={props.img.src} alt={props.img.altText}></img></figure>
    }else{
        item2 = <Cards />
    }
    return(
        <div className={style.superContainer}>
        <h3 className={style.heading}><span className={style.headingWrapper}><div className={style.dash}/><span>{props.text.heading}</span></span></h3>
        <div className={style.mainContainer}>
            {item2}
            <div className={style.textContainer}>
                {item}
            </div>

            </div>
            </div>
    )
}



export default class virtualCFO extends React.Component{
    constructor(){
        super();
        this.handleScroll = this.handleScroll.bind(this);
        this.state ={value:0}
        this.img = [];
        for(let i=0;i<7;i++){
            this.img.push({src:`/Images/virtual${i+1}.png`,altText:`image ${i+1} of virtualCFO`});
        }
        this.text=[
            {heading:"Get a Cost Effective Solution",
            body:["A MNC company having a limited operations in India, a virtual CFO for your Indian business can be more cost efficient than sending an executive from your own organization or appointing a full time CFO.","High level of skilled resources at a fraction of cost due to pooled resources.","An outsource finance manager and CFO is more cost effective till a company finds its own feet. "]
        },{
            heading:"Stay away from tedious accounting and record keeping",
            body:["Relief from daily chaos of book keeping and accounting","Inventory accounting and valuation"," Invoice Processing Services","Journal Entry Services","Accounting Setup Services"],
        },{
            heading:"Receive timely financial intelligence",
            body:["Budget preparation","Financial planning","Cashflow management","MIS"," Receivable management"," Optimum cost structure"]
        },{
            heading:"Done with Hassle free timely compliance",
            body:[" Direct tax compliance and filing","Indirect tax compliance and filing","Company law – maintenance of statutory registers, minutes book, filing of forms and resolutions with Roc.","Other commercial law compliance","Determination and Compliance of Accounting Policy","Compliance with local Accounting Standards and IFRS"]
        },{
            heading:"Expert and Nearby business setup service",
            body:["Whether be it a foreign entity or Indian business, we guide you and help you registering your business in a correct form to reap maximum benefits.","Searching/Obtaining office space","Support in preparing office infrastructure"],
        },{
            heading:"Human Resource solution",
            body:["Drafting employment contract and appointment letters to the employees/contractors.","Designing tax efficient payroll","Monthly payroll processing ","Statutory deduction from payroll","Payment of taxes and statutory liabilities.","Pay slips to employees.","Execution of TDS certificates","Recruitment assistance."]
        },{
            heading:"Raise capital with ease and Become investor ready",
            body:["Best financial mix, Inviting an investor, making a pitch to the investor,converting idea into plan and preparation of vision document, valuationassistance, Law support, Due diligence assistance, procedural support","Making an investment : Help in identifying an opportunity, Due diligence, legal support, FEMA support, procedural support","Capital raising via equity or debt: Assistance in choosing a right mix, correct leveraging strategy, Survival capital and growth capital timing of this decision, procedural support"]
        }
        ];
        
    }
    componentDidMount(){
        window.addEventListener("scroll",this.handleScroll);
        window.addEventListener("resize",()=>{this.vh = window.innerHeight*0.01;
            let body = document.getElementsByTagName("BODY")[0];
            if(window.innerWidth>760){
                body.style.width=`${(document.documentElement.clientWidth- 60)}px`;
            }else{
                body.style.width=`${(window.innerWidth)}px`;
            }
            })
        this.vh = window.innerHeight*0.01;
        if(window.innerWidth>760){
            let body = document.getElementsByTagName("BODY")[0];
            body.style.width=`${(document.documentElement.clientWidth - 60)}px`;
        }
        
    }
    handleScroll(){
        let posy = window.scrollY;
        if(posy>15*this.vh){
            
            if(this.state.value===0) {this.setState(()=>{return({value:1})})}
            
        }else if(this.state.value!==0){
            this.setState(()=>{return({value:0})})
        }
    }
    

    render(){
        let GenericParas = this.text.map((element,index)=>{return(<GenImgPara key={index} text={element} img={this.img[index]} index={index}/>)})

        return(
            <div>
                <Head>
                <title>winadvisors</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script src="https://smtpjs.com/v3/smtp.js"></script>
                </Head>
                <FixedNavigator />
                <Navbar value={this.state.value}></Navbar>
                <ImageBar imageLocation="/images/tax (2).jpg" text="Virtual CFO"/>
                <Heading />
                {GenericParas}
                <Footer />
            </div>
        )
    }
}
