import { observer } from "mobx-react";
import Athlete from "./Athlete";

const lebronJames = new Athlete("Lebron James", 37);
const stephCurry = new Athlete("Steph Curry", 34);

function Roster() {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Age</th>
      </tr>
      {[lebronJames, stephCurry].map((athlete) => {
        return (
          <tr key={athlete.name}>
            <td>{athlete.name}</td>
            <td>{athlete.age}</td>
          </tr>
        );
      })}
    </table>
  );
}

export default observer(Roster);
