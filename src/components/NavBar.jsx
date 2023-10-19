import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import '../styles/navbar.css'
const NavBar = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [user, loading]);

  function logout() {
    try {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          toast.success("Logged Out Successfully!");
          navigate("/");
        })
        .catch((error) => {
          // An error happened.
          toast.success(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  }
  return (
    <div className="navbar">
      <nav>
        <div className="logo">MyShope</div>
        <div className="linkbox">
          <Link to={"/"}>HOME</Link>
          <Link to={"/cart"}>CART</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
