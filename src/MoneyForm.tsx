import { useState } from "react";

function MoneyForm() {
  const [total, setTotal] = useState<number>(0);
  const [years, setYears] = useState(0);
  const [salary, setSalary] = useState(0);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3 style={{ marginBottom: 0 }}>Money Talks</h3>
      <p>Total: {total}</p>
      <input
        type="number"
        placeholder="Years ..."
        style={{ height: "40px" }}
        onChange={(e) => setYears(Number(e.target.value))}
      />
      <input
        type="number"
        placeholder="Yearly salary ..."
        style={{ height: "40px" }}
        onChange={(e) => setSalary(Number(e.target.value))}
      />
      <button type="button" onClick={() => setTotal(years * salary)}>
        Calculate total
      </button>
    </div>
  );
}

export default MoneyForm;
