import React, { Fragment } from "react";

import classes from "./YourAnswers.module.css";

export default function YourAnswers(props) {
  return (
    <div className={classes.container}>
      {props.userAnswers.map((answer, i) => {
        return (
          <Fragment key={Math.random()}>
            <h3 className={classes.questions}>
              {props.questionaire[i].question}
            </h3>
            <div className={classes.answers}>
              <strong>Your Answer:</strong> {answer}
            </div>
          </Fragment>
        );
      })}
    </div>
  );
}
