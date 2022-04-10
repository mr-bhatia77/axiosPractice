import "./styles.css";
import axios from "axios";
import { useState } from "react";
import React from "react";

const url = "https://course-api.com/axios-tutorial-post";

export default function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name, email);
    try {
      const resp = await axios.post(url, { name: name, email: email });
      console.log(resp.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        Name
        <input type="text" onChange={(e) => setName(e.target.value)}></input>
        Email
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <input type="submit" />
      </form>
    </div>
  );
}
