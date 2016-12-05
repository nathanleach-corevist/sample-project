import React, { Component, PropTypes } from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Panel from '../Shared/Panel'
import Select from '../Forms/Select'

class ContentMaintenance extends Component {
  constructor(props) {
  	super(props)
  	this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render() {
    const timeHours = [
      { value: "00", text: "00 / 12 AM" },
      { value: "01", text: "01 / 1 AM" },
      { value: "02", text: "02 / 2 AM" },
      { value: "03", text: "03 / 3 AM" },
      { value: "04", text: "04 / 4 AM" },
      { value: "05", text: "05 / 5 AM" },
      { value: "06", text: "06 / 6 AM" },
      { value: "07", text: "07 / 7 AM" },
      { value: "08", text: "08 / 8 AM" },
      { value: "09", text: "09 / 9 AM" },
      { value: "10", text: "10 / 10 AM" },
      { value: "11", text: "11 / 11 AM" },
      { value: "12", text: "12 / 12 PM" },
      { value: "13", text: "13 / 1 PM" },
      { value: "14", text: "14 / 2 PM" },
      { value: "15", text: "15 / 3 PM" },
      { value: "16", text: "16 / 4 PM" },
      { value: "17", text: "17 / 5 PM" },
      { value: "18", text: "18 / 6 PM" },
      { value: "19", text: "19 / 7 PM" },
      { value: "20", text: "20 / 8 PM" },
      { value: "21", text: "21 / 9 PM" },
      { value: "22", text: "22 / 10 PM" },
      { value: "23", text: "23 / 11 PM" },
    ]
    const timeMins = [
      { value: "00", text: "00" },
      { value: "05", text: "05" },
      { value: "10", text: "10" },
      { value: "15", text: "15" },
      { value: "20", text: "20" },
      { value: "25", text: "25" },
      { value: "30", text: "30" },
      { value: "35", text: "35" },
      { value: "40", text: "40" },
      { value: "45", text: "45" },
      { value: "50", text: "50" },
      { value: "55", text: "55" },
    ]
    return(
      <div className="content-maintenance">
        <Panel title="Content Maintenance">
          <div className="card-block">
            <h5 className="card-title">News Content</h5>
            <p className="card-text text-muted"><i>The time zone of the displayed times is EST (US East Coast).</i></p>
          </div>
          <table className="content-maintenance__table table table-striped table-condensed">
            <thead>
              <tr>
                <th className="u-alignCenter">Text Block:</th>
                <th>Active From:</th>
                <th className="u-alignCenter">Deactivate:</th>
                <th>English:</th>
                <th>German:</th>
                <th className="u-alignCenter">Actions:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="checkbox u-alignCenter">
                    <label>
                      <input type="checkbox" id="blankCheckbox" value="option1"></input>
                    </label>
                  </div>
                </td>
                <td className="content-maintenance__schedule-inputs">
                  <fieldset className="content-maintenance__date-input form-group">
                    <div className="input-group input-group-sm">
                      <input className="form-control form-control-sm" maxLength="10" type="text" />
                      <span className="input-group-btn">
                        <a href="#" className="btn btn-secondary" onclick="new Lightbox.base('sold-to-search-popup', {returnField : 'sold_to_number'}); return false;">
                          <i className="fa fa-calendar" aria-hidden="true"></i>
                        </a>
                      </span>
                    </div>
                  </fieldset>
                  <div className="content-maintenance__time-selects clearfix">
                    <Select className="c-select form-control form-control-sm" options={timeHours} />
                    <Select className="c-select form-control form-control-sm" options={timeMins} />
                  </div>
                </td>
                <td>
                  <div className="checkbox u-alignCenter">
                    <label>
                      <input type="checkbox" id="blankCheckbox" value="option1"></input>
                    </label>
                  </div>
                </td>
                <td>
                  <fieldset className="form-group">
                    <textarea className="form-control" id="english-content-area" rows="3"></textarea>
                  </fieldset>
                </td>
                <td>
                  <fieldset className="form-group">
                    <textarea className="form-control" id="german-content-area" rows="3"></textarea>
                  </fieldset>
                </td>
                <td className="u-alignCenter">
                  <a href="#" className="btn btn-secondary btn-sm"><i className="fa fa-floppy-o" aria-hidden="true"></i></a>
                </td>
              </tr>
            </tbody>
          </table>
        </Panel>
      </div>
    )
  }
}

export default ContentMaintenance
