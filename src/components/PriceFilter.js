import React, { PropTypes, Component } from 'react'
import ReactDOM from 'react-dom';
import {Slider} from 'antd'
import { InputNumber } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

export default class PriceFilter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      less: this.props.less,
      more: this.props.more
    }

    this.handleLessChange = this.handleLessChange.bind(this)
    this.handleMoreChange = this.handleMoreChange.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
  }

  /*изменения значения поля больше*/
  handleMoreChange(value) {
    this.props.setMore(value)
  }

  /*изменения значения поля меньше*/
  handleLessChange(value) {
    this.props.setLess(value)
  }

  /*Изменение и фиксация значений для слайдера*/
  handleSliderChange(value) {
    this.props.setMore(value[0])
    this.props.setLess(value[1])
  }

  render() {
    const {less, more} = this.props

    return <div className='priceFilter'>
      Стоимость:
      <InputNumber min={1} max={2500} value={more} defaultValue={this.state.more} onChange={this.handleMoreChange} />
      -
      <InputNumber min={1} max={2500} value={less} defaultValue={this.state.less} onChange={this.handleLessChange} />
      <Slider step={1} range defaultValue={[1, 2500]}  min={1} max={2500} onChange={this.handleSliderChange}/>
    </div>
  }
}

PriceFilter.propTypes = {
  // year: React.PropTypes.number.isRequired,
  // photos: React.PropTypes.array.isRequired,
  // setYear: React.PropTypes.func.isRequired
}
