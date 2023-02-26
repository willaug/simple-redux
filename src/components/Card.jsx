import './Card.css'

export const Card = ({ title, color, children }) => {
  return (
    <div className={`card ${color || ''}`}>
      
      <div className="card__header">
        <p className="card__header_title">{ title }</p>
      </div>

      <div className="card__children">
        { children }
      </div>
    
    </div>
  )
}
