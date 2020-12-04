import React from "react";
import { signOut } from "./auth/index";
import { exampleDispacth } from "./store/actionCreators/user";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      {user && (
        <div>
          <h1 style={{ margin: 0, padding: 0 }}>{user.displayName}</h1>
          <img
            alt={user.displayName}
            src={user.photoURL}
            style={{ margin: 15 }}
          />
        </div>
      )}

      {user ? (
        <button onClick={() => signOut(dispatch)}>Sign Out</button>
      ) : (
        <button onClick={() => dispatch(exampleDispacth())}>Sign In</button>
      )}
    </div>
  );
}

export default App;
