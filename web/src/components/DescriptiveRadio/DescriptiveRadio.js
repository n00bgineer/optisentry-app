// IMPORTING PACKAGES/MODULES
import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Typography,
  styled,
} from '@mui/material'

// CUSTOM COMPONENTS
// CUSTOM FORM CONTROL LABEL COMPONENT
const CustomFormControlLabel = styled(FormControlLabel)(() => ({
  '&.MuiFormControlLabel-root': {
    margin: '0px',
  },
}))

// CUSTOM FORM CONTROL COMPONENT
const CustomFormControl = styled(FormControl)(() => ({
  '&.MuiFormControl-root': {
    width: '100%',
  },
  '& .MuiDescriptiveRadioForm-label': {
    marginBottom: '5px',
  },
}))

// CUSTOM RADIO GROUP COMPONENT
const CustomRadioGroup = styled(RadioGroup)(() => ({
  '&.MuiRadioGroup-root': {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
}))

// CUSTOM BOX COMPONENT
const DescriptiveRadioOptionContainer = styled(Box)(({ theme }) => ({
  '&.MuiBox-root': {
    width: '100%',
    padding: '7px',
    marginBottom: '10px',
    borderRadius: '18px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    border: `2px solid ${theme.palette.divider}`,
  },
  '&.MuiDescriptiveRadioOption-selected': {
    border: `2px solid ${theme.palette.primary.main}`,
  },
  '&.MuiDescriptiveRadioOption-selected .MuiDescriptiveRadioOption-icon': {
    background: `linear-gradient(to top, ${theme.palette.primary.dark}, ${theme.palette.primary.main}, ${theme.palette.primary.main})`,
  },
  '& .MuiDescriptiveRadioOption-icon': {
    background: theme.palette.grey.main,
    borderRadius: '12px',
    padding: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '10px',
  },
  '& .MuiDescriptiveRadioOption-name': {
    fontWeight: 'bold',
  },
  '& .MuiDescriptiveRadioOption-icon > .MuiSvgIcon-root': {
    color: theme.palette.common.black,
  },
}))

// CUSTOM COMPONENT FOR RADIO CONTOL ELEMENT
const DescriptiveRadioOption = ({
  name,
  description,
  icon,
  value,
  setValue,
  selected,
}) => {
  return (
    <>
      <DescriptiveRadioOptionContainer
        className={selected ? 'MuiDescriptiveRadioOption-selected' : ''}
        onClick={() => setValue(value)}
      >
        <Box className="MuiDescriptiveRadioOption-icon">{icon}</Box>
        <Box>
          <Typography variant="h6" className="MuiDescriptiveRadioOption-name">
            {name}
          </Typography>
          <Typography
            variant="body2"
            className="MuiDescriptiveRadioOption-description"
          >
            {description}
          </Typography>
        </Box>
      </DescriptiveRadioOptionContainer>
    </>
  )
}

const DescriptiveRadio = ({
  radioOptions,
  name,
  defaultValue,
  formLabel,
  setValue,
}) => {
  return (
    <CustomFormControl>
      <FormLabel>
        <Typography variant="body2" className="MuiDescriptiveRadioForm-label">
          {formLabel}
        </Typography>
      </FormLabel>
      <CustomRadioGroup defaultValue={defaultValue} name={name}>
        {radioOptions &&
          radioOptions.map((radioOption, index) => {
            return (
              <CustomFormControlLabel
                value={radioOption.value}
                key={index}
                control={
                  <>
                    <DescriptiveRadioOption
                      name={radioOption.name}
                      description={radioOption.description}
                      icon={radioOption.icon}
                      value={radioOption.value}
                      setValue={setValue}
                      selected={radioOption.value === defaultValue}
                    />
                  </>
                }
              />
            )
          })}
      </CustomRadioGroup>
    </CustomFormControl>
  )
}

export default DescriptiveRadio
