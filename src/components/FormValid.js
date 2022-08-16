import React, { useState } from "react";
import { useForm } from "react-hook-form";

import { Form } from "../styles/LoginStyle";
import { useNavigate } from "react-router-dom";

const FormValid = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async () => {
    let items = { email, password };
    try {
      let result = await fetch(
        "https://sql-dev-india.thewitslab.com:3003/auth/login ",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(items),
        }
      );

      let res = await result.json();

      if (result.status === 200) {
        localStorage.setItem("user-info", JSON.stringify(res));
        console.log(result);
        navigate("/person");
      } else {
        navigate("/");
        alert("not registered");
      }
    } catch (err) {
      console(err);
    }

    // if (result.token === undefined) {
    //   navigate("/");
    //   alert("not registered");
    // } else {
    //   console.log(result.token);
    //   navigate("/person");
    // }
  };

  return (
    <Form>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("email", {
            required: true,
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
          })}
          placeholder="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        {errors.email && <p>Email is required.</p>}
        <input
          {...register("password", {
            required: true,
            minLength: 6,
            maxLength: 10,
          })}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        {errors.password && <p>password is required.</p>}
        <input type="submit" />
      </form>
    </Form>
  );
};

export default FormValid;
