import { action, observable } from "mobx";
import { observer } from "mobx-react";
import Athlete from "./Athlete";
import { useTeamStore } from "./TeamStore";

type FormState = {
  name: string;
  age: number;
  salary: number;
};

const initialState: FormState = {
  name: "",
  age: 0,
  salary: 0,
};

let formState: FormState = observable({
  name: "",
  age: 0,
  salary: 0,
});

// eslint-disable-next-line mobx/missing-observer
function MoneyForm() {
  /*
  const calculateTotal = action((formState: FormState) => {
    formState.total = formState.years * formState.salary;
  });

  const totalValue = computed(() => formState.years * formState.salary);
  */

  const { totalYearlyCosts, addPlayer } = useTeamStore();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginBottom: 0 }}>Money Talks</h3>
      <>Total: {totalYearlyCosts} Million</>
      <input
        type="text"
        placeholder="Player name ..."
        style={{ height: "40px" }}
        value={formState.name}
        onChange={action((e) => {
          formState.name = e.target.value;
        })}
      />
      <input
        type="number"
        placeholder="Player age ..."
        style={{ height: "40px" }}
        value={formState.age}
        onChange={action((e) => {
          formState.age = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary ..."
        style={{ height: "40px" }}
        value={formState.salary}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      <button
        type="button"
        onClick={action((e) => {
          addPlayer(
            new Athlete(formState.name, formState.age, formState.salary)
          );
          formState = initialState;
        })}
      >
        Add Player
      </button>
    </div>
  );
}

export default observer(MoneyForm);
