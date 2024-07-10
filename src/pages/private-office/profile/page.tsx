import { InputField } from "@shared/inputs"
import { PrivateWrapper } from "@shared/private-wrapper"
import { PrivateLayout } from "@widgets/layouts/private-layout"
import { Button, Switch } from "antd"
import { styled } from "styled-components"

export const ProfilePage = () => {
  return (
    <PrivateLayout>
      <Title>Профиль пользователя</Title>
      <PrivateWrapper title={"Учетная запись"}>
        <InputField 
          label="ФИО"
        />
        <InputField 
          label="Телефон"
        />
        <InputField 
          label="Почта"
        />

        <Button type="primary" block>
          Обновить
        </Button>
      </PrivateWrapper>

      <PrivateWrapper title={"Доступ и безопасность"}>
        <InputField 
          label="Логин"
        />
        <InputField 
          label="Пароль"
        />

        <Button type="primary" block>
          Обновить
        </Button>
      </PrivateWrapper>

      <PrivateWrapper title={"Уведомления"}>
        <Container>
          <div>Уведомления</div>
          <Switch />
        </Container>
        <Button type="primary" block>
          Обновить
        </Button>
      </PrivateWrapper>
    </PrivateLayout>
  )
}

const Title = styled.div`
  color: #0B6623;
  font-size: 30px;
`
const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1%);
  column-gap: 10%;
`