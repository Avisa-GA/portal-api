import React from "react";
import SingleSideNews from "./SingleSideNews";

class SideNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }

  componentDidMount() {
    // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=c423045c1c954de98b2753233d74b768`;
  }

  renderItems() {
    return this.state.news.map((item) => (
      <SingleSideNews key={item.url} item={item} />
    ));
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default SideNews;
