import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import TextInput from '../Forms/TextInput'
import Panel from '../Shared/Panel'

// const mapStateToProps = state => state

const form = reduxForm({
  form: 'userDetails',
  fields: ["userId", "createdBy", "createdOn", "changedBy", "changedOn", "firstName", "lastName", "email", "phone", "password", "passwordConfirm"],
  touchOnChange: true,
  validate(user) {
    var errors = {}
    if(!user.userId) errors.userId = 'Please enter a User ID.'
    if(!user.firstName) errors.firstName = 'Please enter a First Name.'
    if(!user.lastName) errors.lastName = 'Please enter a Last Name.'
    if(!user.email) errors.email = 'Please enter a Email.'
    if(!user.password) errors.password = 'Please enter a Password.'
    return errors
  }
})

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      fakeSaving: false,
      fakeSubmitted: null
    }
  }

  componentWillMount() {
    this.props.initializeForm({
      userId: '',
      createdBy: '',
      createdOn: '',
      changedBy: '',
      changedOn: '',
      firstName: '',
      lastName: '',
      email: 'test@test.com',
      phone: '',
      password: '',
      passwordConfirm: ''
    })
  }

  handleSubmit(data) {
    console.log("DATA SUBMITTED:", data);
    this.setState({fakeSaving: true, fakeSubmitted: data})
    setTimeout(() => this.setState({fakeSaving: false}), 2000)
  }

  render() {
    const {
      fields,
      handleSubmit,
      resetForm,
      submitting
    } = this.props
    const { fakeSaving, fakeSubmitted } = this.state
    console.log("submitting", submitting, fields);

    return(
      <div className="user-details">
        <Panel title="User Details">
          <div className="card-block">
            <form className="user-details_form clearfix" onSubmit={this.props.handleSubmit(this.handleSubmit.bind(this))}>
              <TextInput disabled={fakeSaving} field={fields.userId} id="userId" label="User ID:" />
              <TextInput disabled={fakeSaving} field={fields.createdBy} id="createdBy" label="Created By:" />
              <TextInput disabled={fakeSaving} field={fields.createdOn} id="createdOn" label="Created On:" />
              <TextInput disabled={fakeSaving} field={fields.changedBy} id="changedBy" label="Changed By:" />
              <TextInput disabled={fakeSaving} field={fields.changedOn} id="changedOn" label="Changed On:" />
              <TextInput disabled={fakeSaving} field={fields.firstName} id="firstName" label="First Name:" />
              <TextInput disabled={fakeSaving} field={fields.lastName} id="lastName" label="Last Name:" />
              <TextInput disabled={fakeSaving} field={fields.email} id="email" label="Email:" />
              <TextInput disabled={fakeSaving} field={fields.phone} id="phone" label="Phone:" />
              <TextInput disabled={fakeSaving} field={fields.password} id="password" label="Password:" />
              <TextInput disabled={fakeSaving} field={fields.passwordConfirm} id="passwordConfirm" label="Password Confirmation:" />
              {/*<fieldset className="form-group">
                <label className="input_label" htmlFor="userId">User ID:</label>
                <input type="text" placeholder="User ID" className="form-control" id="userId" defaultValue="" autoComplete="off" {...userId}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="Created By">Created By:</label>
                <input type="text" placeholder="Created By" className="form-control" id="Created By" defaultValue="" autoComplete="off" {...createdBy}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="createdOn">Created On:</label>
                <input type="text" placeholder="Created On" className="form-control" id="createdOn" defaultValue="" autoComplete="off" {...createdOn}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="changedBy">Changed By:</label>
                <input type="text" placeholder="Changed By" className="form-control" id="changedBy" defaultValue="" autoComplete="off" {...changedBy}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="changedOn">Changed On:</label>
                <input type="text" placeholder="Changed On" className="form-control" id="changedOn" defaultValue="" autoComplete="off" {...changedOn}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="firstName">First Name:</label>
                <input type="text" placeholder="First Name" className="form-control" id="firstName" defaultValue="" autoComplete="off" {...firstName}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="lastName">Last Name:</label>
                <input type="text" placeholder="Last Name" className="form-control" id="lastName" defaultValue="" autoComplete="off" {...lastName}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="email">Email:</label>
                <input type="text" placeholder="Email" className="form-control" id="email" defaultValue="" autoComplete="off" {...email}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="phone">Phone:</label>
                <input type="text" placeholder="Phone" className="form-control" id="phone" defaultValue="" autoComplete="off" {...phone}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="password">Password:</label>
                <input type="password" placeholder="Password" className="form-control" id="password" defaultValue="" autoComplete="off" {...password}/>
              </fieldset>
              <fieldset className="form-group">
                <label className="input_label" htmlFor="passwordConfirm">Password Confirmation:</label>
                <input type="password" placeholder="Password Confirmation" className="form-control" id="passwordConfirm" defaultValue="" autoComplete="off" {...passwordConfirm}/>
              </fieldset>*/}

              <div className="btn-group u-floatRight">
                <button className="btn btn-secondary" type="button" disabled={submitting} onClick={resetForm}>
                  Reset
                </button>
                <button className="btn btn-primary" type="submit" disabled={submitting}>
                  {submitting ? <i className="fa fa-cog fa-spin"/> : <i className="fa fa-paper-plane"/>} Submit
                </button>
              </div>
              {fakeSubmitted && <pre><code>{JSON.stringify(fakeSubmitted, null, 2)}</code></pre>}
            </form>
          </div>
        </Panel>
      </div>
    )
  }
}

export default form(UserDetails)
