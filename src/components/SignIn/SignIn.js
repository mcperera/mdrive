import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { signIn } from "../../store/actionCreators/user";

export default function SignInComp() {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  function handleLogin() {
    dispatch(signIn());
  }

  return user ? (
    <Redirect to="/dashboard" />
  ) : (
    <div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
