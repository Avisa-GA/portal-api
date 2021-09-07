import React from "react";
import "./App.css";
import News from "./News/News";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news1: {
        type: "top-headlines",
        query: "sources=bbc-news",
      },
      news2: {
        type: "everything",
        query: "q=apple&from=2021-09-06&to=2021-09-06&sortBy=popularity",
      },
    };
  }
  render() {
    return (
      <div>
        <News news={this.state.news1} />
        <News news={this.state.news2} />
      </div>
    );
  }
}

export default App;
