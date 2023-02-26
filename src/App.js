import { Card } from './components/Card';
import { Interval } from './components/Interval';

function App() {
  return (
    <div>
      <h1 className="mb-40">react & redux</h1>
      <div className="row">
        <div className="grid-area-2">
          <Interval></Interval>
        </div>
      </div>
      <div className="row">
        <Card title="#1" color="red">
          description...
        </Card>
        <Card title="#2" color="green">
          description...
        </Card>
      </div>
    </div>
  );
}

export default App;
