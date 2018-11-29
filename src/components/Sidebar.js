import React from 'react'
import styled, { css } from 'styled-components'
import { SiteData, Link, withRouter } from 'react-static'
import ClickOutside from 'components/ClickOutside'
import Search from 'components/Search'
import Dropdown from 'components/Dropdown'
import { getVersion, getProjectName } from 'utils/helpers'

const Menu = ({ items }) => (
  <div className="list">
    {items.map(({ name, link, children }) => (
      <div key={name + link} className="item">
        {link ? (
          <Link to={link} exact activeClassName="active">
            {name}
          </Link>
        ) : (
          <div className="name">{name}</div>
        )}
        {children ? <Menu items={children} /> : null}
      </div>
    ))}
  </div>
)

class Sidebar extends React.Component {
  state = {
    isOpen: false,
  }

  toggle(isOpen) {
    this.setState({ isOpen })
  }

  render () {
    const { children, location } = this.props
    const { isOpen } = this.state
    const project = location.pathname !== '/404' && getProjectName(location.pathname);
    const version = location.pathname !== '/404' && getVersion(location.pathname);

    if (!project || !version) return <div/>

    if (typeof document !== 'undefined') {
      const target = document.querySelector('span.search-keyword');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      }
    }

    return (
      <SiteData
        render={({ menu }) => (
          <SidebarStyles className="sidebar" isOpen={isOpen}>
            <Search />
            <ClickOutside
              onClickOutside={() => {
                if (isOpen) {
                  this.setState({
                    isOpen: false,
                  })
                }
              }}
            >
              <div className="sidebar">
                <button
                  className="toggle"
                  onClick={() => {
                    this.toggle(!isOpen)
                  }}
                >
                  ⇤
                </button>
                <div className="menu-header">
                  <Link to="/" className="back">
                    ← Back to Site
                  </Link>
                  <Dropdown version={version} items={Object.keys(menu[project].versions)}/>
                </div>
                <div className="scroll">
                  <Menu items={menu[project].versions[version]} />
                </div>
              </div>
            </ClickOutside>
            <div className="content">{children}</div>
          </SidebarStyles>
        )}
      />
    )
  }
}

export default withRouter(Sidebar);

const breakpoint = 800
const sidebarBackground = '#f7f7f7'

const SidebarStyles = styled.div`
  position: relative;
  width: 100%;
  max-width: 100%;
  padding-left: 300px;
  margin: 0 auto;
  transition: all 0.2s ease-out;

  @media screen and (max-width: ${breakpoint}px) {
    padding-left: 0px;
  }

  .sidebar {
    z-index: 1;
    position: fixed;
    display: flex;
    flex-direction: column;
    top: 0;
    left: 0;
    height: 100%;
    width: 300px;
    max-width: calc(100% - 45px);
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    -webkit-overflow-scrolling: touch;
    background: ${sidebarBackground};
    transition: all 0.2s ease-out;

    @media screen and (max-width: ${breakpoint}px) {
      transform: translateX(-100%);
      ${props =>
    props.isOpen &&
        css`
          box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
          transform: translateX(0%);
        `};
    }

    .toggle {
      appearance: none;
      position: absolute;
      top: 5px;
      right: -6px;
      transform: translateX(100%);
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      background: ${sidebarBackground};
      border: 1px solid rgba(0, 0, 0, 0.1);
      color: #555;
      font-size: 1.2rem;
      border-radius: 3px;
      cursor: pointer;
      opacity: 0;
      pointer-events: none;
      transition: all 0.2s ease-out;
      transform-origin: center;
      outline: none;

      @media screen and (max-width: ${breakpoint}px) {
        opacity: 1;
        pointer-events: all;
      }

      ${props =>
    !props.isOpen &&
        css`
          transform: translateX(100%) rotate(180deg);
        `};
    }

    .menu-header {
      flex: 0 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.5rem 0.7rem;
      border-bottom: 3px solid rgba(0, 0, 0, 0.1);

      .back {
        font-weight: bold;
      }

      .version {
        font-size: 0.9rem;
        font-weight: bold;
        opacity: 0.3;
      }
    }

    .scroll {
      flex: 1 1 auto;
      overflow-y: auto;
      padding-bottom: 5rem;
    }

    .list {
      margin: 0;
      padding: 0;
      list-style-type: none;
      .list {
        padding-left: 1rem;
      }
    }

    .item {
      border-bottom: 1px solid rgba(0, 0, 0, 0.05);

      .name,
      a {
        display: block;
        padding: 0.5rem 0.7rem;
      }

      a {
        color: rgba(0, 0, 0, 0.8);

        &.active {
          font-weight: bold;
        }
      }

      .name {
        font-size: 0.8rem;
        text-transform: uppercase;
        font-weight: bold;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  .content {
    position: relative;
    z-index: 0;
    padding: 1rem 2.5rem;
  }
`
