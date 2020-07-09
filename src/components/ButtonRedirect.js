import React from 'react'
import {Link} from 'react-router-dom'

const ButtonRedirect =({text,link}) => {
  return(
    <Link to={link} className="btn btn-secondary my-2 my-sm-0">
      {text}
    </Link>  
  )
}

export default ButtonRedirect
