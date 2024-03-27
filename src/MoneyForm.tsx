import { action, observable } from "mobx";
import { observer } from "mobx-react";

type FormState = {
  total: number;
  years: number;
  salary: number;
};

const formState: FormState = observable({
  total: 0,
  years: 0,
  salary: 0,
});

function MoneyForm() {
  const calculateTotal = action((formState: FormState) => {
    formState.total = formState.years * formState.salary;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginBottom: 0 }}>Money Talks</h3>
      <p>Total: {formState.total}</p>
      <input
        type="number"
        placeholder="Years ..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.years = Number(e.target.value);
        })}
      />
      <input
        type="number"
        placeholder="Yearly salary ..."
        style={{ height: "40px" }}
        onChange={action((e) => {
          formState.salary = Number(e.target.value);
        })}
      />
      <button type="button" onClick={() => calculateTotal(formState)}>
        Calculate total
      </button>
    </div>
  );
}

export default observer(MoneyForm);
