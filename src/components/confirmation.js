import React from 'react'

export default function Confirmation(props) {
  const { order } = props

  return (
      <div id ="confirm-page">
          {order}
      </div>
     
  )
}
