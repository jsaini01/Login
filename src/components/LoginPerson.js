import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Div, H2, Profile, Container } from "../styles/LoginStyle";

const LoginPerson = () => {
  const [data, setData] = useState("");
  const [showProfile, setShowProfile] = useState(false);

  const navigator = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));

    setData(userInfo);
  }, []);

  const Logout = () => {
    navigator("/");
    window.localStorage.clear();
  };

  const show = () => {
    setShowProfile(true);
  };

  return (
    <>
      <Div>
        <button onClick={show}>Profile</button>
        <p>
          🧑‍🦰
          {`${data.firstName}
        ${data.lastName}`}
        </p>

        <button type="button" onClick={Logout}>
          Logout !
        </button>
      </Div>

      <H2>Welcome </H2>

      {showProfile ? (
        <Profile>
          <p>🧑‍🦰</p>
          <Container>
            <h3>
              Name:
              <span>{`  ${data.firstName} ${data.lastName} `}</span>
            </h3>
            <h3>
              Phone.no: <span>{data.phone}</span>
            </h3>
            <h3>
              Email:<span> {data.email}</span>
            </h3>
            <h3>
              State: <span>{data.state}</span>
            </h3>

            <h3>
              City:<span>{data.city}</span>
            </h3>
          </Container>
        </Profile>
      ) : null}
    </>
  );
};

export default LoginPerson;
