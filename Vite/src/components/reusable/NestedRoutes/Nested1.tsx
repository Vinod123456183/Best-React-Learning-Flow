import { Outlet, Link } from "react-router-dom";

const Nested1 = () => {
  return (
    <div>
      <nav>
        <Link to="">Home</Link> | <Link to="children">Child</Link>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
};

export default Nested1;
