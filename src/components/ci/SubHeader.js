import React from 'react'

class SubHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<section className="sub-header">
  <span className="sub-header__title">IOTA Basics</span>
  <section className="sub-header__body">
    <button className="arrow-button arrow-button--left"></button>
    <span className="sub-header__bottom-title">IOTA Networks</span>
    <button className="arrow-button arrow-button--right"></button>
  </section>
</section>)

  }
}
 export default SubHeader
