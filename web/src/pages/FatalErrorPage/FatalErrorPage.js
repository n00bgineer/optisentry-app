// IMPORTING PACKAGES/MODULES
import { Box, Card, ThemeProvider, Typography } from '@mui/material'
import './fatalErrorPage.css'

import Button from 'src/components/Button/Button'
import LightTheme from 'src/themes/lightTheme'

let RedwoodDevFatalErrorPage = undefined
if (process.env.NODE_ENV === 'development') {
  RedwoodDevFatalErrorPage =
    require('@redwoodjs/web/dist/components/DevFatalErrorPage').DevFatalErrorPage
}

export default RedwoodDevFatalErrorPage ||
  (() => {
    // METHODS
    /**
     * @name setRefresh
     * @description METHOD TO REFRESH YOUR PAGE
     * @returns {undefined} undefined
     */
    const setRefresh = () => document.location.reload()

    return (
      <ThemeProvider theme={LightTheme}>
        <Box className="fatal-error-page">
          <Card className="fatal-error-card">
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
            <Typography variant="h5" className="page-title">
              Oops! Something went wrong
            </Typography>
            <Typography className="page-subtitle">
              Please try refreshing the app
            </Typography>
            <Button
              color="error"
              size="medium"
              variant="contained"
              fullWidth={true}
              onClick={setRefresh}
            >
              Refresh
            </Button>
          </Card>
        </Box>
      </ThemeProvider>
    )
  })
