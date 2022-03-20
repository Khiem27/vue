import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
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
    userName: yup
      .string()
      .required("Vui lòng nhập tên đăng nhập")
      .min(2, "Tên đăng nhập phải trên 2 ký tự")
      .test(
        "Test khoảng trắng",
        "Tên đăng nhập không được có khoảng trắng",
        (data) => {
          const lengthData = data.split(" ").length;
          if (lengthData === 1) {
            return data;
          }
        }
      ),
    userPass: yup
      .string()
      .required("Vui lòng nhập password")
      .min(8, "Mật khẩu ít nhất 8 kí tự"),
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
      window.location.href = "/";
    } else {
      localStorage.setItem("userLogin", JSON.stringify(""))
      enqueueSnackbar("Đăng nhập thất bại", {
        variant: "error",
      });
    }
  };

  const [userData, setUserData] = useState();

  const getLocal = localStorage.getItem("userLogin");
  useEffect(() => {
    const parseLocal = JSON.parse(getLocal);
    setUserData(parseLocal);
  }, [getLocal]);

  const clickOut = () => {
    localStorage.setItem("userLogin", JSON.stringify(""));
    enqueueSnackbar("Đăng xuất thành công", {
      variant: "info",
    });
    window.location.reload();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <LoginTitle />
        <section className="login-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <div className="basic-login">
                  {userData ? (
                    userData.map((item, index) => {
                      return (
                        <h3 className="text-center mb-60">
                          Hello {item.userName}
                        </h3>
                      );
                    })
                  ) : (
                    <h3 className="text-center mb-60">Signup From Here</h3>
                  )}
                  <form onSubmit={handleSubmit(onSubmit)}>
                    {!userData ? (
                      <>
                        <label htmlFor="username">
                          Username <span className="required">*</span>
                        </label>
                        <input
                          id="username"
                          placeholder="Enter Username ..."
                          className="mb-0"
                          {...register("userName", { required: true })}
                        />
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp mb-3"
                          style={{ display: "block" }}
                        >
                          {errors.userName?.message}
                        </div>

                        {/* Pass */}
                        <label htmlFor="email">
                          Password <span className="required">*</span>
                        </label>
                        <input
                          type="password"
                          id="email"
                          placeholder="Enter password..."
                          className="mb-0"
                          {...register("userPass", { required: true })}
                        />
                        <div
                          id="val-username1-error"
                          className="invalid-feedback animated fadeInUp mb-3"
                          style={{ display: "block" }}
                        >
                          {errors.userPass?.message}
                        </div>

                        <button type="submit" className="btn theme-btn-2 w-100">
                          Login Now
                        </button>
                        <div className="or-divide">
                          <span>or</span>
                        </div>
                        {/* Tên đăng nhập */}
                        <Link className="btn theme-btn w-100" to="/register">
                          Register Now
                        </Link>
                      </>
                    ) : (
                      <Link
                        onClick={clickOut}
                        className="btn theme-btn w-100"
                        to="#"
                      >
                        LogOut
                      </Link>
                    )}
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
