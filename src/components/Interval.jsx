import { connect } from 'react-redux'
import { Card } from './Card'
import './Interval.css'

export const component = ({ min, max }) => {
  return (
    <Card title="Interval" color="red">
      <div className="interval">
        <div className="interval__section">
          <p>Min</p>
          <input type="number" value={min} readOnly />
        </div>
        <div className="interval__section">
          <p>Max</p>
          <input type="number" value={max} readOnly />
        </div>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  ...state.numbers
})

export const Interval = connect(mapStateToProps)(component)
