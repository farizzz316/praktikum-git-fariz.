import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/fariz">Ke Fariz</Link>
      <br />
      <Link to="/fahmi">Ke Fahmi</Link>
      <br />
      <Link to="/bagas">Ke Fahmi</Link>
    </div>
  );
}

export default Home;