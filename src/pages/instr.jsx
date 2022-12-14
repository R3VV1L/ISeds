// import { useState } from "react";
import { PersonList } from "../components/addData/customButton";
import { InstrPost } from "../components/addData/instrPost";

const Instr = () => {
  return (
    <div>
      <div className="container__wrapper">
        <div>
          <InstrPost></InstrPost>

          <div className="containerTable mt-5">
            <table>
              <tr>
                <th>id</th>
                <th>Название инструмента</th>
                <th>количество инструментов на складе</th>
              </tr>
              <tr>
                <td>
                  <PersonList element="id_instr" row="0" />
                </td>
                <td>
                  <PersonList element="n_instr" row="0" />
                </td>
                <td>
                  <PersonList element="k_instr" row="0" />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Instr };
