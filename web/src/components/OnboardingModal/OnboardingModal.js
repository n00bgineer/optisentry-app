// IMPORTING PACKAGES/MODULES// IMPORTING PACKAGES/MODULES
import { Box, Typography } from '@mui/material'

import './onboardingModal.css'
import 'src/pages/SignupPage/authPage.css'

import OnboardingForm from '../OnboardingForm/OnboardingForm'

const OnboardingModal = () => {
  return (
    <Box
      className="full-modal onboarding-modal"
      sx={{ bgcolor: 'background.default' }}
    >
      <Box className="onboarding-form-container">
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
          <OnboardingForm />
        </Box>
      </Box>
      <Box
        className="onboarding-visual-container"
        sx={(theme) => {
          return {
            background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
          }
        }}
      >
        <img
          src="https://res.cloudinary.com/dgu9rv3om/image/upload/v1691673204/optisentry/report_dark_desktop.png"
          alt="Report screenshot"
          className="onboarding-visual-image"
        />
      </Box>
    </Box>
  )
}

export default OnboardingModal
