import React, { useState } from 'react'

import css from './App.module.css';
import SectionFeedback from 'components/SectionFeedback/SectionFeedback';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import StatisticsFeedback from 'components/StatisticsFeedback/StatisticsFeedback';
import Notification from 'components/Notification/Notification'


export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const handleIncrement = (option) => {
    switch (option) {
      case 'good':
        setGood(p => p + 1)
        break;
      case 'neutral':
        setNeutral(p => p + 1)
        break;
      case 'bad':
        setBad(p => p + 1)
        break
      default:
        console.log('No selection');
        break;
    }  
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => (countTotalFeedback() > 0 ? Math.round((good * 100) / countTotalFeedback()) : 0);


  const options = Object.keys({good, neutral, bad});
  const total = countTotalFeedback();
  return (
    <div className={css.container}>
      <SectionFeedback title='please leave feedback'>
        <FeedbackOptions options={options} handleIncrement={handleIncrement} />
        </SectionFeedback>
        
        <SectionFeedback title='statistics'>
          {total <= 0 ? (<Notification message='There is no feedback' />) : (<StatisticsFeedback good={good} neutral={neutral} bad={bad} total={total} positivePercentage={countPositiveFeedbackPercentage} /> )}
        </SectionFeedback>
      </div>
  )
}

