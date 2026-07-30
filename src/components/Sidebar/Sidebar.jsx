import { NavLink } from "react-router";

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">Course Portal</h2>

      <nav>
        <NavLink to="/" className="sidebar-link">
          Dashboard
        </NavLink>

        <NavLink to="/" className="sidebar-link">
          All Courses
        </NavLink>

        <NavLink to="/favorites" className="sidebar-link">
          Favorites
        </NavLink>

        <NavLink to="/profile" className="sidebar-link">
          My Profile
        </NavLink>
      </nav>
    </aside>
  );
}

export default Sidebar;
