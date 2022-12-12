import { PersonList } from '../components/addData/customButton';
const View = () => {
  return (
    <div>
      <h1>Представление для сотрудников:</h1>
      <div className="containerTableView">
        <table>
          <tr><th>id</th><th>название документа</th><th>имя</th><th>фамилия</th><th>должность</th><th>инструмент</th><th>кол-во</th></tr>
          <tr><td><PersonList element='id_krab' row='5' /></td><td><PersonList element='n_dok' row='5' /></td><td><PersonList element='name' row='5' /></td><td><PersonList element='familia' row='5' /></td><td><PersonList element='doljnost' row='5' /></td><td><PersonList element='n_instr' row='5' /></td><td><PersonList element='k_instr' row='5' /></td></tr>
        </table>

      </div>
    </div>
  )
}

export { View };