import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <SignIn path="/sign-in" fallbackRedirectUrl='/home' forceRedirectUrl='/home'/>
  )
}

export default SignInPage