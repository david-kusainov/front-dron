import { ReactNode } from "react"
import { styled } from "styled-components"

interface PrivateWrapperProps {
  children: ReactNode
  title: string
}

export const PrivateWrapper = ({children, title}: PrivateWrapperProps) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  padding: 30px 40px;
  border-radius: 12px;
  background-color: #F3F7F4;
  & > *:not(:last-child) {
    margin-bottom: 2%; 
  }
  margin-bottom: 2%;
  margin-top: 2%;
`
const Title = styled.div`
  color: #0B6623;
  text-decoration: underline;
  font-size: 23px;
  margin-bottom: 3%;
`
