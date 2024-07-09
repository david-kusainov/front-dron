import { InputField } from "@shared/inputs"
import { useForm } from "effector-forms"
import { $$form } from "./model"
import { Form } from "antd"

export const LogInForm = () => {
  const { fields } = useForm($$form)

  return (
    <Form>
      <InputField 
        placeholder="Логин"
        field={fields.login}
        size="large"
      />
    </Form>
  )
}