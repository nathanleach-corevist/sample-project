export const links = {
  availableOptions: [
    { text: "View Google Analytics", url: 'https://www.google.com/analytics/home'},
    { text: "View Web Site Survey Results - English", url: 'http://www.surveymonkey.com/sr.aspx?sm=USLtBmy5BZSEQ9L59cVTlabNSQjIL5E_2fq9sVejV36ic_3d'},
    { text: "View Web Site Survey Results - German", url: 'http://www.surveymonkey.com/sr.aspx?sm=USLtBmy5BZSEQ9L59cVTlabNSQjIL5E_2fq9sVejV36ic_3d'},
  ],
  userLists: [
    { text: "All Users", url: '/admin/monitoring?report=all_users'},
    { text: "All Users by Sold-to incl.Sales Area", url: '/admin/monitoring?report=all_users_by_sold_to_sales_area'},
    { text: "All Users by One Sold-to", url: '/admin/monitoring?report=all_users_by_one_sold_to'},
    { text: "Activated users who never logged in", url: '/admin/monitoring?report=users_never_logged_in'},
    { text: "Activated users who did not log in in a month", url: '/admin/monitoring?report=users_not_logged_in_lately&since=30'},
  ]
}
