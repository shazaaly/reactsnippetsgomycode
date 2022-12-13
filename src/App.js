import { CounterEx } from "./components/Hooks/useStateHook/CounterEx";
import PropTypes from "prop-types";
import { FetchEx } from "./components/Hooks/useEffectHook/FetchEx";
import { RefExample } from "./components/Hooks/userefHook/RefExample";

function App() {
  let count = 0;
  return (
    <div className="App">
      <CounterEx count={count} />
      <hr />
      <FetchEx />
      <hr />
      <RefExample />
    </div>
  );
}
CounterEx.propTypes = {
  count: PropTypes.number,
};

export default App;
