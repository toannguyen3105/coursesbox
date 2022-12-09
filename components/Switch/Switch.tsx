import { useId } from '@/components/hooks/useId'
import styled from '@emotion/styled'
import { ChangeEvent, FC } from 'react'

const Wrapper = styled.label``

const VisiblePart = styled.label``

type Props = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const Switch: FC<Props> = ({ onChange }) => {
  const fieldId = useId()
  return (
    <Wrapper>
      <input id={fieldId} type="checkbox" onChange={onChange} />
      <VisiblePart htmlFor={fieldId} />
    </Wrapper>
  )
}

export default Switch
