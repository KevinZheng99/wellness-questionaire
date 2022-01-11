import React, { Fragment, useState } from "react";

import { questionaire } from "../../config";
import classes from "./Form.module.css";
import YourAnswers from "./YourAnswers";

export default function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

  function displayBack(event) {
    event.preventDefault();
    document.querySelectorAll(".answer").forEach((answer) => {
      if (answer.checked) {
        setUserAnswers((myArray) => [...myArray, answer.value]);
      }
    });
    setIsSubmitted(true);
  }

  return (
    <Fragment>
      {!isSubmitted ? (
        <form className={classes.form} onSubmit={displayBack}>
          {questionaire.map((question) => {
            return (
              <div className={classes["form-question"]} key={Math.random()}>
                <h3>{question.question}</h3>
                {question.answers.map((answer) => (
                  <div key={Math.random()}>
                    <input
                      className="answer"
                      type={question.type}
                      id={answer}
                      name={question.name}
                      value={answer}
                      required
                    />
                    <label className="question" htmlFor={answer}>
                      {answer}
                    </label>
                  </div>
                ))}
              </div>
            );
          })}
          <button className={classes.button} type="submit">
            Submit
          </button>
        </form>
      ) : (
        <YourAnswers userAnswers={userAnswers} questionaire={questionaire} />
      )}
    </Fragment>
  );
}
