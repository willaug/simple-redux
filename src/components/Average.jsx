import { connect } from 'react-redux'
import { Card } from './Card'

const component = ({ min, max }) => {
  return (
    <Card title="arithmetic average" color="green">
      <p>{ (min + max) / 2 }</p>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  ...state.numbers
})

export const Average = connect(mapStateToProps)(component)
