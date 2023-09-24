import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <p>I'm About Page</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
};
export default About;
