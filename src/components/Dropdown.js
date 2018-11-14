import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-static'
import { getVersion } from 'utils/helpers'

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: props.version,
    };

    this.selectItem = this.selectItem.bind(this);
  }

  selectItem(e) {
    const newVersion = e.target.value
    const { location, history } = this.props;
    const currentVersion = location.pathname !== '/404' && getVersion(location.pathname)
    const newLink = location.pathname.replace(currentVersion, newVersion)
    history.push(newLink);
    this.setState({ selected: newVersion })
  }

  render() {
    const { items } = this.props;
    const { selected } = this.state;

    return (
      <DropdownWrapper>
        <Dropdownlist value={selected} onChange={this.selectItem}>
          {items.map(item => (
            <DropdownItem key={item} value={item}>
              {item}
            </DropdownItem>
          ))}
        </Dropdownlist>
      </DropdownWrapper>
    );
  }
}

export default withRouter(Dropdown);

const DropdownWrapper = styled.div`
  width: 100px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Dropdownlist = styled.select`
  position: absolute;
  background-color: #f0f6f8;
  padding: 5px 11px;
  z-index: 10;
  border: solid 1px #d8d8d8;
  border-top: none;
  margin-left: 18px;
  width: 86%;

  @media (max-width: 900px) {
    width: 88%;
  }

  @media (max-width: 768px) {
    width: 91%;
  }
`;

const DropdownItem = styled.option`
  list-style: none;
  text-align: left;
  line-height: 25px;
  color: rgba(78, 90, 97, 1);
  &:hover {
    cursor: pointer;
    color: #009fff;
  }
`;
