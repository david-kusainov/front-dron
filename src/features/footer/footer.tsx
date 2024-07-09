import { styled } from "styled-components"
import logo from '@public/logo.svg'

export const Footer = () => {
  return (
    <Wrapper>
      <img src={logo} alt="logo" style={{ margin: 'auto', display: 'block' }} width={'10%'} />
      <CreateBy>
        create by Pixel Pundits © {new Date().getFullYear()}
      </CreateBy>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-top: 2px solid #0B6623; 
  background-color: #F5F5F5;
`
const CreateBy = styled.div`
  margin-left: 44%;
  margin-top: 1%;
  margin-bottom: 1%;
  color: #0B6623;
`