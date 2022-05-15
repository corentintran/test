import React, { useState } from "react";

const log = function (mail, psw) {
  const url = "http://sefdb02.qut.edu.au:3001/user/login";

  fetch(url, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },

    body: JSON.stringify({ email: mail, password: psw })
  })
    .then((res) => res.json())
    .then((res) => localStorage.setItem("token", res.token));
};
export default function Login() {
  const [mail, setMail] = useState("");
  const [psw, setPsw] = useState("");

  return (
    <div className="App">
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          id="email"
          placeholder="email"
          value={mail}
          onChange={(event) => {
            const newMail = event.target.value;
            setMail(newMail);
          }}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="password"
          value={psw}
          onChange={(event) => {
            const newPsw = event.target.value;
            setPsw(newPsw);
          }}
          required
        />

        <button onClick={log(mail, psw)}>Login</button>
      </form>
    </div>
  );
}
