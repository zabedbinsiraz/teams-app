import { NavLink } from "react-router-dom";
import { FaHome, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { motion } from "framer-motion";

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/users",
    name: "Messages",
    icon: <MdMessage />,
  },
  {
    path: "/",
    name: "Teams",
    icon: <RiTeamLine />,
  },
  {
    path: "/analytics",
    name: "Analytics",
    icon: <FaUser />,
  },

  {
    path: "/order",
    name: "Order",
    icon: <BsCartCheck />,
  },

  {
    path: "/saved",
    name: "Saved",
    icon: <AiFillHeart />,
  },
];

const SideBar = ({ children }) => {

  return (
    <>
      <div className="main-container">
        <motion.div
          animate={{
            width: "45px",

            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className={`sidebar `}
        >
          <section className="routes">
            {routes.map((route, index) => {
              return (
                <NavLink
                  to={route.path}
                  key={index}
                  className="link"
                  activeClassName="active"
                >
                  <div className="icon">{route.icon}</div>
                </NavLink>
              );
            })}
          </section>
        </motion.div>

        <main className="content">
          <div className="nav2">{children}</div>
        </main>
      </div>
    </>
  );
};

export default SideBar;
