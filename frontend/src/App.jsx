import React from "react";
import axios from "axios";

const App = () => {
  const [state, setstate] = React.useState({
    firstname: "",
    lastname: "",
    email: "",
    number: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setstate((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    const response=await axios.post("http://localhost:5000/data",state)
   console.log("server response:", response);
    alert("form is submitted");
  };

  return (
    <div className=" min-h-screen flex items-center justify-center">
      <div className="border rectangular h-40 w-70">
        <form onSubmit={handlesubmit}>
          <label>First name</label>
          <input
            type="text"
            placeholder="enter your name"
            value={state.firstname}
            name="firstname"
            onChange={handleChange}
            className="border rectangular"
          />

          <label> Last Name</label>
          <input
            type="text"
            placeholder="enter your last name"
            name="lastname"
            value={state.lastname}
            onChange={handleChange}
            className="border rectangular"
          />

          <label> Email</label>
          <input
            type="email"
            placeholder="enter yout email"
            name="email"
            value={state.email}
            onChange={handleChange}
            className="border rectangular"
          />
          <label>phone no</label>
          <input
            type="number"
            placeholder="enter your number"
            name="number"
            value={state.number}
            onChange={handleChange}
            className="border rectangular"
          />

          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default App;
