import React from "react";

const Contain = (props) => {
  return (
    <div className="container">
      <div className="img-one">
        <img src={props.img} alt="life" width={300} height={300} />
      </div>
      <div className="main">
        <p className="">{props.one}</p>
        <h2>{props.two}</h2>
        <p>{props.three}</p>
        <p>{props.four}</p>
      </div>
    </div>
  );
};

export default Contain;
