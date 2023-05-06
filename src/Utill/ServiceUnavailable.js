import React from 'react'

const ServiceUnavailable = ({ error }) => {
  return (
    <div className='__error_container'>
        <div className='__error_card'>
            <h3>Something went wrong, Please reload the page or contact admin</h3>
        </div>
    </div>
  )
}

export default ServiceUnavailable


