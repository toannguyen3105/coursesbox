import { ComponentMeta, ComponentStory } from '@storybook/react'
import { IconButton } from './IconButton'

export default {
  title: 'Controls/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
)

export const BasicIconButton = Template.bind({})
BasicIconButton.args = {
  name: 'Home',
}
