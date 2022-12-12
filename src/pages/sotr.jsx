import { PersonList } from '../components/addData/customButton';
import { SotrPost } from '../components/addData/sotrPost';
const Sotr = () => {
  return (
    <div>

      <SotrPost></SotrPost>

      <div className="containerTable">
        <table>
          <tr><th>id</th><th>имя</th><th>фамилия</th><th>отчество</th><th>номер телефона</th><th>должность</th></tr>
          <tr><td><PersonList element='id_sotr' row='1' /></td><td><PersonList element='name' row='1' /></td><td><PersonList element='familia' row='1' /></td><td><PersonList element='otch' row='1' /></td><td><PersonList element='numt' row='1' /></td><td><PersonList element='doljnost' row='1' /></td></tr>
        </table>
      </div>
      <div className="containerTable2">
        <table>
          <tr><th title='количество сотрудников, которое осталось нанять'><div className='textOnNS'>#</div></th></tr>
          <tr><td><PersonList element='counterElectr' row='7' /></td></tr>
        </table>
      </div>
    </div>
  )
}

/*	id_sotr	int not null
primary key,
name		varchar(12) not null,
familia		varchar(20) not null,
otch		varchar(50) not null,
numt		varchar(12) not null,
doljnost	varchar(100) not null */

export { Sotr };