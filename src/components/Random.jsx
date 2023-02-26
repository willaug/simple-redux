import { connect } from 'react-redux'
import { Card } from './Card'

const getRandom = (min, max) => parseInt(Math.random() * (max - min)) + min

export const component = ({ min, max }) => {
  return (
    <Card title="random" color="purple">
      <p>{getRandom(min, max)}</p>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  ...state.numbers
})

export const Random = connect(mapStateToProps)(component)
