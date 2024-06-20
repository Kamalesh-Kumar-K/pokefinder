import React from "react";

const Card = ({ id, name, src, exp, height, weight, location }) => {
  // Check if data is available
  if (!id || !name || !src || !exp) {
    return null;
  }

  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ width: "18rem" }}
    >
      <img
        src={src}
        style={{ height: "200px", width: "300px" }}
        className="card-img-top"
        alt={name || "Pokemon"}
      />
      <div className="card-body">
        <p className="card-text">Name: {name}</p>
        <p className="card-text">Experience: {exp} xp</p>
        <p className="card-text">Height: {height} dm</p>
        <p className="card-text">Weight: {weight} hg</p>
      </div>
    </div>
  );
};

export default Card;
