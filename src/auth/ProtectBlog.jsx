import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProtectBlog = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("users"));
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return <div>{children}</div>;
};
