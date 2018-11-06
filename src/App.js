import React, { Component } from 'react';
import './App.css';

const wellStyles = { maxWidth: 400, margin: '10px auto' };
const inputStyle = { margin: '0.5em' };

class App extends Component {
  constructor(props, context) {
    super(props, context);

    this.onMinChange = this.onMinChange.bind(this);
    this.onMaxChange = this.onMaxChange.bind(this);
    this.onLaunch = this.onLaunch.bind(this);

    this.state = {
      min: '',
      max: ''
    };
  }

  validate() {
    try {
      const { min, max } = this.state;
      if (typeof min !== 'number') {
        throw new Error('min should be a number');
      }
      if (typeof max !== 'number') {
        throw new Error('max should be a number');
      }
      if (min > max) {
        throw new Error('max should be greater than min');
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  }

  getIntValue(e) {
    return parseInt(e.target.value);
  }
  onMinChange(e) {
    this.setState({ min: this.getIntValue(e) });
  }
  onMaxChange(e) {
    this.setState({ max: this.getIntValue(e) });
  }
  onLaunch(e) {
    e.preventDefault();
    this.validate();
    const { min, max } = this.state;
    fetch(`http://localhost:9000/filter?min=${min}&max=${max}`, {
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      headers: new Headers({
        'Content-Type': 'text/plain'
      })
    });
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-6">
            <form>
              <div className="form-group">
                <p>Searching for numbers that matches :</p>
                <p>x % 2 == x % 3</p>
                <p>Look for numbers between :</p>
                <input
                  type="number"
                  value={this.state.min}
                  style={inputStyle}
                  placeholder="Enter minimum value"
                  onChange={this.onMinChange}
                />
                <label> and </label>
                <input
                  type="number"
                  value={this.state.max}
                  style={inputStyle}
                  placeholder="Enter maximum value"
                  onChange={this.onMaxChange}
                />
                <div className="well" style={wellStyles}>
                  <button
                    className="btn btn-primary btn-lg btn-block"
                    onClick={this.onLaunch}
                  >
                    Envoyer
                  </button>
                </div>
                <div className="alert alert-danger" hidden={!this.state.error}>
                  {this.state.error}
                </div>
              </div>
            </form>
          </div>
          <div className="col-6">
            <p>Numbers :</p>
            <p>{window.state.numbers.join(', ')}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
