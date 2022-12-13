import React, { useState } from "react";
import { PersonList } from "../components/addData/customButton"
import axios from 'axios';

const AuthForm = ({ roles }) => {

    const [login, setLogin] = useState([]);
    const [password, setPassword] = useState([]);
    const [stage, setStage] = useState('0');



    async function handleSubmit(event) {
        event.preventDefault();

        let blbl = await axios.get(`http://localhost:8000/show/card/`)
            .then(res => {
                return res.data;
            })


        if (login === blbl[6][0].login && password === blbl[6][0].password) {
            setStage(2);
        }
        else if (login === blbl[6][1].login && password === blbl[6][1].password) {
            setStage(1);
        }
        else {
            console.log('dont auth')
        };

        await roles(stage)


    }
    <PersonList />
    return (
        <div >
            <form>
                <input className="inpt1" value={login} onChange={(event) => setLogin(event.target.value)} placeholder='login' />
                <input className="inpt2" value={password} onChange={(event) => setPassword(event.target.value)} placeholder='password' />
                <button type="submit" className="authBtn" onClick={handleSubmit}>готово</button>
            </form>
        </div>
    )

}

export { AuthForm };