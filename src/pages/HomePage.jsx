import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function HomePage() {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <div>
      <p> Home Page</p>
      <Link to="/me"> Go to Profile Page</Link>
    </div>
  );
}
