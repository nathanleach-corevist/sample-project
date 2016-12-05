import React from 'react'
import Error from './Error'

const renderFormErrors = () {
  return this.data.errors.map((error) => {
    return <Error key={error._id} error={error} />
  });
}

const Errors = () => {
  let errors = renderFormErrors();
  return (
    <div className="errors">{errors}</div>
  )
}
