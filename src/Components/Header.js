import React,{ Component } from "react";
import './Header.css'

class Header extends Component {
    constructor(){
        super()
        this.state = {
            title:'My React App',
            keywords:'User input here...'
        }
    }
    inputChange(event){ //Here we are having an event where it can grab and event what user enters inside the placeholder 
        this.setState({keywords:event.target.value})  //Here we are setting the value with event submitted by user
        this.props.newsSearch(event.target.value) 
    }

    render() {
        return (
           <header>
            <div className="logo">{this.state.title}</div>   
            <center>
                <input type="text" onChange={this.inputChange.bind(this)}/>  
                {/* Here what the user is typing inside of it binding it using event  */}
                <p>{this.state.keywords}</p> 
            
                <button className="btn btn-danger">find</button>
            </center>
            <hr />
           </header>
        )
        }
}
export default Header

// const Header = () => {
//     return <h1>Header of the page</h1>
// }