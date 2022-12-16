import { css } from '@emotion/react'
import styled from '@emotion/styled'
import { FC } from 'react'
import { Icons } from './Icons'

export type AvailableIcons = keyof typeof Icons

type WrapperProps = {
  // Width and height
  size?: number
}

export type Props = {
  // Icon name
  name: AvailableIcons
} & WrapperProps &
  React.SVGProps<SVGSVGElement>

const Wrapper = styled.div<WrapperProps>`
  color: ${({ theme }) => theme.font.regular};
  ${({ size }) => {
    const sizeRem = `${size}rem`
    return css`
      width: ${sizeRem};
      height: ${sizeRem};
    `
  }};
`

// https://reactsvgicons.com/search

export const Icon: FC<Props> = ({ name, size = 2, ...rest }) => {
  const Icon = Icons[name]
  const sizeInRem = `${size}rem`
  const sizes = { width: sizeInRem, height: sizeInRem }

  return (
    <Wrapper size={size}>
      <Icon {...sizes} {...rest} />
    </Wrapper>
  )
}
