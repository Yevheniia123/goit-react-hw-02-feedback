import React, { Component } from 'react';
import Statistics from './statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import SectionTitle from './SectionTitle/SectionTitle';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  countNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  countBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };
  countTotalFeedback = () => {
    let values = Object.values(this.state).reduce(
      (accumulator, currentValue) => accumulator + currentValue,
    );
    return values;
  };
  countPositiveFeedbackPercentage() {
    let positive = this.state.good * 100;
    return positive;
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <SectionTitle title="Please leave feedback">
          <FeedbackOptions
            countGood={this.countGood}
            countNeutral={this.countNeutral}
            countBad={this.countBad}
          />
        </SectionTitle>

        <SectionTitle title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            countTotalFeedback={this.countTotalFeedback()}
            countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage()}
          />
        </SectionTitle>
      </div>
    );
  }
}
export default App;
