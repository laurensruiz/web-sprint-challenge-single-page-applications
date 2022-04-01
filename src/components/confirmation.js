import React from 'react'

export default function Confirmation(props) {
  const { orders } = props
  console.log(orders)
  return (
      <div id ="confirm-page">
          <p>{orders.name} ordered a {orders.size} pizza! </p>
      </div>
     
  )
}
