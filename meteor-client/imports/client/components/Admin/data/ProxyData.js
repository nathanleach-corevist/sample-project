export const inputs = [
  { text: "User ID", type: "text", defaultValue: ""},
  { text: "User Password", type: "text", defaultValue: ""},
]

export const select = {
  type: "select",
  text: "User Status",
  options: [
    {value: "", text: "Optional"},
    {value: "en_US", text: "English"},
    {value: "de_DE", text: "German"},
  ],
  emptyMessage: "Please select state",
  errorMessage: "Please select state",
  placeholder: "Choose Your State",
  placeholderTitle: "Your State",
}
