import React, {Component} from 'react'
import PhotoStudioList from '../components/PhotoStudioList'
import items from '../studio.json'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PriceFilter from '../components/PriceFilter'
import SearchBar from '../components/SearchBar'
import * as priceFilterActions from '../actions/priceFilterActions'
import * as searchBarActions from '../actions/searchBarActions'
import { Row, Col } from 'antd';


class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      photoStudios: items.studios
    }

    this.handleLessMoreChange = this.handleLessMoreChange.bind(this)
    this.searchWord = this.searchWord.bind(this)
  }

  /*Чтобы одно не перебивало другое, Последовательно фильтруем*/
  componentWillReceiveProps(nextProps) {
    this.setState({photoStudios: items.studios}, function () {
      this.handleLessMoreChange(nextProps["priceFilter"]["more"], nextProps["priceFilter"]["less"], nextProps["searchBar"]["word"])
    });
  }

  /*Фильтр по цене - больше, меньше*/
  handleLessMoreChange(valueMore, valueLess, searchWord) {
    let arr = []

    this.setState({photoStudios: items.studios}, function () {
      arr = this.state.photoStudios.filter(item => (item.price <= valueLess) && (item.price >= valueMore))
      this.setState({
        photoStudios: arr,
        less: valueLess,
        more: valueMore
      }, function () {
        /*Если пустое слово, то фильтр общий передаем*/
        if(searchWord) {
          this.searchWord(searchWord)
        }
      });
    });
  }

  searchWord(value) {
    let arr = []

    arr = this.state.photoStudios.filter(item => (item.name === value))
    this.setState({
      photoStudios: arr
    }, function () {
      //console.log(this.state.photoStudios);
    });

  }


  /*Сортируем перед загрузкой по убыванию // Sort Array Reverse Before Downloading*/
  componentWillMount() {
    let arr = []
    arr = this.directOrder()

    this.setState({photoStudios: items.studios}, function () {
      arr = this.directOrder()
    });
  }

  /*Прямой порядок сортировки для цены от меньшего к большему*/
  directOrder() {
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
    const {searchBar} = this.props
    const {setLess, setMore} = this.props.priceFilterActions
    const {setSearchWord} = this.props.searchBarActions;

    const my_photoStudios = this.state.photoStudios

    return (
      <div>
        <Row>
          <Col span={16} className="main">
            <div className="app-main">
              <PhotoStudioList photoStudios={my_photoStudios}/>
            </div>
          </Col>
          <Col span={6} className="rigthBar">
            <Row className="searchBar-div">
              <Col span={18}>
                <SearchBar word={searchBar.word} setSearchWord={setSearchWord}/>
              </Col>
            </Row>
            <Row className="priceFilter-div">
              <Col span={18}>
                <PriceFilter more={priceFilter.more} less={priceFilter.less} setLess={setLess} setMore={setMore}/>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    priceFilter: state.priceFilter,
    searchBar: state.searchBar
  }
}

function mapDispatchToProps(dispatch) {
  return {
    priceFilterActions: bindActionCreators(priceFilterActions, dispatch),
    searchBarActions: bindActionCreators(searchBarActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)