import logo from '@public/logo.svg'
import { styled } from 'styled-components'
import { Button, Flex } from 'antd'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <Wrapper>
      <Link to={"/"}>
        <img src={logo} alt="logo" />
      </Link>
      <Flex gap={10} style={{ width: '40%' }}>
        <Link to={"/log-in"}>
          <LoginButton type="primary">
            Войти
          </LoginButton>
        </Link>
        <Link to={"/sign-up"}>
          <LoginButton type="primary">
            Зарегистрироваться
          </LoginButton>
        </Link>
      </Flex>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #84B290;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3%;
  padding-bottom: 0.5%;
`
const LoginButton = styled(Button)`
  border-radius: 30px;
  height: 45px;
  width: 30vh;
  color: #0B6623;
  background-color: white;
  margin-right: 40px;
`
