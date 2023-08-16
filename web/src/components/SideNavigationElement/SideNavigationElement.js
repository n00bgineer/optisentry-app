// IMPORTING PACKAGES/MODULES
import {
  ListItemButton as MuiListItemButton,
  ListItemIcon,
  styled,
  ListItemText,
} from '@mui/material'

import { Link as RedwoodLink } from '@redwoodjs/router'

// CUSTOM COMPONENTS
// CUSTOM LIST ITEM BUTTON COMPONENT
const CustomListItemButton = styled(MuiListItemButton)(({ theme }) => ({
  '&.MuiListItemButton-root': {
    borderRadius: '12px',
    minWidth: 'unset',
    margin: '10px auto',
    padding: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '& .MuiListItemIcon-root': {
    minWidth: 'unset',
    marginRight: '8px',
  },
  '&.MuiListItemButton-small': {
    fontSize: '30px',
  },
  '&.MuiListItemButton-medium': {
    fontSize: '50px',
  },
  '&.MuiListItemButton-large': {
    fontSize: '60px',
  },
  '&.MuiListItemButton-small .MuiSvgIcon-root': {
    width: '15px',
    height: '15px',
  },
  '&.MuiListItemButton-medium  .MuiSvgIcon-root': {
    width: '25px',
    height: '25px',
  },
  '&.MuiListItemButton-large .MuiSvgIcon-root': {
    width: '30px',
    height: '30px',
  },
  '&.Mui-selected': {
    background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
    color: theme.palette.common.black,
  },
  '&.Mui-selected .MuiSvgIcon-root': {
    color: theme.palette.common.black,
  },
  '&.Mui-selected:hover': {
    boxShadow: `0 0 5px ${theme.palette.primary.main}`,
    filter: 'brightness(120%)',
  },
}))

// CUSTOM LIST ITEM BUTTON COMPONENT
const ListItemButton = ({ size, ...props }) => {
  let listItemButtonSizeClass = 'MuiListItemButton-medium'
  if (size === 'small') listItemButtonSizeClass = 'MuiListItemButton-small'
  else if (size === 'large') listItemButtonSizeClass = 'MuiListItemButton-large'
  return (
    <CustomListItemButton
      {...props}
      className={
        props.className
          ? props.className + ' ' + listItemButtonSizeClass
          : listItemButtonSizeClass
      }
    />
  )
}

const SideNavigationElement = ({
  type,
  link,
  size,
  label,
  onClick,
  isSelected,
  selectedIcon,
  unselectedIcon,
  ...props
}) => {
  if (type === 'link')
    return (
      <ListItemButton
        component={RedwoodLink}
        to={link}
        selected={isSelected}
        size={size}
        {...props}
      >
        <ListItemIcon>
          {isSelected ? selectedIcon : unselectedIcon}
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    )
  else if (type === 'button')
    return (
      <ListItemButton onClick={onClick} size={size} {...props}>
        <ListItemIcon>
          {isSelected ? selectedIcon : unselectedIcon}
        </ListItemIcon>
        <ListItemText>{label}</ListItemText>
      </ListItemButton>
    )
  else return <></>
}

export default SideNavigationElement
