import { NavLink } from "react-router-dom";
const Navigation = () => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "About-us", to: "/about-us" },
    { name: "Profile", to: "/profile" },
    { name: "Blogs", to: "/blogs" },
    { name: "Post", to: "/Post" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
