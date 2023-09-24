import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <>
      <p>I'm Contact Page</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    </>
  );
};
export default Contact;
