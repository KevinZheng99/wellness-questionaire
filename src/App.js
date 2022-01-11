import Form from "./components/Form/Form";

import classes from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={classes.title}>Wellness Questionaire</h1>
      <Form />
    </div>
  );
}

export default App;
