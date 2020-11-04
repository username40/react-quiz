import React, { Component } from 'react'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import classes from './Quiz.css'

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        id: 1,
        question: 'Какого цвета небо?',
        rightAnswerId: 2,
        answers: [
          { text: 'Черный', id: 1 },
          { text: 'Синий', id: 2 },
          { text: 'Красный', id: 3 },
          { text: 'Зеленый', id: 4 }
        ]
      },
      {
        id: 2,
        question: 'В каком году основали Санкт-Петербург?',
        rightAnswerId: 4,
        answers: [
          { text: '1700', id: 1 },
          { text: '1701', id: 2 },
          { text: '1702', id: 3 },
          { text: '1703', id: 4 }
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('onAnswerClickHandler -> answerId', answerId);

    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Ответьте на все вопросы</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    )
  }
}

export default Quiz