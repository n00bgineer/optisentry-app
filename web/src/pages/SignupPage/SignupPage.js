// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import './authPage.css'
import SignupForm from './SignupForm'

const SignupPage = () => {
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <Box className="auth-page">
        <Box className="auth-form-container">
          <Box className="brand-info-container">
            <img
              src="https://res.cloudinary.com/dgu9rv3om/image/upload/q_auto:low/v1691313312/optisentry/OptiSentry_logo_gvtfbn.png"
              alt="OptiSentry logo"
              className="logo"
              loading="lazy"
            />
            <Typography variant="body1" className="brand-name">
              OptiSentry
            </Typography>
          </Box>
          <SignupForm />
        </Box>
      </Box>
    </>
  )
}

export default SignupPage
