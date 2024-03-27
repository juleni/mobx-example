import { observer } from "mobx-react";
import { useTeamStore } from "./TeamStore";

function TeamNameInfo() {
  const { teamName, setMascot } = useTeamStore();
  return (
    <>
      <h1 style={{ marginBottom: 1 }}>Team: {teamName}</h1>
      <input
        type="text"
        style={{ marginBottom: 8 }}
        placeholder="Change Mascot ..."
        onChange={(e) => setMascot(e.target.value)}
      />{" "}
    </>
  );
}

export default observer(TeamNameInfo);
