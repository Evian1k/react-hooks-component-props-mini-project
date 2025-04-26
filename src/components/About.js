import React from "react";

function About({ image = "https://avatars.githubusercontent.com/u/197304308?s=400&u=8472ead44bf96d79639f5c00c082a4426cb69b27&v=4", about }) {
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
