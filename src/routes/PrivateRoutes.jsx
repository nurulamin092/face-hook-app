import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import ProfileProvider from "../provider/ProfileProvider";
import PostProvider from "../provider/PostProvider";
const PrivateRoutes = () => {
  const { auth } = useAuth();
  return (
    <>
      {auth.authToken ? (
        <PostProvider>
          <ProfileProvider>
            <Header />
            <main className="mx-auto max-w[1024px] py-8">
              <div className="container">
                <Outlet />
              </div>
            </main>
          </ProfileProvider>
        </PostProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoutes;
