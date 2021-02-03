import React from "react"
import SlidingImages from "./homepage/SlidingImages"
import WorldClients from "./homepage/WordClients"
import Genhandb from "./homepage/Genhandb"
import ImageGrid from "./homepage/ImageGrid"
class Main extends React.Component{
    constructor(){
        super();
        this.state={
            Genhandb1:{gentit1:"About Us",
            genbody1:"WIN ADVISORS a multi facet organization is dedicated to the provision of a wide range of professional services. Win Advisors and its team members with years of experience in a wide range of industries specializes in Business Set up, Accounting and Assurance, Corporate Secretarial and Legal Support Services etc. With a versatile group of professionals and an integrated multi-disciplinary approach we broadens our capabilities and enhances our ability to identify, confront and resolve a variety of issues and concerns for clients across the world.Today's business environment is fast moving, and highly competitive. Business owners need the one window support of professionals who provide on-time efficient solutions to help their business move forward. We aim to provide such a service so that the entrepreneur can focus on its key business segments and remain worry-free on regulatory compliance side",
            genButton1:"Know More"},
            activateWorldClients:false,
        }
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount(){
            window.addEventListener("scroll",this.handleScroll);
            this.windowy = window.innerHeight;
            this.addNum = document.querySelector(".addingNumbers").getBoundingClientRect().y;
            this.parallaxElement = document.querySelector(".ParallexSection");
            this.perallaxDimentions = this.parallaxElement.getBoundingClientRect();
            this.parallaxPseudo = window.getComputedStyle(this.parallaxElement,"::after");
        }
    handleScroll(){
        let offset = window.scrollY;
        if((this.windowy*0.9)+offset>this.addNum && !this.state.activateWorldClients){
            window.removeEventListener("scroll",this.handleScroll);
            this.setState(()=>{
                return({activateWorldClients:true})
            })
        }
    }
    render(){
        return(
            <div className="main">
                <SlidingImages />
                <Genhandb title={this.state.Genhandb1.gentit1} body={this.state.Genhandb1.genbody1} but={this.state.Genhandb1.genButton1} />
                <WorldClients active={this.state.activateWorldClients}/>
                <div className="ParallexSection">
                    <ImageGrid />
                </div>
            </div>
        )
        
    }
}

export default Main;