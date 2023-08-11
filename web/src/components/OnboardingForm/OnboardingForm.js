// IMPORTING PACKAGES/MODULES
import { useState } from 'react'

import { AssignmentInd, Inventory2 } from '@mui/icons-material'
import { Box, Typography } from '@mui/material'
import { useRecoilState } from 'recoil'

import { useMutation } from '@redwoodjs/web'

import Alert from 'src/components/Alert/Alert'
import Button from 'src/components/Button/Button'
import Input from 'src/components/Input/Input'
import { UPDATE_USER_MUTATION } from 'src/components/User/EditUserCell'
import { accountAtom, modalTypeAtom } from 'src/contexts/atoms'
import './onboardingForm.css'

import DescriptiveRadio from '../DescriptiveRadio/DescriptiveRadio'
import TabPanel from '../TabPanel/TabPanel'

// INPUT FIELD VALIDATION METHODS
/**
 * @name validDisplayName
 * @description METHOD TO VALIDATE DISPLAY NAME
 * @param {*} displayName EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL IS VALIDATED OR NOT
 */
const validDisplayName = (displayName) => {
  const regex = /^[A-Za-z\s'-]{2,}$/
  return regex.test(displayName)
}

/**
 * @name validateDisplayNameLength
 * @description METHOD TO VALIDATE EMAIL LENGTH
 * @param {*} displayName EMAIL STRING
 * @returns {Boolean} WHETHER EMAIL HAS A MAX LENGTH OR NOT
 */
const validateDisplayNameLength = (displayName) => {
  // SETTING LOCAL VARIABLES
  const minLength = 2
  const maxLength = 30

  if (displayName.length >= minLength && displayName.length <= maxLength)
    return true
  else return false
}

const OnboardingForm = () => {
  // SETTING LOCAL VARIABLES
  const radioOptions = [
    {
      value: 'indv',
      name: 'Individual',
      description: "Cheaper pricing, Can't invite other members",
      icon: <AssignmentInd fontSize="large" />,
    },
    {
      value: 'org',
      name: 'Organisation',
      description: 'Costlier pricing, Invite upto three members',
      icon: <Inventory2 fontSize="large" />,
    },
  ]

  // SETTING LOCAL STATE
  const [displayName, setDisplayName] = useState('')
  const [radioOptionValue, setRadioOptionValue] = useState('indv')
  const [isSubmissionInProcess, setIsSubmissionInProcess] = useState(false)

  // INPUT FIELD VALIDATION STATES
  const [submitErrorText, setSubmitErrorText] = useState('')
  const [displayNameErrorText, setDisplayNameErrorText] = useState('')

  // GETTING ATOMIC STATES
  const [account, setAccount] = useRecoilState(accountAtom)
  const [modalType, setModalType] = useRecoilState(modalTypeAtom)

  // EXECUTING GQL MUTATION
  // MUTATION FOR UPDATING USER
  const [updateUser] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: (res) => setAccount(res.createUser),
    onError: (error) => {
      setSubmitErrorText(error.message)
      console.error('ERROR OCCURED WHILE SIGNING IN')
      console.error(error)
    },
  })

  // METHODS
  /**
   * @name setTab
   * @description METHOD TO SET TAB VALUE
   * @param {*} value VALUE
   * @returns {undefined} undefined
   */
  const setRadioOption = (value) => setRadioOptionValue(value)

  // METHODS
  /**
   * @name setOnboarding
   * @description METHOD TO EXECUTE COMPLETION OF ONBOARDING PROCESS
   * @param {*} event EVENT OBJECT
   * @param {*} accountType TYPE OF ACCOUNT
   * @returns {undefined} undefined
   */
  const setOnboarding = async (event, accountType) => {
    event.preventDefault()
    setIsSubmissionInProcess(true)

    // STORING ACCOUNT INFO
    const id = account.id
    const input = {
      accountType: accountType,
      displayName: displayName,
    }
    console.log(account, input)

    // CALLING UPDATE FUNCTION
    await updateUser({ variables: { id, input } }).finally(() => {
      setIsSubmissionInProcess(false)
      setModalType('')
    })
  }

  /**
   * @name setDisplayNameField
   * @description METHOD TO SET EMAIL VALUE
   * @returns {undefined} undefined
   */
  const setDisplayNameField = (event) => {
    setDisplayName(event.target.value)

    if (
      !validDisplayName(event.target.value.trim()) ||
      !validateDisplayNameLength(event.target.value.trim())
    ) {
      // VALIDATING EMAIL LENGTH
      if (!validateDisplayNameLength(event.target.value.trim()))
        setDisplayNameErrorText(
          'The name should have more than 2 characters and less than 30 characters'
        )
      // VALIDATING EMAIL VALUE
      else if (!validDisplayName(event.target.value.trim()))
        setDisplayNameErrorText(
          'The name can only contain uppercase or lowercase letter, whitespace, apostrophe, or hyphen'
        )
    } else {
      setDisplayNameErrorText('')
    }
  }

  /**
   * @name OnSubmitIndv
   * @description METHOD TO SUBMIT FORM FOR UPDATING INDIVIDUAL DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const OnSubmitIndv = (event) => {
    event.preventDefault()
    if (displayNameErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setOnboarding(event, 'INDIVIDUAL')
    }
  }

  /**
   * @name OnSubmitOrg
   * @description METHOD TO SUBMIT FORM FOR UPDATING ORGANISATION DATA
   * @param {*} event EVENT OBJECT
   * @returns {undefined} undefined
   */
  const OnSubmitOrg = (event) => {
    event.preventDefault()
    if (displayNameErrorText !== '')
      setSubmitErrorText('Resolve the errors mentioned above')
    else {
      setSubmitErrorText('')
      setOnboarding(event, 'ORGANIZATION')
    }
  }

  return (
    <>
      <Box className="auth-form-text-container">
        <Typography variant="h2" className="auth-form-title">
          One last step
        </Typography>
        <Typography variant="body1" className="auth-form-subtitle">
          Select account type and enter your name
        </Typography>
      </Box>
      <Box className="onboarding-descriptive-radio-container">
        <DescriptiveRadio
          radioOptions={radioOptions}
          defaultValue={radioOptionValue}
          setValue={setRadioOption}
          name="account-type"
          formLabel="Select an account type"
        />
      </Box>
      <TabPanel
        value="indv"
        index={radioOptionValue}
        className="onboarding-tab-panel"
      >
        <form className="auth-form onboarding-form" onSubmit={OnSubmitIndv}>
          <Input
            placeholder="Harry Potter"
            required={true}
            startAdornment={<AssignmentInd />}
            fullWidth={true}
            type="text"
            value={displayName}
            margin="large"
            color={displayNameErrorText !== '' ? 'error' : 'primary'}
            onInput={setDisplayNameField}
            errorText={displayNameErrorText}
            disabled={isSubmissionInProcess}
            label="Enter your name"
          />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            fullWidth={true}
            color="primary"
            margin="large"
            disabled={isSubmissionInProcess}
          >
            {isSubmissionInProcess ? 'Submitting ...' : 'Submit'}
          </Button>
          {submitErrorText !== '' && (
            <Alert fullWidth={true} margin="medium" severity="error">
              {submitErrorText}
            </Alert>
          )}
        </form>
      </TabPanel>
      <TabPanel
        value="org"
        index={radioOptionValue}
        className="onboarding-tab-panel"
      >
        <form className="auth-form onboarding-form" onSubmit={OnSubmitOrg}>
          <Input
            placeholder="Hogwarts"
            required={true}
            startAdornment={<Inventory2 />}
            fullWidth={true}
            type="text"
            value={displayName}
            margin="large"
            color={displayNameErrorText !== '' ? 'error' : 'primary'}
            onInput={setDisplayNameField}
            errorText={displayNameErrorText}
            disabled={isSubmissionInProcess}
            label="Enter your organisation's name"
          />
          <Button
            type="submit"
            size="medium"
            variant="contained"
            fullWidth={true}
            color="primary"
            margin="large"
            disabled={isSubmissionInProcess}
          >
            {isSubmissionInProcess ? 'Submitting ...' : 'Submit'}
          </Button>
          {submitErrorText !== '' && (
            <Alert fullWidth={true} margin="medium" severity="error">
              {submitErrorText}
            </Alert>
          )}
        </form>
      </TabPanel>
    </>
  )
}

export default OnboardingForm
