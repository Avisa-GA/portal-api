import React from "react";
import "./App.css";
import News from "./News/News";
import SideNews from "./SideNews/SideNews";

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
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper indigo lighten-4">
              <a href="#!" className="bran-logo center">
                My Feed
              </a>
            </div>
          </nav>
        </div>
        <div className="row">
          <div className="col s8">
            <News news={this.state.news1} />
            <News news={this.state.news2} />
          </div>
          <div className="col s4">
            <SideNews />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
