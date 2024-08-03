import { SignUp } from '@clerk/nextjs'
import React from 'react'


const SignUpPage = () => {
  return (
    <SignUp path="/sign-up" 
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
      }}
    />
  )
}

export default SignUpPage