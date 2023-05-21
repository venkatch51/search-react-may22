import "./App.css";
import { Component } from "react";
import Header from "./Components/Header";
import JSON from "../src/Components/db.json";
import NewsList from "./Components/NewsList";

class App extends Component {
  constructor(){
    super()

    this.state = {
      news:JSON,
      filtered:JSON
    }
  }
  filterNews(keywords){
    let output = this.state.news.filter((item) => {
      return (item.title.toLowerCase().indexOf(keywords.toLowerCase()) > -1 || item.description.toLowerCase().indexOf(keywords.toLowerCase()) > -1)
    })
    console.log(output)
    this.setState({filtered:output})
  }
  render() {
    
    return (
      <div className="App">
        <Header newsSearch={(keywords) => {this.filterNews(keywords)}}/>
        <NewsList newsdata={this.state.filtered}/>
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <Header />

//     </div>
//   );
// }

export default App;
