import React, { PropTypes, Component } from 'react'
import { Layout, Tag } from 'antd'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

const { Header, Content, Footer } = Layout;

export default class PhotoStudio extends Component {

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const {photoStudio} = this.props

    return (
      <div className='photoStudioListView' style={{ maxWidth: 300, float: 'left' }}>
        <div className="containerImage" style={{ padding: 0, background: '#fff' }}>
          <div className="container-div" style={{ float: 'none', margin: '0' }}>
            <img src={ photoStudio.view }/>
            <Tag className="background-color-tag-blue" style={{ marginTop: '30px' }}>{photoStudio.price}</Tag>
            <Footer className="container-div-footer" style={{ margin: '0', textAlign: 'center' }}>
              <span> { photoStudio.name } </span>
            </Footer>
          </div>
        </div>
      </div>
    )
  }
}

PhotoStudio.propTypes = {

}
