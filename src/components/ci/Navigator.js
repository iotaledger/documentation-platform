import React from 'react'

class Navigator extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<section className="navigator">
   <button className="navigator__back">
     <div className="navigator__label">Prev</div>
     <span className="navigator__title">Querying the Tangle</span>
   </button>
   <button className="navigator__next">
     <div className="navigator__label">Next</div>
     <span className="navigator__title">Mainnet</span>
   </button>
</section>)

  }
}
 export default Navigator
