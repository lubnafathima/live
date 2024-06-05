import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [arrList, setArrList] = useState([1, 2, 3]);
  const [obj, setObj] = useState({ name: "John", age: 30 });
  const [str, setStr] = useState("Hello");
  const [bool, setBool] = useState(true);

  return (
    <div>
      {arrList.map((item, index) => (
        <p key={index}>{item}</p>
      ))}

      {Object.entries(obj).map(([key, value]) => (
        <p key={key}>
          {key}: {value.toString()}
        </p>
      ))}

      <p>{str}</p>

      {bool ? "true" : "false"} 
      {/* You can't display boolean basically */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
