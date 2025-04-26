import React from "react";

function About({
  image = "https://avatars.githubusercontent.com/u/197304308?s=400&u=8472ead44bf96d79639f5c00c082a4426cb69b27&v=4",
  about,
}) {
  return (
    <aside>
      <a
        href="https://github.com/EmmanuelEvian" // Links to your GitHub profile
        target="_blank" // Opens in a new tab
        rel="noopener noreferrer" // Security best practice
      >
        <img
          src={image}
          alt="Emmanuel Evian's GitHub profile"
          style={{ borderRadius: "50%", width: "150px", height: "150px" }} // Optional: gives the image a rounded appearance
        />
      </a>
      <p>{about}</p>
    </aside>
  );
}

export default About;
