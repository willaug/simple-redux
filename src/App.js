import { Average } from './components/Average';
import { Interval } from './components/Interval';
import { Random } from './components/Random';
import { Sum } from './components/Sum';

function App() {
  return (
    <div>
      <h1 className="mb-40">react & redux</h1>
      <div className="row">
        <div className="grid-area-3">
          <Interval></Interval>
        </div>
      </div>
      <div className="row">
        <Sum></Sum>
        <Average></Average>
        <Random></Random>
      </div>
    </div>
  );
}

export default App;
