import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

class DurationsBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDuration: this.props.activeDuration,
    };
    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    if ( name !== this.state.activeDuration) {
      this.props.onDurationClick(name);
      this.setState({ activeDuration: name });
    }
  }

  render() {
    const { activeDuration } = this.state

    return (
      <div>
        <Menu pointing secondary color="purple">
          <Menu.Menu position="right">
            <Menu.Item id="white-font" name="Day" active={activeDuration === 'Day'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name="Week" active={activeDuration === 'Week'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name="Month" active={activeDuration === 'Month'} onClick={this.handleItemClick} />
            <Menu.Item id="white-font" name="All Time" active={activeDuration === 'All Time'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu>
      </div>
    )
  }
}

export default DurationsBar;