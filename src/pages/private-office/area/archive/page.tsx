import { InputField } from "@shared/inputs"
import { PrivateWrapper } from "@shared/private-wrapper"
import { Createayout } from "@widgets/layouts/create-layout"
import { Button } from "antd"

export const AreaSinglePage = () => {
  return (
    <Createayout 
      title="Мои участки" 
      route="/private-office/area/create"
    >
      <PrivateWrapper title={"Участок под пшеницу"}>
        <InputField 
          label="Название"
        />
        <InputField 
          label="Расположение"
        />
        <InputField 
          label="Тип почвы"
        />
        <InputField 
          label="Посаженные культуры"
        />
        <Button type="primary" ghost style={{borderRadius: '20px'}}>
          Обновить
        </Button>
      </PrivateWrapper>

      <PrivateWrapper title={"Новый пустой участок"}>
        <InputField 
          label="Название"
        />
        <InputField 
          label="Расположение"
        />
        <InputField 
          label="Тип почвы"
        />
        <InputField 
          label="Посаженные культуры"
        />
        <Button type="primary" ghost style={{borderRadius: '20px'}}>
          Обновить
        </Button>
      </PrivateWrapper>

      <PrivateWrapper title={"Поле"}>
        <InputField 
          label="Название"
        />
        <InputField 
          label="Расположение"
        />
        <InputField 
          label="Тип почвы"
        />
        <InputField 
          label="Посаженные культуры"
        />
        <Button type="primary" ghost style={{borderRadius: '20px'}}>
          Обновить
        </Button>
      </PrivateWrapper>
    </Createayout>
  )
}
