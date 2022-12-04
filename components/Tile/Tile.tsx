import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'
import { borderRadius, boxShadow } from '@/components/styles'

type Props = {
  children: ReactNode
  header: string
}

const Section = styled.section`
  ${borderRadius};
  padding: 1vmin 4vmin 4vmin;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.font.regular};
  ${({ theme }) =>
    boxShadow(theme.components.shadow1, theme.components.shadow2)}
`

const Tile: FC<Props> = ({ header, children }) => {
  return (
    <Section>
      <h2>{header}</h2>
      {children}
    </Section>
  )
}

export default Tile
