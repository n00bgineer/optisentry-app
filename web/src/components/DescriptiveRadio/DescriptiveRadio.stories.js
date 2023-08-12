// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```jsx
// export const generated = (args) => {
//   return <DescriptiveRadio {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import DescriptiveRadio from './DescriptiveRadio'

export const generated = () => {
  return <DescriptiveRadio />
}

export default {
  title: 'Components/DescriptiveRadio',
  component: DescriptiveRadio,
}
