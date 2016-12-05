export const pwResetSelect = {
  type: "select",
  text: "Reset Password Question",
  options: [
    {value: "0", text: "What is the name of your first pet?"},
    {value: "1", text: "What is your mother's maiden name?"},
    {value: "2", text: "What is the name of the city/village where you were born?"},
    {value: "3", text: "What is the name of your first niece/nephew?"}
  ],
  emptyMessage: "Please select state",
  errorMessage: "Please select state",
  placeholder: "Choose Your State",
  placeholderTitle: "Your State",
}

export const pwResetInputs = [
  { text: "Reset Password Answer", type: "text", defaultValue: "" },
  { text: "Answer Confirmation", type: "text", defaultValue: "" },
]
