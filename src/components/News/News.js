import React from "react";
import NewSingle from "./NewSingle";
import Error from "../SideNews/Error";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=c423045c1c954de98b2753233d74b768`;

    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          news: data.articles,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }
  renderItems() {
    if (!this.state.error) {
      return this.state.news.map((item) => (
        <NewSingle key={item.url} item={item} />
      ));
    } else {
      <Error />;
    }
  }
  render() {
    return <div className="row">{this.renderItems()}</div>;
  }
}

export default News;
