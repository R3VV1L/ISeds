import { PersonList } from '../components/addData/customButton';
import { PrRPost } from '../components/addData/prrPost';
const PrR = () => {
  return (

    <div>

       <PrRPost></PrRPost>

      <div className="containerTable">
        <table>
          <tr><th>id</th><th>id сотрудника</th><th>id работы</th><th>область</th><th>дата регистрации</th><th>итог</th></tr>
          <tr><td><PersonList element='id_prR' row='4' /></td><td><PersonList element='id_sotr' row='4' /></td><td><PersonList element='id_krab' row='4' /></td><td><PersonList element='oblast' row='4' /></td><td><PersonList element='datar' row='4' /></td><td><PersonList element='prmk' row='4' /></td></tr>
        </table>
      </div>
    </div>
  )
}

// id_prR		int not null
// primary key,
// id_sotr		int not null,
// id_krab		int not null,
// oblast		varchar(100) not null,
// datar		varchar(10) not null,
// prmk		varchar(5) not null

export { PrR };