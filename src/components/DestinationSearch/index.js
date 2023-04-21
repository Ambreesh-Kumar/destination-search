// Write your code here
import {Component} from 'react'
import './index.css'
import DestinationItem from '../DestinationItem/index'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {destinationsList} = this.props
    const {searchInput} = this.state

    const searchResult = destinationsList.filter(eachObject =>
      eachObject.name.includes(searchInput),
    )

    return (
      <div className="main-container">
        <h1 className="main-heading">Destination Search</h1>
        <input
          type="search"
          placeholder="Search"
          className="inputEl"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <ul className="unorderedList">
          {searchResult.map(eachItem => (
            <DestinationItem key={eachItem.id} destinationItem={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}
export default DestinationSearch
