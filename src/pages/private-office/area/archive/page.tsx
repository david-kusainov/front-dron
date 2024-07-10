import { InputField } from "@shared/inputs"
import { PrivateWrapper } from "@shared/private-wrapper"
import { Createayout } from "@widgets/layouts/create-layout"

export const AreaArchivePage = () => {
  return (
    <Createayout 
      title="Мои участки" 
      route="/private-office/area/create"
    >
      <PrivateWrapper
        title={"Участок под пшеницу"}
        buttonText="Редактировать"
        route="/private-office/area/:id"
      >
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
      </PrivateWrapper>

      <PrivateWrapper 
        title={"Новый пустой участок"}
        buttonText="Редактировать"
        route="/private-office/area/:id"
      >
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
      </PrivateWrapper>

      <PrivateWrapper 
        title={"Поле"}
        buttonText="Редактировать"
        route="/private-office/area/:id"
      >
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
      </PrivateWrapper>
    </Createayout>
  )
}
