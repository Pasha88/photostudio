import React, { PropTypes, Component } from 'react'
import { Icon, Input, AutoComplete } from 'antd';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

export default class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      word: this.props.word,
      dataSource: []
    }

    this.onSelect = this.onSelect.bind(this)
  }

  /*Поисковое слово при наборе*/
  handleSearch = (value) => {
    this.setState({
      dataSource: !value ? [] : [
        value
      ],
    });
    this.props.setSearchWord(value)
  }

  /*Поисковое слово при выборе из выпадающего списка*/
  onSelect(value) {
    this.props.setSearchWord(value)
  }

  render() {
    const { dataSource } = this.state;

    return (
      <AutoComplete
        className="certain-category-search"
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={false}
        dropdownStyle={{ width: 300 }}
        size="large"
        style={{ width: '100%' }}
        dataSource={dataSource}
        onSelect={this.onSelect}
        onSearch={this.handleSearch}
        optionLabelProp="value"
      >
        <Input prefix={<Icon type="search" className="certain-category-icon" />} />
      </AutoComplete>
    )
  }
}

SearchBar.propTypes = {

}
