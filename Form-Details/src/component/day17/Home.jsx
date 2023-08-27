import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <p>I'm Home Page</p>
      <div>
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
        <Link to="/products">products</Link>
      </div>
    </>
  );
};
export default Home;
