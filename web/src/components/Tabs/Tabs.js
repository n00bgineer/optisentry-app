// IMPORTING PACKAGES/MODULES
import { Tabs as MuiTabs } from '@mui/material'
import { styled } from '@mui/material/styles'

const Tabs = styled(MuiTabs)(({ theme }) => ({
  '&.MuiTabs-root': {
    padding: '5px',
    background: theme.palette.grey['200'],
    borderRadius: '9999px',
  },
}))

export default Tabs
