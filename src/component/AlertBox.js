import React from 'react'

function AlertBox(props) {

  return (

props.alertProp && <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>{props.alertProp.type}</strong> : {props.alertProp.msg}.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
  )
}

export default AlertBox
