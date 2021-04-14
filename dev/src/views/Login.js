import React, { useState } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
// import axios from "axios";
// { Username, setPassword, setUsername, Password }
function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [Status, setStatus] = useState(true);
  // const handleInputUser = (e) => {
  //   setUsername(e.target.value);
  // };
  // const handleInputPass = (e) => {
  //   setPassword(e.target.value);
  // };
  // const handleSubmitLogin = () => {
  //   axios
  //     .post("https://os.ncuos.com/api/user/token", {
  //       username: Username,
  //       password: Password,
  //     })
  //     .then((res) => {
  //       const token = res.data.token;
  //       localStorage.setItem("token", token);
  //     });
  // };
  // const getLocalstorage = () => {
  //   const token = localStorage.getItem("token");
  //   axios({
  //     url: "https://os.ncuos.com/api/user/profile/basic",
  //     method: "get",
  //     headers: { authorization: "passport " + token },
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };
  const onUpSubmit = (data) => {
    const { password, username, email } = data;
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("email", email);
    axios({
      method: "post",
      url: "http://api.onesnowwarrior.cn:8000/api/auth/registration",
      data: urlencoded,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const changeForm = (e) => {
    e.preventDefault();
    setStatus(!Status);
    reset();
  };
  const onInSubmit = (data) => {
    const { password, username } = data;
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    axios({
      method: "post",
      url: "http://api.onesnowwarrior.cn:8000/api/auth/login",
      data: urlencoded,
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // `;
  const Footer = styled.p`
    position: absolute;
    bottom: 10px;
    color: #a79490;
    font-weight: 200;
    letter-spacing: 1px;
  `;
  const Err = styled.p`
    font-size: 12px;
    font-weight: 200;
    color: #f05858e0;
  `;
  return (
    <div className="homeBox">
      {Status ? (
        <div
          className="signInBox animate__animated animate__fadeInUp"
          style={Status ? {} : { display: "none" }}
        >
          <form
            id="signIn"
            className="signin-form"
            onSubmit={handleSubmit(onInSubmit)}
          >
            <div className="User" style={{ marginBottom: "24px" }}>
              <i className="Uplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path
                    id="路径_1"
                    data-name="路径 1"
                    d="M11,0A11,11,0,1,1,0,11,11.011,11.011,0,0,1,11,0ZM4.8,18.083a4.768,4.768,0,0,1,3.331-2.6,4.36,4.36,0,0,1-2.181-4.125c0-3.116,2-4.741,4.836-4.741s4.89,1.734,4.89,4.741c0,3.452-2.2,4.125-2.2,4.125a4.28,4.28,0,0,1,3.652,2.6A9.64,9.64,0,0,0,20.448,11,9.435,9.435,0,1,0,4.8,18.083Zm0,0"
                    fill="rgba(255,154,72,0.89)"
                  />
                </svg>
              </i>
              <input
                type="text"
                placeholder="账号"
                name="username"
                className="form-control"
                {...register("username", {
                  required: true,
                  maxLength: 10,
                  minLength: 6,
                  pattern: /^[A-Z|a-z|0-9]{5,10}/,
                })}
              />
              {/* {errors?.username?.type === "required" && <p>您需填写账号</p>}
          {errors?.username?.type === "maxLength" && (
            <p>账号长度不得超过10位</p>
          )}
          {errors?.username?.type === "minLength" && <p>账号长度不得少于6位</p>}
          {errors?.username?.type === "pattern" && <p>只允许数字和字母</p>} */}
            </div>
            <div className="Pass">
              <i className="Pplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="路径_25"
                    data-name="路径 25"
                    d="M16.933,18.876a5.925,5.925,0,0,1-.927-3.375,6.382,6.382,0,0,1,6.623-6.25,6.382,6.382,0,0,1,6.623,6.25,6.382,6.382,0,0,1-6.623,6.25,6.872,6.872,0,0,1-3.841-1.125L15.741,23.5,17.2,24.876l-1.854,1.75-1.457-1.375-.927.875L14.417,27.5l-1.854,1.75L9.251,26.126l7.682-7.25Zm5.7-7.125a3.756,3.756,0,1,0,0,7.5A3.8,3.8,0,0,0,26.6,15.5a3.879,3.879,0,0,0-3.974-3.75Z"
                    transform="translate(-9.251 -9.251)"
                    fill="#ff9a48"
                  />
                </svg>
              </i>
              <input
                type="password"
                placeholder="密码"
                className="form-control"
                {...register("password")}
              />
            </div>
            <div className="btns">
              <button className="btn" onClick={changeForm}>
                注册
              </button>
              <input type="submit" value="登录" className="btn sign" />
            </div>
          </form>
        </div>
      ) : (
        <div
          className="signupBox animate__animated animate__fadeInUp"
          style={Status ? { display: "none" } : {}}
        >
          <form className="signup-form" onSubmit={handleSubmit(onUpSubmit)}>
            <div className="User" style={{ marginBottom: "24px" }}>
              <i className="Uplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 22"
                >
                  <path
                    id="路径_1"
                    data-name="路径 1"
                    d="M11,0A11,11,0,1,1,0,11,11.011,11.011,0,0,1,11,0ZM4.8,18.083a4.768,4.768,0,0,1,3.331-2.6,4.36,4.36,0,0,1-2.181-4.125c0-3.116,2-4.741,4.836-4.741s4.89,1.734,4.89,4.741c0,3.452-2.2,4.125-2.2,4.125a4.28,4.28,0,0,1,3.652,2.6A9.64,9.64,0,0,0,20.448,11,9.435,9.435,0,1,0,4.8,18.083Zm0,0"
                    fill="rgba(255,154,72,0.89)"
                  />
                </svg>
              </i>
              <input
                type="text"
                placeholder="账号"
                name="username"
                className="form-control"
                {...register("username", {
                  required: true,
                  maxLength: 10,
                  minLength: 6,
                  pattern: /^[A-Z|a-z|0-9]{5,10}/,
                })}
              />

              {errors?.username?.type === "required" && <Err>您需填写账号</Err>}
              {errors?.username?.type === "maxLength" && (
                <Err>账号长度不得超过10位</Err>
              )}
              {errors?.username?.type === "minLength" && (
                <Err>账号长度不得少于6位</Err>
              )}
              {errors?.username?.type === "pattern" && (
                <Err>只允许数字和字母</Err>
              )}
            </div>
            <div className="Email" style={{ marginBottom: "24px" }}>
              <i className="Uplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 22 18"
                >
                  <path
                    id="路径_26"
                    data-name="路径 26"
                    d="M22.871,95.174a1.3,1.3,0,0,0-1.06-1.2c-.013,0-.024-.014-.035-.014s-.022-.013-.035-.013l-.022-.014H2.948a2.553,2.553,0,0,0-.8.123l-.035.014A1.968,1.968,0,0,0,.931,95.94v13.429a2.788,2.788,0,0,0,.422,1.492c.024.042.057.083.092.138l.011.014.024.027a2.185,2.185,0,0,0,1.722.889H21a2.006,2.006,0,0,0,1.87-1.752l.013-.04v-.014a3.13,3.13,0,0,0,.046-.438V95.56c-.024-.109-.035-.232-.058-.384ZM8.107,102.786,5.962,105.1c-1.232,1.327-2.464,2.643-3.7,3.983v-12l5.843,5.708Zm7.678-.027c1.94-1.89,3.857-3.765,5.8-5.654v11.758l-2.431-2.56-3.364-3.545Zm-9.231,3.789L9.123,103.8c.433.425.855.836,1.278,1.247.239.232.479.465.708.7l.308.3a.611.611,0,0,0,.979,0c.777-.753,1.553-1.521,2.352-2.286l1.415,1.492c1.621,1.711,3.229,3.409,4.86,5.12H3.016C4.2,109.083,5.379,107.823,6.554,106.548Zm5.363-2.053Q8.906,101.558,5.9,98.608L2.744,95.514c1.379-.052,7.427-.092,12.55-.092,2.977,0,5.055.013,5.887.04L11.917,104.5Z"
                    transform="translate(-0.931 -93.928)"
                    fill="#ff9a48"
                  />
                </svg>
              </i>
              <input
                type="text"
                placeholder="邮箱"
                name="username"
                className="form-control"
                {...register("email", {
                  required: true,
                  pattern: /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/,
                })}
              />

              {errors?.email?.type === "required" && <Err>您需填写邮箱</Err>}
              {errors?.email?.type === "pattern" && <Err>邮箱格式错误</Err>}
            </div>
            <div className="Pass" style={{ marginBottom: "24px" }}>
              <i className="Pplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="路径_25"
                    data-name="路径 25"
                    d="M16.933,18.876a5.925,5.925,0,0,1-.927-3.375,6.382,6.382,0,0,1,6.623-6.25,6.382,6.382,0,0,1,6.623,6.25,6.382,6.382,0,0,1-6.623,6.25,6.872,6.872,0,0,1-3.841-1.125L15.741,23.5,17.2,24.876l-1.854,1.75-1.457-1.375-.927.875L14.417,27.5l-1.854,1.75L9.251,26.126l7.682-7.25Zm5.7-7.125a3.756,3.756,0,1,0,0,7.5A3.8,3.8,0,0,0,26.6,15.5a3.879,3.879,0,0,0-3.974-3.75Z"
                    transform="translate(-9.251 -9.251)"
                    fill="#ff9a48"
                  />
                </svg>
              </i>
              <input
                type="password"
                placeholder="请输入长度不少于6位的密码"
                className="form-control"
                {...register("password", {
                  required: true,
                  maxLength: 15,
                  minLength: 6,
                  pattern: /^[A-Z|a-z|0-9]/,
                })}
              />
              {errors?.password?.type === "required" && <Err>您需填写密码</Err>}
              {errors?.password?.type === "maxLength" && (
                <Err>密码长度不得超过15位</Err>
              )}
              {errors?.password?.type === "minLength" && (
                <Err>密码长度不得少于6位</Err>
              )}
              {errors?.password?.type === "pattern" && (
                <Err>只允许数字和字母</Err>
              )}
            </div>
            <div className="rePass">
              <i className="Pplus">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 20 20"
                >
                  <path
                    id="路径_25"
                    data-name="路径 25"
                    d="M16.933,18.876a5.925,5.925,0,0,1-.927-3.375,6.382,6.382,0,0,1,6.623-6.25,6.382,6.382,0,0,1,6.623,6.25,6.382,6.382,0,0,1-6.623,6.25,6.872,6.872,0,0,1-3.841-1.125L15.741,23.5,17.2,24.876l-1.854,1.75-1.457-1.375-.927.875L14.417,27.5l-1.854,1.75L9.251,26.126l7.682-7.25Zm5.7-7.125a3.756,3.756,0,1,0,0,7.5A3.8,3.8,0,0,0,26.6,15.5a3.879,3.879,0,0,0-3.974-3.75Z"
                    transform="translate(-9.251 -9.251)"
                    fill="#ff9a48"
                  />
                </svg>
              </i>
              <input
                type="password"
                placeholder="确认密码"
                name="password"
                className="form-control"
                {...register("repassword", {
                  required: true,
                  maxLength: 15,
                  minLength: 6,
                  pattern: /^[A-Z|a-z|0-9]/,
                })}
              />
              {errors?.repassword?.type === "required" && (
                <Err>您需填写密码</Err>
              )}
              {watch("repassword") === watch("password") ? null : (
                <Err>两次密码不一致</Err>
              )}
            </div>
            <div className="btns">
              <button className="btn" onClick={changeForm}>
                返回
              </button>

              <input type="submit" value="注册" className="btn sign" />
            </div>
          </form>
        </div>
      )}

      <Footer>copyright@ncuhome</Footer>
    </div>
  );
}

export default Login;
