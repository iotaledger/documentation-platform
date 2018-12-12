import React from 'react'

class Navigator extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nextTitle: '',
      nextUrl: '',
      previousTitle: '',
      previousUrl: ''
    }
    this.navigate = this.navigate.bind(this)
  }
  componentDidMount() {
    console.log(this.props.data)
  }
  navigate(direction) {
    alert('coming soon, please dont touch!')
  }
  render() {
    return (<section className="navigator">
   <button className="navigator__back" onClick={this.navigate}>
     <div className="navigator__label">Prev</div>
     <span className="navigator__title">Querying the Tangle</span>
   </button>
   <button className="navigator__next" onClick={this.navigate}>
     <div className="navigator__label">Next</div>
     <span className="navigator__title">Mainnet</span>
   </button>
</section>)

  }
}
 export default Navigator
