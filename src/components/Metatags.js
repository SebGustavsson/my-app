import React from 'react';
import MetaTags from 'react-meta-tags';

class Metatags extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <MetaTags>
          <title>Sebastian Gustavsson</title>
          <meta name="description" content="Web developer." />
          <meta property="og:title" content="Web developer" />
          <meta property="og:image" content="../images/team_56.png" />
        </MetaTags>
      </div>
    )
  }
}

export default Metatags;
