import { screen, render } from 'test-utils'
import { IconButton } from './IconButton'
import userEvent from '@testing-library/user-event'

describe('IconButton test cases', () => {
  it('Render check', () => {
    const onClick = jest.fn()
    const { asFragment } = render(<IconButton name="Home" onClick={onClick} />)
    expect(asFragment()).toMatchSnapshot()
  })

  it('Check onClick callback', async () => {
    const onClick = jest.fn()

    render(
      <IconButton name="Home" onClick={onClick}>
        Button
      </IconButton>
    )

    const element = screen.getByRole('button')

    await userEvent.click(element)

    expect(onClick).toHaveBeenCalled()
  })
})
