import './index.css'
import {Component} from 'react'

class Stopwatch extends Component {
  state = {
    stopwatchRunning: false,
    mins: 0,
    secs: 0,
    milliSecs: 0,
  }

  componentDidMount() {
    setInterval(this.everySec, 10)
  }

  everySec = () => {
    const {secs, stopwatchRunning, milliSecs} = this.state

    if (stopwatchRunning) {
      if (secs === 59 && milliSecs === 99) {
        this.setState(prev => ({
          mins: prev.mins + 1,
          secs: 0,
          milliSecs: 0,
        }))
      } else if (milliSecs === 99) {
        this.setState(prev => ({
          secs: prev.secs + 1,
          milliSecs: 0,
        }))
      } else {
        this.setState(prev => ({
          milliSecs: prev.milliSecs + 1,
        }))
      }
    }
  }

  pauseTimer = () => {
    this.setState({
      stopwatchRunning: false,
    })
  }

  startTimer = () => {
    this.setState({
      stopwatchRunning: true,
    })
  }

  resetTimer = () => {
    this.setState({
      mins: 0,
      secs: 0,
      stopwatchRunning: false,
      milliSecs: 0,
    })
  }

  render() {
    const {mins, secs, milliSecs} = this.state
    const displayMins = mins > 9 ? mins : `0${mins}`
    const displaySecs = secs > 9 ? secs : `0${secs}`
    const displayMilliSecs = milliSecs > 9 ? milliSecs : `0${milliSecs}`
    return (
      <div className="bg-container">
        <div className="stop-watch-main-continer">
          <h1>Stopwatch</h1>
          <div className="stop-watch">
            <p className="timer-heading">
              <img
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="stopwatch"
                className="timer-icon"
              />
              Timer
            </p>
            <h1 className="showing-time">
              {displayMins}:{displaySecs}
              <span className="milli-secs">:{displayMilliSecs}</span>
            </h1>
            <div className="buttons-container">
              <button
                type="button"
                className="btn start-btn"
                onClick={this.startTimer}
              >
                Start
              </button>
              <button
                type="button"
                className="btn stop-btn"
                onClick={this.pauseTimer}
              >
                Stop
              </button>
              <button
                type="button"
                className="btn reset-btn"
                onClick={this.resetTimer}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
