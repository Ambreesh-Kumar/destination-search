// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationItem} = props
  const {name, imgUrl} = destinationItem
  return (
    <div>
      <li className="destination-main-container">
        <img src={imgUrl} alt={name} className="image" />
        <p className="destinationName">{name}</p>
      </li>
    </div>
  )
}
export default DestinationItem
