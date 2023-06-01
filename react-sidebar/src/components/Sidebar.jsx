import React from "react";
import {
  FaCommentAlt,
  FaBars,
  FaRegChartBar,
  FaShoppingBag,
  FaTh,
  FaThList,
  FaUserAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Comment",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
    },
    {
      path: "/productList",
      name: "Product List",
      icon: <FaThList />,
    },
  ];
  return (
    <div className="container">
      <div className="sidebar">
        <div className="top_section">
          <h1 className="logo">logo</h1>
          <div className="bars">
            <FaBars/>
          </div>
        </div>
      </div>
    </div>);
};

export default Sidebar;
