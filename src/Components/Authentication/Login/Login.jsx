import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Header from "../../Header/Header";
import LoginTitle from "../../PageTitle/Login/LoginTitle";
import { loginAction } from "./LoginSlice";

Register.propTypes = {};
const schema = yup
  .object({
    userName: yup.string().required("Vui lòng nhập tên đăng nhập"),
    userPass: yup.string().required("Vui lòng nhập password"),
  })
  .required();

function Register(props) {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const action = loginAction(data);
    const resultAction = await dispatch(action);
    const userData = unwrapResult(resultAction);
    if (userData.length !== 0) {
      enqueueSnackbar("Đăng nhập thành công", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Đăng nhập thất bại", {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <Header />
      <LoginTitle />
      <section class="login-area pt-100 pb-100">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 offset-lg-2">
              <div className="basic-login">
                <h3 class="text-center mb-60">Signup From Here</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                  {/* Tên đăng nhập */}
                  <label for="username">
                    Username <span class="required">*</span>
                  </label>
                  <input
                    id="username"
                    placeholder="Enter Username ..."
                    class="mb-0"
                    {...register("userName", { required: true })}
                  />
                  <div
                    id="val-username1-error"
                    class="invalid-feedback animated fadeInUp mb-3"
                    style={{ display: "block" }}
                  >
                    {errors.userName?.message}
                  </div>

                  {/* Pass */}
                  <label for="email">
                    Password <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    placeholder="Enter password..."
                    class="mb-0"
                    {...register("userPass", { required: true })}
                  />
                  <div
                    id="val-username1-error"
                    class="invalid-feedback animated fadeInUp mb-3"
                    style={{ display: "block" }}
                  >
                    {errors.userPass?.message}
                  </div>

                  <button type="submit" class="btn theme-btn-2 w-100">
                    Login Now
                  </button>
                  <div class="or-divide">
                    <span>or</span>
                  </div>
                  <Link class="btn theme-btn w-100" to="/register">
                    Register Now
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
