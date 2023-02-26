import { Card } from './Card'
import './Interval.css'

export const Interval = () => {
  return (
    <Card title="Interval" color="red">
      <div className="interval">
        <div className="interval__section">
          <p>Min</p>
          <input type="number" value={0} readOnly />
        </div>
        <div className="interval__section">
          <p>Max</p>
          <input type="number" value={100} readOnly />
        </div>
      </div>
    </Card>
  )
}
