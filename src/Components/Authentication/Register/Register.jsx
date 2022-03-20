import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import UserApi from "../../../Api/UserApi/UserApi";
import Header from "../../Header/Header";
import RegisterTitle from "../../PageTitle/Register/RegisterTitle";
import { regiterAction } from "./RegisterSlice";

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
    userEmail: yup
      .string()
      .email("Nhập đúng định dạng email")
      .required("Vui lòng nhập email"),
    userPass: yup
      .string()
      .required("Vui lòng nhập password")
      .min(8, "Mật khẩu ít nhất 8 kí tự"),
    userRetypePass: yup
      .string()
      .required("Vui lòng nhập lại password")
      .oneOf([yup.ref("userPass")], "Mật khẩu không giống nhau"),
  })
  .required();

function Register(props) {
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Tao id cho user moi
  const [idUser, setID] = useState();
  useEffect(() => {
    const getAllUser = async () => {
      const allUser = await UserApi.getAll();
      const arrAllUser = Object.values(allUser.data);
      const keyAllUser = Object.keys(arrAllUser);
      setID(keyAllUser.length + 1);
    };
    getAllUser();
  });

  const onSubmit = async (data) => {
    const newArr = {
      userName: data.userName,
      userEmail: data.userEmail,
      userPass: data.userPass,
      id: idUser,
    };

    const action = regiterAction(newArr);

    // Check đăng kí thành công hay thất bại
    const resultAction = await dispatch(action);
    const userData = unwrapResult(resultAction);

    if (userData) {
      enqueueSnackbar("Đăng ký thành công", {
        variant: "success",
      });
      window.location.href = "/login";
    } else {
      enqueueSnackbar("Đăng ký thất bại", {
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

  return (
    <div>
      <Header />
      <RegisterTitle />
      <section className="login-area pt-100 pb-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="basic-login">
                {userData ? (
                  userData.map((item, index) => {
                    return (
                      <>
                        <h3 className="text-center mb-60">
                          Hello {item.userName}
                        </h3>
                        <Link
                          onClick={clickOut}
                          className="btn theme-btn w-100"
                          to="#"
                        >
                          LogOut
                        </Link>
                      </>
                    );
                  })
                ) : (
                  <>
                    <h3 className="text-center mb-60">Signup From Here</h3>
                    <form onSubmit={handleSubmit(onSubmit)}>
                      {/* Tên đăng nhập */}
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

                      {/* Email */}
                      <label htmlFor="email">
                        Email Address <span className="required">*</span>
                      </label>
                      <input
                        id="email"
                        placeholder="Enter Email address..."
                        className="mb-0"
                        {...register("userEmail", { required: true })}
                      />
                      <div
                        id="val-username1-error"
                        className="invalid-feedback animated fadeInUp mb-3"
                        style={{ display: "block" }}
                      >
                        {errors.userEmail?.message}
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

                      {/* Retype pass */}
                      <label htmlFor="email">
                        Retype password <span className="required">*</span>
                      </label>
                      <input
                        type="password"
                        id="email"
                        placeholder="Enter password..."
                        className="mb-0"
                        {...register("userRetypePass", { required: true })}
                      />
                      <div
                        id="val-username1-error"
                        className="invalid-feedback animated fadeInUp mb-3"
                        style={{ display: "block" }}
                      >
                        {errors.userRetypePass?.message}
                      </div>

                      <button type="submit" className="btn theme-btn-2 w-100">
                        Register Now
                      </button>
                      <div className="or-divide">
                        <span>or</span>
                      </div>
                      <Link className="btn theme-btn w-100" to="/login">
                        Login Now
                      </Link>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Register;
