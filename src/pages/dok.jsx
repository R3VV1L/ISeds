import { PersonList } from '../components/addData/customButton';
import { DokPost } from '../components/addData/dokPost';


const Dok = () => {
  return (
    <div>
      <DokPost></DokPost>
      <div className="containerTable">
        <table>
          <tr><th>id</th><th>Документ</th><th>Дата оформления</th></tr>
          <tr><td><PersonList element='id_dok' row='2' /></td><td><PersonList element='n_dok' row='2' /></td><td><PersonList element='data_of' row='2' /></td></tr>
        </table>
      </div>
    </div>
  )
}

export { Dok };