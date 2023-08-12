import { render } from '@redwoodjs/testing/web'

import DescriptiveRadio from './DescriptiveRadio'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DescriptiveRadio', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DescriptiveRadio />)
    }).not.toThrow()
  })
})
