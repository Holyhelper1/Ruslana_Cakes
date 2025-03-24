import React from "react";
import { useSelector } from "react-redux";
import { ErrorMessage } from "../Error/error";
import { selectIsAuthenticated } from "../../Slices/authSlice";

interface IPrivateContentProps {
  children: React.ReactNode;
}

export const PrivateContent: React.FC<IPrivateContentProps> = ({
  children,
}) => {
  const adminIsLogin = useSelector(selectIsAuthenticated);
  const accessError = adminIsLogin
    ? null
    : "Доступ запрещён, пожалуйста авторизуйтесь!";
  const error = accessError;

  return error ? (
    <>
      <div className="private-content-container">
        <div className="private-content-header"></div>
        <div className="private-content-e-wrapper">
          <ErrorMessage> {error} </ErrorMessage>
        </div>
      </div>
    </>
  ) : (
    children
  );
};
