import { expect } from '@storybook/jest'
import { ComponentMeta, ComponentStoryObj } from '@storybook/react'
import { screen, userEvent } from '@storybook/testing-library'
import { Checkbox } from './Checkbox'

export default {
  title: 'Content/Checkbox',
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>

export const BasicCheckbox: ComponentStoryObj<typeof Checkbox> = {
  play: async ({ args }) => {
    await userEvent.click(screen.getByText('✔'))
    await expect(args.onChange).toHaveBeenCalled
  },
}
