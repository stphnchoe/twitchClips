import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class TimePeriodsBar extends Component {
  state = { activeItem: 'Week' }

  //TODO: ADD API CALL TO TWITCH ON CLICK
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary color='purple'>
          <Menu.Menu position='right'>
            <Menu.Item name='Day' active={activeItem === 'Day'} onClick={this.handleItemClick} />
            <Menu.Item name='Week' active={activeItem === 'Week'} onClick={this.handleItemClick} />
            <Menu.Item name='Month' active={activeItem === 'Month'} onClick={this.handleItemClick} />
            <Menu.Item name='All time' active={activeItem === 'All time'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default TimePeriodsBar;