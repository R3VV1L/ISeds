import { PersonList } from '../components/addData/customButton';
import { KrabPost } from '../components/addData/krabPost';

const Krab = () => {
    return (
      <div>

        <KrabPost></KrabPost>
        <div className="containerTable">
          <table>
          <tr><th>id</th><th>id документа</th><th>id инструмента</th></tr>
          <tr><td><PersonList element='id_krab' row='3' /></td><td><PersonList element='id_dok' row='3' /></td><td><PersonList element='id_instr' row='3' /></td></tr>
          </table>

        </div>
        </div>
    )
  }

export {Krab};