import { connect } from 'react-redux'
import { incrementMax, incrementMin } from '../store/numbersReducer'
import { Card } from './Card'
import './Interval.css'

export const component = ({ min, max, changeMin, changeMax }) => {
  return (
    <Card title="Interval" color="red">
      <div className="interval">
        <div className="interval__section">
          <p>Min</p>
          <input 
            type="number" 
            value={min}
            onChange={(e) => changeMin(e.target.value) }
          />
        </div>
        <div className="interval__section">
          <p>Max</p>
          <input 
            type="number" 
            value={max}
            onChange={(e) => changeMax(e.target.value) }
          />
        </div>
      </div>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  ...state.numbers
})

const mapDispatchToProps = (dispatch) => ({
  changeMin(value) { dispatch(incrementMin(value)) },
  changeMax(value) { dispatch(incrementMax(value)) }
})

export const Interval = connect(mapStateToProps, mapDispatchToProps)(component)
