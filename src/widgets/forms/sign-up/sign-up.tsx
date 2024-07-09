import { InputField } from "@shared/inputs"
import { useForm } from "effector-forms"
import { $$form } from "./model"
import { Button, Form } from "antd"
import { styled } from "styled-components"
import { Link } from "react-router-dom"

export const SignUpForm = () => {
  const { fields } = useForm($$form)
  return (
    <Box>
      <Title>
        Регистрация
      </Title>

      <StyledForm>
        <InputField
          placeholder="Имя"
          field={fields.name}
          size="large"
        />
        <InputField
          placeholder="Фамилия"
          field={fields.surname}
          size="large"
        />
        <InputField
          placeholder="Отчество"
          field={fields.fatherName}
          size="large"
        />
        <InputField
          placeholder="Номер телефона"
          field={fields.fhoneNumber}
          size="large"
        />
        <InputField
          placeholder="Email"
          field={fields.email}
          size="large"
        />
        <InputField
          placeholder="Придумайте логин"
          field={fields.login}
          size="large"
        />
        <InputField
          placeholder="Придумайте пароль"
          field={fields.password}
          size="large"
        />
        <InputField
          placeholder="Повторите пароль"
          field={fields.passwordCoppy}
          size="large"
        />
      </StyledForm>

      <Button type="primary" block style={{ borderRadius: '30px', width: '10%', margin: '29px auto 0px auto' }}>
        Продолжить
      </Button>

      <Registrate>
        <span>Уже есть аккаунт?</span>
        <Link to={"/log-in"}>
          <span style={{ color: '#0B6623', marginLeft: '5px' }}>Войти</span>
        </Link>
      </Registrate>
    </Box>
  )
}

const Registrate = styled(Form)`
  margin: 44px auto 0 auto;
`

const StyledForm = styled(Form)`
  width: 20%;
  margin: auto; 
   & > *:not(:last-child) {
    margin-bottom: 16px; 
  }
  margin-top: 50px;
`

const Box = styled.div`
  border-top: 2px solid #0B6623;
  padding: 80px 20px 130px;
  display: flex;
  flex-direction: column;
  justify-items: center;
`

const Title = styled.div`
  margin: 0 auto; 
  color: #0B6623;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`
