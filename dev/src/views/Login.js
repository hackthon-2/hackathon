import React, { useState } from "react";
import "../styles/Login.css";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import axios from "axios";
import user from "../assets/user.svg";
import pass from "../assets/pass.svg";
import email from '../assets/email.svg';

function Login(props) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const [Status, setStatus] = useState(true);

  const onUpSubmit = (data) => {
    const { password, username, email } = data;
    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("email", email);
    axios({
      method: "post",
      url: "/auth/registration",
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
      url: "/auth/login",
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
  // 
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
              <img className="Uplus" src={user}></img>

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
            </div>
            <div className="Pass">
              <img className="Pplus" src={pass}></img>
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
              <img className="Uplus" src={user}></img>
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
            <img className="Pplus" src={email}></img>
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
              <img className="Pplus" src={pass}></img>
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
              <img className="Pplus" src={pass}></img>
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
