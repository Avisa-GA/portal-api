import React from "react";

export default function SingleSideNews({ item }) {
  return (
    <div>
      <div className="divider"></div>
      <a href={item.url} target="_blank" rel="noreferrer">
        <div className="section">
          <h5>{item.source.name}</h5>
          <p>{item.title}</p>
        </div>
      </a>
    </div>
  );
}
