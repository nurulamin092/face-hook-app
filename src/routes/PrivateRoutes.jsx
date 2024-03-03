import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      <Header />
      {auth.user ? (
        <main className="mx-auto max-w[1024px] py-8">
          <div className="container">
            <Outlet />
          </div>
        </main>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
