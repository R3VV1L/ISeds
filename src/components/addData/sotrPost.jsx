import React, { useState } from "react";
import axios from 'axios';

const SotrPost = (props) => {

  const [id, setId] = useState([]);
  const [text, setText] = useState([]);
  const [text2, setText2] = useState([]);
  const [text3, setText3] = useState([]);
  const [text4, setText4] = useState([]);
  const [text5, setText5] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      id: id,
      text: text,
      text2: text2,
      text3: text3,
      text4: text4,
      text5: text5,
    };

    console.log(obj);

    axios.post(`http://localhost:8000/add/sotr`, obj)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <div className="container">
            <input className="inpt" value={id} onChange={(event) => setId(event.target.value)} placeholder='id' />
            <input className="inpt"
              value={text}
              onChange={(event) => setText(event.target.value)} placeholder='имя'
            />
            <input className="inpt"
              value={text2}
              onChange={(event) => setText2(event.target.value)} placeholder='фамилия'
            />
            <input className="inpt"
              value={text3}
              onChange={(event) => setText3(event.target.value)} placeholder='отчество'
            />
            <input className="inpt"
              value={text4}
              onChange={(event) => setText4(event.target.value)} placeholder='номер телефона'
            />
            <input className="inpt"
              value={text5}
              onChange={(event) => setText5(event.target.value)} placeholder='должность'
            />
            <button type="submit">отправить</button>
          </div>
        </label>
      </form>
    </div>
  );
};
export { SotrPost };