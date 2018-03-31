import React from 'react';


const ClipViewer = ({ video }) => (
  <div className="videoWrapper">
    <iframe src={video.embed_url} height="480px" width="90%" align="middle" frameBorder='0' scrolling='no' allowFullScreen='true' />
  </div>
);

export default ClipViewer;
