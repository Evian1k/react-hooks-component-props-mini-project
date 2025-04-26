import React from "react";

function About({ image = "https://via.placeholder.com/215", about }) {
  return (
    <aside>
      <a
        href="https://github.com/EmmanuelEvian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={image} alt="blog logo" />
      </a>
      <p>{about}</p>
    </aside>
  );
}

export default About;
