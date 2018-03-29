import React from 'react';
import { Grid } from 'semantic-ui-react';
import ClipViewer from './ClipViewer';

const ClipsView = ({ video }) => (
  <Grid stretched columns={16}>
    <Grid.Column computer={3} tablet={1} mobile={1} />
    <Grid.Column computer={10} tablet={16} mobile={16}>
      <Grid.Row>
        <Grid.Column computer={13} tablet={16} mobile={16}>
          <ClipViewer video={video} />
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

export default ClipsView;
