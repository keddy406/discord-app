import React from "react";
// redux
import { useSelector, useDispatch } from "react-redux";
import { selectUser } from "./features/userSlice";
import { login, logout } from "./features/userSlice";
// components
import Sidebar from "./Components/Sidebar";
import Chat from "./Components/Chat";
import { auth } from "./Components/firebase";
// pages
import Login from "./pages/Login";

import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  React.useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser);
      if (authUser) {
        // logged in
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            email: authUser.email,
            displayName: authUser.displayName,
          })
        );
      } else {
        // logged out
        dispatch(logout());
      }
    });
  }, [dispatch]);
  return (
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
