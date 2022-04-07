import React, { Fragment } from "react";
import { Link, Outlet, Route, Routes } from "react-router-dom";
import MoviePage from "../page/page.component";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

const Navigation = () => {
  return (
    <Fragment>
      This is nav
      {/*Header*/}
      <Outlet />
      {/* page component => also an outlet*/}
      {/* pagination   */}
    </Fragment>
  );
};

export default Navigation;
