import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { logOut } from "../../store/actionCreators/user";

export default function Dashboard() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logOut());
  }

  return user ? (
    <div>
      <p>Dashboard</p>
      <button onClick={handleLogout}>out</button>
    </div>
  ) : (
    <Redirect to="/signin" />
  );
}
