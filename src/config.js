export const questionaire = [
  {
    question: "How often do you feel stressed",
    answers: [
      "All of the time",
      "Most of the time",
      "Some of the time",
      "Rarely",
      "Never",
    ],
    type: "radio",
    name: "stress_level",
  },
  {
    question: "Do you exercise and how many times per week",
    answers: ["0", "1-3", "4 or more"],
    type: "radio",
    name: "exercise",
  },
  {
    question:
      "How many cups of coffe or caffeinated beverages do you normally consume daily?",
    answers: ["0", "1-3", "4-6", "7 or more"],
    type: "radio",
    name: "coffee",
  },
  {
    question: "How many 8 oz. glasses of water do you normally drink daily?",
    answers: ["0", "3-6", "6-8", "9 or more"],
    type: "radio",
    name: "water",
  },
  {
    question: "Do you usually:",
    answers: ["Eat out", "Cook at home", "Both"],
    type: "radio",
    name: "food",
  },
];
