import { connect } from 'react-redux'
import { Card } from './Card'

export const component = ({ min, max }) => {
  return (
    <Card title="sum" color="blue">
      <p>{ min + max }</p>
    </Card>
  )
}

const mapStateToProps = (state) => ({
  ...state.numbers
})

export const Sum = connect(mapStateToProps)(component)
