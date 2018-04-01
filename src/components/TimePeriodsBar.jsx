import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class TimePeriodsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: 'Week',
    }
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    if ( name !== this.state.activeItem) {
      this.props.onDurationClick(name);
      this.setState({ activeItem: name })
    }
  }

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu pointing secondary color='purple'>
          <Menu.Menu position='right'>
            <Menu.Item id="white-font" name='Day' active={activeItem === 'Day'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name='Week' active={activeItem === 'Week'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name='Month' active={activeItem === 'Month'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name='All Time' active={activeItem === 'All Time'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default TimePeriodsBar;