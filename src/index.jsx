import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      now: Date()
    };
  }

  tick() {
    this.setState((a, b) => ({
      now: Date()
    }));
  }

  componentDidMount() {
    this.timeerId = setInterval(() => {
      this.tick()
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timeerId)
  }

  render() {
    return (
      <span>{this.state.now}</span>
    );
  }
}

function Clocks() {
  return (
    <div>
      <Clock/><br/>
      <Clock/><br/>
      <Clock/>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Clocks/>,
  document.getElementById('root')
);
