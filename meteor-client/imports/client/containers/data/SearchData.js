export const searchOptions = {
  "PURCHASING": [
    {name: "Sold-To Number", value: "SOLD_TO", desc: ""},
    {name: "Ship-To number", value: "SHIP_TO", desc: ""},
    {name: "Open Orders", value: "OPEN_ORDERS", desc: ""},
    {name: "Material", value: "MATERIAL", desc: ""},
    {name: "PO Number", value: "PO_NUMBER", desc: ""},
    {name: "Order Number", value: "ORDER_NUMBER", desc: ""},
    {name: "Delivery Number", value: "DELIVERY_NUMBER", desc: ""},
    {name: "Invoice Number", value: "INVOICE_NUMBER", desc: ""},
    {name: "Material ETA", value: "ETA", desc: ""},
    {name: "Back Orders", value: "BACK_ORDERS", desc: ""},
  ],
  "INVOICING": [
    {name: "Payer Number", value: "PAYER_NUMBER", desc: ""},
    {name: "Material", value: "MATERIAL", desc: ""},
    {name: "PO Number", value: "PO_NUMBER", desc: ""},
    {name: "Order Number", value: "ORDER_NUMBER", desc: ""},
    {name: "Delivery Number", value: "DELIVERY_NUMBER", desc: ""},
    {name: "Invoice Number", value: "INVOICE_NUMBER", desc: ""},
  ]
}
export const searchFormInputs = {
  "SOLD_TO": {
    input: {label: "Sold-to", value: "sold_to", length: "10", popup: true},
    date: [
      { value: "", text: "Please Select" },
      { value: "Last_7d", text: "Last 7 days" },
      { value: "Last_30d", text: "Last 30 days" },
      { value: "Last_90d", text: "Last 90 days" },
    ],
    shipStatus: [
      {value: "ALL", text: "All"},
      {value: "NSHP", text: "Not yet shipped"},
      {value: "SHIP", text: "Shipped"},
    ],
    itemData: true},
  "SHIP_TO": {
    input: {label: "Ship-to", value: "ship_to", length: "10", popup: true},
    date: [
      { value: "", text: "Please Select" },
      { value: "Last_7d", text: "Last 7 days" },
      { value: "Last_30d", text: "Last 30 days" },
      { value: "Last_90d", text: "Last 90 days" },
    ],
    shipStatus: [
      {value: "ALL", text: "All"},
      {value: "NSHP", text: "Not yet shipped"},
      {value: "SHIP", text: "Shipped"},
    ],
    itemData: true},
  "OPEN_ORDERS": {
    input: {label: "Sold-to", value: "sold_to", length: "10", popup: true},
    itemData: true
  },
  "MATERIAL": {
    input: {label: "Material", value: "material", length: "18", popup: true},
    date: [
      { value: "", text: "Please Select" },
      { value: "Last_7d", text: "Last 7 days" },
      { value: "Last_30d", text: "Last 30 days" },
      { value: "Last_90d", text: "Last 90 days" },
    ],
    shipStatus: [
      {value: "ALL", text: "All"},
      {value: "NSHP", text: "Not yet shipped"},
      {value: "SHIP", text: "Shipped"},
    ],
    itemData: false},
  "PO_NUMBER": {
    input: {label: "PO Number", value: "po", length: "35", popup: false},
    itemData: true
  },
  "ORDER_NUMBER": {
    input: {label: "Order Number", value: "doc", length: "10", popup: false},
    itemData: false
  },
  "DELIVERY_NUMBER": {
    input: {label: "Delivery Number", value: "delivery", length: "10", popup: false},
    itemData: true
  },
  "INVOICE_NUMBER": {
    input: {label: "Invoice Number", value: "invoice", length: "10", popup: false},
    itemData: true
  },
  "ETA": {
    input: {label: "Sold-to", value: "sold_to", length: "10", popup: true},
    itemData: false,
    desc:"This search retrieves all open orders and orders that have shipped within the past 10 days for the entered material.",
    secondInput: {
      input: {label: "Material", value: "material", length: "18", popup: true}
    }},
  "BACK_ORDERS": {
    input: {label: "Sold-to", value: "sold_to", length: "10", popup: true},
    itemData: true
  },
  "PAYER_NUMBER": {
    input: {label: "Payer", value: "payer_number", length: "10", popup: true},
    date: [
      { value: "", text: "Please Select" },
      { value: "Last_7d", text: "Last 7 days" },
      { value: "Last_30d", text: "Last 30 days" },
      { value: "Last_90d", text: "Last 90 days" },
    ],
    itemData: true
  },
}
