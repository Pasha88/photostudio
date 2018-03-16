import React, {Component} from 'react'
import './style.css'
import PhotoStudio from "../PhotoStudio";

export default class photoStudioList extends Component {

    constructor(props) {
      super(props)

      this.state = {
        photoStudiosState: props.photoStudios
      }
    }
    componentWillReceiveProps(nextProps, nextState){
      this.props.photoStudios // old value
      nextProps.photoStudios // new value

      this.setState({photoStudiosState:  nextProps.photoStudios}, function () {
        //  console.log(this.state.photoStudiosState);
      });
    }

  render() {
    const photoStudioElements = this.state.photoStudiosState.map((photoStudio, index) =>
      <li key = {photoStudio.id} data-price={photoStudio.price} className="photoStudio-list__li">
        <PhotoStudio photoStudio = {photoStudio} />
      </li>
    )
    return (
      <ul className="photoStudios-ul">
        {photoStudioElements}
      </ul>
    )
  }

}