import React, { useState, createRef } from "react";
import { PersonList } from "../components/addData/customButton"
import axios from 'axios';

const AuthForm = (props) => {
    const [login, setLogin] = useState([]);
    const [password, setPassword] = useState([]);
    const [stage, setStage] = useState('0');

    const letRef = React.forwardRef((props, ref) => ({stage}));

    async function handleSubmit(event) {
        event.preventDefault();

        let state = {
            persons: []
        }

        let blbl = await axios.get(`http://localhost:8000/show/card/`)
            .then(res => {
                const persons = res.data;
                return res.data;
            })


        if (login === blbl[6][0].login && password === blbl[6][0].password) {
            console.log('admin')
            setStage(2);
        }
        else if (login === blbl[6][1].login && password === blbl[6][1].password) {
            console.log('sotr1')
            setStage(1);
        }
        else {
            console.log('dont auth')

        };

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