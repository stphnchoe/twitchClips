import React from 'react'
import { Menu } from 'semantic-ui-react'

const DurationsBar = (props) => {

  const handleItemClick = (e, { name }) => {
    props.onDurationClick(name);
  };

  return (
    <div>
      <Menu pointing secondary color="purple">
        <Menu.Menu position="right">
          <Menu.Item id="white-font" name="Day" active={props.activeDuration === 'Day'} onClick={handleItemClick} />
          <Menu.Item id="white-font" name="Week" active={props.activeDuration === 'Week'} onClick={handleItemClick} />
          <Menu.Item id="white-font" name="Month" active={props.activeDuration === 'Month'} onClick={handleItemClick} />
          <Menu.Item id="white-font" name="All Time" active={props.activeDuration === 'All Time'} onClick={handleItemClick} />
        </Menu.Menu>
      </Menu>
    </div>
  );
};


export default DurationsBar;
