export const userStatusSelect = {
  type: "select",
  text: "User Status",
  options: [
    {value: "", text: "n/a"},
    {value: "inactive", text: "Inactive"},
    {value: "incomplete", text: "Incomplete"},
  ],
  emptyMessage: "Please select state",
  errorMessage: "Please select state",
  placeholder: "Choose Your State",
  placeholderTitle: "Your State",
}
export const roleSelect = {
  type: "select",
  text: "With Role",
  options: [
    {value: "", text: "n/a"},
    {value: "6", text: "Admin"},
    {value: "1", text: "All but Admin"},
    {value: "9", text: "Change Order"},
    {value: "2", text: "Create Order"},
    {value: "8", text: "Order Requester"},
    {value: "7", text: "Pay Invoices"},
    {value: "4", text: "View Invoice"},
    {value: "5", text: "View Open Items"},
    {value: "3", text: "View Order"},
  ],
  emptyMessage: "Please select state",
  errorMessage: "Please select state",
  placeholder: "Choose Your State",
  placeholderTitle: "Your State",
}

export const inputs = [
  { text: "User ID", type: "text", defaultValue: "" },
  { text: "Email Address", type: "text", defaultValue: "" },
  { text: "Last Name", type: "text", defaultValue: "" },
  { text: "With Sold-To", type: "text", defaultValue: "" },
  { text: "With Ship-To", type: "text", defaultValue: "" },
  { text: "Maintained by Me", type: "checkbox", defaultValue: "" },
]
