import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import About from "../components/About";

test("renders a <aside> element", () => {
  const { container } = render(<About about="Test about text" />);
  expect(container.querySelector("aside")).toBeInTheDocument();
});

test("renders an <img> with the blog logo and alt text of 'blog logo'", () => {
  render(<About about="Test about text" />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215"); // Default image
});

test("uses a default value for the image if no image is passed as a prop", () => {
  render(<About about="Test about text" />);
  const img = screen.getByAltText("blog logo");
  expect(img).toBeInTheDocument();
  expect(img.src).toContain("https://via.placeholder.com/215"); // Should contain default URL
});

test("renders a <p> with the about text", () => {
  render(<About about="About this blog" />);
  const p = screen.getByText("About this blog");
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});
