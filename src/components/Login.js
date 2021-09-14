import React, { useContext } from "react";
import LoginContext from "./LoginContext";
import { useForm } from "react-hook-form";

export default function Login() {
  const MyContext = useContext(LoginContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    console.log("Data Collected", data);
    MyContext.setAuth();
  }
  function handleLogout() {
    MyContext.setAuth();
  }
  return (
    <div style={{ minHeight: "90vh" }} className="col-5 mx-auto my-5">
      <h3 className="text-center bg-success text-light p-3 col-5 my-5 mx-auto">
        {!MyContext.isLogin ? "Login" : "Successfully Logged in"}
      </h3>
      <form
        className="d-flex flex-column col-5 mx-auto"
        onSubmit={handleSubmit(onSubmit)}
      >
        {!MyContext.isLogin && (
          <>
            <input
              className="p-2 my-2"
              name="username"
              {...register("username", {
                required: "Please put your username",
                maxLength: 15,
              })}
              placeholder="Username"
            ></input>
            <p style={{ color: "red" }}>
              {(errors.username && errors.username.message) ||
                (errors.username?.type === "maxLength" &&
                  "Username cannot exceed 15 characters")}
            </p>
            <input
              className="p-2 my-2"
              name="password"
              {...register("password", {
                required: "Please put your password",
                minLength: 6,
              })}
              type="password"
              placeholder="Password"
            ></input>

            <p style={{ color: "red" }}>
              {(errors.password && errors.password.message) ||
                (errors.password?.type === "minLength" &&
                  "Password needs to be at least 6 characters")}
            </p>
          </>
        )}
        {!MyContext.isLogin ? (
          <button className="btn btn-primary" type="submit">
            Log In
          </button>
        ) : (
          <span className="btn btn-primary" onClick={handleLogout}>
            Log out
          </span>
        )}
      </form>
    </div>
  );
}
