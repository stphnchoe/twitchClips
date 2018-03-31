import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Input } from 'semantic-ui-react';

class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu inverted id="navbar-menu">
          <Menu.Item name='home' as={Link} to='/' icon='home' />
          <img src="https://cdn1.iconfinder.com/data/icons/simple-icons/256/twitch-256-black.png" alt="twitch logo" height="50px"/>
          <span className="navbar-clips-header">Twitch Clips</span>
          <Menu.Item />
          <Menu.Item name='Browse' onClick={this.handleItemClick} as={Link} to='/browse' />
          <Menu.Menu position='right'>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Item name='Login' onClick={this.handleItemClick} />
            <Menu.Item name='Sign Up' onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default NavBar;
