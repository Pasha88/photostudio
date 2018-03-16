import React, {Component} from 'react'
import PhotoStudioList from '../components/PhotoStudioList'
import items from '../studio.json'
import {Slider, Switch} from 'antd'
import { Layout, Menu, Icon } from 'antd'
import { Button } from 'antd'
import { Input, AutoComplete } from 'antd'
import { InputNumber } from 'antd'
import { Tag } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PriceFilter from '../components/PriceFilter'
import * as priceFilterActions from '../actions/priceFilterActions'
import PhotoStudio from '../components/PhotoStudio'


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      photoStudios: items.studios,
      sortStatus: null
    }

    this.handleLessMoreChange = this.handleLessMoreChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.handleLessMoreChange(nextProps["priceFilter"]["more"], nextProps["priceFilter"]["less"])
  }

  /*Фильтр по цене - больше, меньше*/
  handleLessMoreChange(valueMore, valueLess) {
    let arr = []

    this.setState({photoStudios: items.studios}, function () {
      arr = this.state.photoStudios.filter(item => (item.price <= valueLess) && (item.price >= valueMore))
      this.setState({
        photoStudios: arr,
        less: valueLess,
        more: valueMore
      }, function () {
        //console.log(this.state.photoStudios);
      });
    });
  }


  /*Сортируем перед загрузкой по убыванию // Sort Array Reverse Before Downloading*/
  componentWillMount() {
    let arr = []
    arr = this.directOrder()
    this.setState({
      sortStatus: false
    })

    this.setState({
      photoStudios: arr
    })
  }

  /*Прямой порядок сортировки для цены от меньшего к большему*/
  directOrder() {
    console.log(this.state.photoStudios)
    this.state.photoStudios.sort((a, b) => {
      return (a.price > b.price) ? 1 : ((b.price > a.price) ? -1 : 0)
    });
    return this.state.photoStudios;
  }

  /*Обратный порядок сортировки для цены от большего к меньшему*/
  reverseOrder() {
    this.state.photoStudios.sort((a, b) => {
      return (a.price < b.price) ? 1 : ((b.price < a.price) ? -1 : 0)
    });
    return this.state.photoStudios;
  }

  render() {
    const {priceFilter} = this.props
    const {setLess, setMore} = this.props.priceFilterActions
    const my_photoStudios = this.state.photoStudios

    return (
      <div className="container">
        <div className="jumbotron">
          <div className="row">
            <PriceFilter more={priceFilter.more} less={priceFilter.less} setLess={setLess} setMore={setMore}/>
          </div>
          <PhotoStudioList photoStudios={my_photoStudios}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    priceFilter: state.priceFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    priceFilterActions: bindActionCreators(priceFilterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)