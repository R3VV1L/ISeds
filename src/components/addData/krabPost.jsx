import React, { useState } from "react";
import axios from 'axios';

const KrabPost = (props) => {

  const [id, setId] = useState([]);
  const [text, setText] = useState([]);
  const [text2, setText2] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const obj = {
      id: id,
      text: text,
      text2: text2,
    };

    console.log(obj);

    axios.post(`http://localhost:8000/add/krab`, obj)
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
            <input className="inpt" value={id} onChange={(event) => setId(event.target.value)} placeholder='id работы' />
            <input className="inpt"
              value={text}
              onChange={(event) => setText(event.target.value)} placeholder='id Документа' //если не работает поменять тип данных
            />
            <input className="inpt"
              value={text2}
              onChange={(event) => setText2(event.target.value)} placeholder='id Инструмента'
            />
            <button type="submit">отправить</button>
          </div>
        </label>
      </form>
    </div>
  );
};
export { KrabPost };