import { useSnackbar } from "notistack";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

MiniAuthentication.propTypes = {};

function MiniAuthentication(props) {
  const [userData, setUserData] = useState();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const getLocal = localStorage.getItem("userLogin");
    const parseLocal = JSON.parse(getLocal);
    setUserData(parseLocal);
  }, []);

  const clickOut = () => {
    localStorage.setItem("userLogin", JSON.stringify(""));
    enqueueSnackbar("Đăng xuất thành công", {
      variant: "info",
    });
  };

  return (
    <li className="login-btn">
      <Link to="/login">
        <i className="far fa-user"></i>
      </Link>
      <ul className="minicart">
        {userData ? (
          userData.map((item, index) => {
            return (
              <h3 key={index} style={{ textAlign: "center" }}>
                Hello {item.userName}
              </h3>
            );
          })
        ) : (
          <h3 style={{ textAlign: "center" }}>Hello Guest</h3>
        )}
        <li>
          <div className="checkout-link">
            {userData ? (
              <Link onClick={clickOut} className="red-color" to="#">
                LogOut
              </Link>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link className="red-color" to="/register">
                  Register
                </Link>
              </>
            )}
          </div>
        </li>
      </ul>
    </li>
  );
}

export default MiniAuthentication;
