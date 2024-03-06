// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import axios from "axios";

const App = () => {
  // get request
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/call");
    console.log(res.data);
    document.getElementById("para").innerHTML = res.data;
  };

  // post request --> string
  const data = "Hello";
  const postDataFromFrontend = async () => {
    const res = await axios.post("http://localhost:8080/testpost", { data });
    console.log(res.data);
    document.getElementById("p").innerHTML = res.data;
  };

  // post request --> form
  const [formData, setFormData] = useState("");
  const [form, setForm] = useState("");
  const postFormFromFrontend = async () => {
    const res = await axios.post("http://localhost:8080/testform", {
      formData,
      form,
    });
    console.log(res.data);
    document.getElementById("para").innerHTML = res.data;
  };

  return (
    <div>
      <button onClick={getData}>Data from Spring Boot</button>
      <p id="para"></p>

      <button onClick={postDataFromFrontend}>post Data</button>
      <p id="p"></p>

      <form onSubmit={postFormFromFrontend}>
        <input
          type="text"
          name="formdata"
          value={formData}
          onChange={(e) => setFormData(e.target.value)}
        />
        <input
          type="text"
          name="formd"
          value={form}
          onChange={(e) => setForm(e.target.value)}
        />
        <input type="submit" value="testform" />
      </form>
    </div>
  );
};
// const [data, setData] = useState([]);

// useEffect(() => {
//   axios
//     .get("http://localhost:8080/call")
//     .then((response) => {
//       setData(response.data);
//     })
//     .catch((error) => {
//       console.error("Error fetching data: ", error);
//     });
// }, []);

export default App;
