export const navItems = [
  { text: 'Home', path: '/', desc: 'Home Page' },
  {
    text: 'Purchasing', path: '', desc: 'Purchasing Area',
    subNav: [
      {text: "Search for Orders", path: "/search/purchasing", desc: ""},
      {text: "Create Order", path: "/cart", desc: ""},
      {text: "Change Order", path: "/change-order", desc: ""},
      {text: "Display Quotes", path: "/quotes", desc: ""},
      {text: "Create Return", path: "/return", desc: ""},
    ]
  },
  {
    text: 'Invoicing', path: '', desc: 'Invoicing Area',
    subNav: [
      {text: "Search for Invoice", path: "/search/invoicing", desc: ""},
      {text: "Open Items", path: "/open-items", desc: ""},
      {text: "Pay Invoices", path: "/pay", desc: ""},
      {text: "Search for Payment", path: "/payments", desc: ""},
    ]
  },
  {
    text: 'Admin', path: '', desc: 'Administration area',
    subNav: [
      {text: "User Maintenance", path: "/maintenance/user", desc: ""},
      {text: "Role Maintenance", path: "/maintenance/role", desc: ""},
      {text: "Proxy Login", path: "/proxy", desc: ""},
      {text: "Monitoring", path: "/monitoring", desc: ""},
      {text: "Content Maintenance", path: "/maintenance/content", desc: ""},
      {text: "SAP Maintenance", path: "/maintenance/sap", desc: ""},
    ]
  },
]
