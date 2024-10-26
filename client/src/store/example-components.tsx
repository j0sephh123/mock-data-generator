import { useSnapshot } from "valtio";
import { state } from "./store";

function Counter() {
  const snap = useSnapshot(state);
  return (
    <div>
      {snap.count}
      <button
        onClick={() => {
          // also read from the state proxy in callbacks
          if (state.count < 10) {
            ++state.count;
          }
        }}
      >
        +1
      </button>
    </div>
  );
}

export default Counter;