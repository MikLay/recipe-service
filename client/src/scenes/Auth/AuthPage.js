import React from "react";
import { useForm } from "react-hook-form";
import api from "../../api/api";
import Button from "react-bootstrap/Button";
import { useHistory } from "react-router";

const AuthPage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = async data => {
    await api
      .authUser(data)
      .then(resp => {
        localStorage.setItem("user_token", resp.accessToken);
        localStorage.setItem("user_id", resp.id);
        history.push("/recipes");
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div
        className="card bg-dark mx-auto align-self-center"
        style={{ minWidth: "400px" }}
      >
        <div className="card-header text-center text-light">
          <h4>Sign In</h4>
        </div>
        <div className="card-body text-light">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="from-group">
              <label>User Name: </label>
              <input
                name="username"
                className="form-control"
                type="text"
                placeholder=""
                ref={register}
              />
            </div>
            <div className="from-group">
              <label>Password: </label>
              <input
                name="password"
                className="form-control"
                type="password"
                placeholder=""
                ref={register}
              />
            </div>
            <div className="justify-content-center mt-3">
              <Button variant="outline-primary" size="lg" block type="submit">
                Enter
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
