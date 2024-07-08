import React, { useState } from 'react'
import logo from '@public/logo.svg'
import { styled } from 'styled-components'
import { Button, Drawer } from 'antd'
import menu from '@public/menu.svg'

export const Header = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <Wrapper>
      <MenuWrapper>
        <MenuButton onClick={showDrawer} type='link' icon={<img src={menu} />} />
        <img src={logo} alt="logo" style={{ marginLeft: '35px' }} />
      </MenuWrapper>
      <LoginButton type="primary">
        Войти
      </LoginButton>
      <MenuContent title="Меню" placement="left" onClose={onClose} visible={visible}>
        <p>Пункт 1</p>
        <p>Пункт 2</p>
        <p>Пункт 3</p>
      </MenuContent>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #84B290;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 80px;
`
const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`
const MenuButton = styled(Button)`
  border: none;
  background: none;
  color: white;
  font-size: 24px;

`
const LoginButton = styled(Button)`
  border-radius: 30px;
  height: 45px;
  width: 20%;
  color: #0B6623;
  background-color: white;
  margin-right: 40px;
`
const MenuContent = styled(Drawer)`
  .ant-drawer-body {
    background-color: #CEE0D3;
  }

  .ant-drawer-header {
    background-color: #CEE0D3;
  }

  .ant-drawer-title {
    color: #0B6623;
  }
`