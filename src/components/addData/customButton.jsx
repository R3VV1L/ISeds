import React from 'react';
import axios from 'axios';

//получает данные с бд
export default class PersonList extends React.Component {


  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`http://localhost:8000/show/card/`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
        console.log(persons);
      })
  }
  render() {
    return (
      <ul>
        {
          this.state.persons[this.props.row]?.map(e => (
            <li>{e[this.props.element]}</li>
          ))
        }
      </ul>

    )
  }
}
export { PersonList };