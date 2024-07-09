import { useState } from 'react'
import logo from '@public/logo.svg'
import { styled } from 'styled-components'
import { Button, Drawer, Flex, Menu } from 'antd'
import menu from '@public/menu.svg'
import { Link } from 'react-router-dom'

export const Header = () => {
  const [visible, setVisible] = useState(false)

  const showDrawer = () => {
    setVisible(true)
  }

  const onClose = () => {
    setVisible(false)
  }

  const menuItems = [
    {
      key: '1',
      label: 'Домашняя страница',
      link: '/'
    },
    {
      key: '2',
      label: 'Профиль',
      link: '/users/user'
    },
    {
      key: '3',
      label: 'Создать задачу',
      link: '/create/task'
    },
    {
      key: '4',
      label: 'Задания',
      link: '/tasks'
    }
  ]

  const items = menuItems.map(item => (
    <Menu.Item key={item.key}>
      <Link to={item.link}>{item.label}</Link>
    </Menu.Item>
  ))

  return (
    <Wrapper>
      <MenuWrapper>
        <MenuButton onClick={showDrawer} type='link' icon={<img src={menu} />} />
        <Link to={"/"}>
          <img src={logo} alt="logo" style={{ marginLeft: '35px' }} />
        </Link>
      </MenuWrapper>
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
      <MenuContent title="Меню" placement="left" onClose={onClose} visible={visible}>
        <MenuChildren>
          {items}
        </MenuChildren>
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
  width: 30vh;
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
const MenuChildren = styled(Menu)`
  background-color: inherit;
`