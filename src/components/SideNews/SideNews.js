import React from "react";
import axios from "axios";
import SingleSideNews from "./SingleSideNews";
import Error from "./Error";

class SideNews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidenews: [],
      error: false,
    };
  }

  componentDidMount() {
    const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=c423045c1c954de98b2753233d74b768`;

    axios
      .get(url)
      .then((response) => {
        this.setState({
          sidenews: response.data.articles,
        });
      })
      .catch((err) => {
        this.setState({
          error: true,
        });
      });
  }

  renderItems() {
    if (!this.state.error) {
      return this.state.sidenews.map((item) => (
        <SingleSideNews key={item.url} item={item} />
      ));
    } else {
      return <Error />;
    }
  }

  render() {
    return <div>{this.renderItems()}</div>;
  }
}

export default SideNews;
