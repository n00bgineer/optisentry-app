// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import { MetaTags } from '@redwoodjs/web'

import '../SignupPage/authPage.css'

import SigninForm from './SigninForm'

const SigninPage = () => {
  return (
    <>
      <MetaTags title="Signin" description="Signin page" />

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
          <SigninForm />
        </Box>
      </Box>
    </>
  )
}

export default SigninPage
