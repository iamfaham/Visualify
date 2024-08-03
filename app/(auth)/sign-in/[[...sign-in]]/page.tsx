import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <SignIn path="/sign-in" 
      appearance={{
      elements: {
        formButtonPrimary: {
          backgroundColor: '#5cbefb', // Cyan color
          borderColor: '#5cbefb',     // Cyan color
          color: '#ffffff',           // White text color
        },
        footerActionLink: {
          color:'#5cbefb',
        },
      },
    }}/>
  )
}

export default SignInPage