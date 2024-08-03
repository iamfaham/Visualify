import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <SignUp path="/sign-up" fallbackRedirectUrl='/home' forceRedirectUrl='/home'/>
  )
}

export default SignUpPage