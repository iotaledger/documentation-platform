import React from 'react';

class TreeMenu extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (<div className="tree-menu">
  <h3 className="tree-menu__section-title">Introduction</h3>
  <ul className="tree-menu__section">
    <li className="tree-menu__section-item"><a href="#">The IOTA Token</a></li>
    <li className="tree-menu__section-item"><a href="#">The MainNet</a></li>
    <li className="tree-menu__section-item"><a href="#">Research Questions</a></li>
  </ul>
  <h3 className="tree-menu__section-title">Seeds, Private Keys & Accounts</h3>
  <ul className="tree-menu__section">
    <li className="tree-menu__section-item"><a href="#">Seeds</a></li>
    <li className="tree-menu__section-item"><a href="#">Private Keys & Accounts</a></li>
    <li className="tree-menu__section-item"><a href="#">Multisignature</a></li>
  </ul>
  <h3 className="tree-menu__section-title">Transactions</h3>
  <ul className="tree-menu__section">
    <li className="tree-menu__section-item"><a href="#">Anatomy of a transaction</a></li>
    <li className="tree-menu__section-item"><a href="#">Transaction lifecycle</a></li>
    <li className="tree-menu__section-item"><a href="#">Bundle Construction</a></li>
    <li className="tree-menu__section-item"><a href="#">Making a transaction</a></li>
    <li className="tree-menu__section-item"><a href="#">Querying the Tangle</a></li>
  </ul>
  <h3 className="tree-menu__section-title tree-menu__section-title--selected">IOTA Networks</h3>
  <ul className="tree-menu__section">
    <li className="tree-menu__section-item"><a href="#">Mainnet</a></li>
    <li className="tree-menu__section-item"><a href="#">DevNet</a></li>
    <li className="tree-menu__section-item"><a href="#">SpamNet</a></li>
  </ul>
</div>)
  
  }
}
 export default TreeMenu
