import { yupResolver } from "@hookform/resolvers/yup";
import { unwrapResult } from "@reduxjs/toolkit";
import { useSnackbar } from "notistack";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as yup from "yup";
import Header from "../../Header/Header";
import RegisterTitle from "../../PageTitle/Register/RegisterTitle";
import { regiterAction } from "./RegisterSlice";

Register.propTypes = {};
const schema = yup
  .object({
    userName: yup.string().required("Vui lòng nhập tên đăng nhập"),
    userEmail: yup
      .string()
      .email("Nhập đúng định dạng email")
      .required("Vui lòng nhập email"),
    userPass: yup.string().required("Vui lòng nhập password"),
    userRetypePass: yup.string().required("Vui lòng nhập lại password"),
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
  const onSubmit = async (data) => {
    const newArr = {
      userName: data.userName,
      userEmail: data.userEmail,
      userPass: data.userPass,
    };

    const action = regiterAction(newArr);

    // Check đăng kí thành công hay thất bại
    const resultAction = await dispatch(action);
    const userData = unwrapResult(resultAction);

    if (userData) {
      enqueueSnackbar("Đăng ký thành công", {
        variant: "success",
      });
    } else {
      enqueueSnackbar("Đăng ký thất bại", {
        variant: "error",
      });
    }
  };
  return (
    <div>
      <Header />
      <RegisterTitle />

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

                  {/* Email */}
                  <label for="email">
                    Email Address <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    placeholder="Enter Email address..."
                    class="mb-0"
                    {...register("userEmail", { required: true })}
                  />
                  <div
                    id="val-username1-error"
                    class="invalid-feedback animated fadeInUp mb-3"
                    style={{ display: "block" }}
                  >
                    {errors.userEmail?.message}
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

                  {/* Retype pass */}
                  <label for="email">
                    Nhập lại password <span class="required">*</span>
                  </label>
                  <input
                    id="email"
                    placeholder="Enter password..."
                    class="mb-0"
                    {...register("userRetypePass", { required: true })}
                  />
                  <div
                    id="val-username1-error"
                    class="invalid-feedback animated fadeInUp mb-3"
                    style={{ display: "block" }}
                  >
                    {errors.userRetypePass?.message}
                  </div>

                  <button type="submit" class="btn theme-btn-2 w-100">
                    Register Now
                  </button>
                  <div class="or-divide">
                    <span>or</span>
                  </div>
                  <Link class="btn theme-btn w-100" to="/login">
                    Login Now
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
