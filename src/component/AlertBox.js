import React from 'react'

function AlertBox(props) {

  return (
<div style={{height:'50px'}}> 
{props.alertProp && <div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>{props.alertProp.type}</strong> : {props.alertProp.msg}.
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>}
</div>
  )
}

export default AlertBox
