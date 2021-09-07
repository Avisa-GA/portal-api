import React from "react";
import NewSingle from "./NewSingle";

class News extends React.Component {
  renderItems() {
    return this.props.items.map((item) => (
      <NewSingle key={item.id} item={item} />
    ));
  }
  render() {
    return <ul>{this.renderItems()}</ul>;
  }
}

export default News;
