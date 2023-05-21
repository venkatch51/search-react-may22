import React from "react";

const NewsList = (props) => {
  
  const newsData = props.newsdata.map((data) => {
    return (
      <div className="container text-start" key={data.id}>
        <h3>{data.title}</h3>
        <p>{data.description}</p>
      </div>
    );
  });
  //search result
  return (
    <div>
        <div className="container">
        {newsData}
    </div>
    </div>
  );
};

export default NewsList;
