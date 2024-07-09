import { Input, InputProps } from "antd"
import { ConnectedField } from "effector-forms"
import { ReactNode, useEffect } from "react"
import { styled } from "styled-components"

interface FieldProps<T> {
  field?: ConnectedField<T>
  setValueField?: T
  errorText?: any
  label?: ReactNode | string
  required?: boolean
}

export interface InputFieldProps<T extends string | number | undefined | null> extends FieldProps<T>, InputProps { }

export function InputField<T extends string | number | undefined | null>(props: InputFieldProps<T>) {
  useEffect(() => {
    if (props.setValueField)
      props.field?.set(props.setValueField)
  }, [props.setValueField])

  return (
    <FieldWithLabelColumn>
      <Label label={props.label} required={props.required} />
      <Input
        value={props.field && props?.field.value || ""}
        onChange={(e) => props.field && props.field.onChange(e.target.value as T)}
        style={{borderRadius: '20px'}}
        {...props}
      />
      {props.field && <ErrorValidate field={props.field} />}
    </FieldWithLabelColumn>
  )
}

interface ErrorValidateProps {
  field: ConnectedField<any>
}

const ErrorValidate = (props: ErrorValidateProps) => {
  return (
    <div style={{ color: "red" }}>
      {props.field.errorText({
        [props.field.name]: "props.errorText",
      })}
    </div>
  )
}

function Label({ label, required }: { label?: ReactNode, required?: boolean }) {
  return (label ?
    <LabelStyled>
      {label}
      {required && <span style={{ color: "red" }}>*</span>}
    </LabelStyled>
    : <></>
  )
}

const LabelStyled = styled.label`
  display: flex;
  gap: 10px;
  margin-bottom: 4px;
`
const FieldWithLabelColumn = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0 10px;
`
