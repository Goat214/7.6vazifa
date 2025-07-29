import React from 'react'
import { Navigate } from 'react-router-dom'

function ProtecRoutest({children, user}) {
 if (user) {
    return children
 } else {
    return <Navigate to="/login"/>
 }
}

export default ProtecRoutest
