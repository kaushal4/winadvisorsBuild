import React from "react"
import AddingNumbers from "./AddingNumbers"
class WorldClients extends React.Component{
    constructor(){
        super();
        this.done=false;
        this.state={Clientvalue:1,projectvalue:1,years:1}
        this.handleNumChange = this.handleNumChange.bind(this);
        this.clientLimit = 658;
        this.projectLimit = 4582;
        this.years = 18;
    }
    handleNumChange(){
        if(this.state.projectvalue<=this.projectLimit){
            this.setState(()=>{
                return({Clientvalue:parseInt(((this.state.projectvalue+10)/6.96)),years:parseInt(((this.state.projectvalue+10)/254.55)),projectvalue:this.state.projectvalue+10});
            })
        }else{
            this.setState(()=>{
                return({Clientvalue:parseInt(658),years:parseInt(18),projectvalue:4583});
            })
            clearInterval(this.timer);
        }
    }
    
    componentDidUpdate(prevprops,prevstate){
        if(prevprops.active===false && this.props.active===true){
            this.timer = setInterval(this.handleNumChange,0.1);
        }
    }
    render(){
        return(
            <div className="addingNumbers">
                <p>Start <span>ADDING VALUE</span> to<br />your business</p>
                <AddingNumbers value={this.state.projectvalue} name={"Projects"}/>
                <AddingNumbers value={this.state.Clientvalue} name={"Clients"}/>
                <AddingNumbers value={this.state.years} name={"Years"}/>
            </div>
        )
    }
}

export default WorldClients