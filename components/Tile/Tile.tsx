import styled from '@emotion/styled'
import { FC, ReactNode } from 'react'

type Props = {
  children: ReactNode
  header: string
}

const Section = styled.section``

const Tile: FC<Props> = ({ header, children }) => {
  return (
    <Section>
      <h2>{header}</h2>
      {children}
    </Section>
  )
}

export default Tile
