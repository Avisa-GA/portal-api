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
      news3: {
        type: "everything",
        query: "domains=comicbookmovie.com&language=en",
      },
    };
  }
  render() {
    return (
      <div className="container-fluid">
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper blue darken-4">
              <a
                href="/"
                className="bran-logo"
                style={{ marginLeft: "2%", fontSize: "20px" }}
              >
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
            <SideNews news={this.state.news3} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
