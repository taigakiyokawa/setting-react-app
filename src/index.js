import React from 'react';
import ReactDOM from 'react-dom';

class Index extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Me</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Index />,
  document.getElementById('root')
);