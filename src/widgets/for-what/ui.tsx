import { styled } from "styled-components"
import data_analytics from "@public/for-block-info/data-analytics.svg"
import flexible from "@public/for-block-info/flexible.svg"
import quality from "@public/for-block-info/quality.svg"
import approval from "@public/for-block-info/approval.svg"
import { ForWhat } from "@features/block-info/for-what"

export const ForWhatBlock = () => {
  return (
    <Box>
      <ForWhat src={data_analytics}>
        Анализ данных, полученных от дронов, 
        с целью выявления заболеваний, 
        дефектов и других проблем на 
        сельскохозяйственных угодьях
      </ForWhat>
      <ForWhat src={flexible}>
        Оптимизация применения удобрений 
        и пестицидов на основе информации,
        предоставленной дронами 
        для повышения урожайности 
        и снижения издержек
      </ForWhat>
      <TitleWrapper>
        <Title>
          Для чего нужен сервис?
        </Title>
      </TitleWrapper>
      <ForWhat src={quality}>
        Определение степени зрелости 
        урожая с помощью записи дронов 
        для более точного управления 
        сельскохозяйственным производством
      </ForWhat>
      <ForWhat src={approval}>
        Предоставление рекомендаций 
        для улучшения урожайности 
        на основе данных, 
        полученных от дронов, 
        с целью повышения эффективности 
        сельскохозяйственного производства
      </ForWhat>
    </Box>
  )
}

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  column-gap: 41vw;
  justify-items: center;
  border-top: 2px solid #0B6623;
  text-align: center;
  padding: 40px 20px;
  background-color: #f0f0f0;
`
const TitleWrapper = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`
const Title = styled.div`
  color: #0B6623;
  font-size: 35px;
  font-weight: 600;
  margin-bottom: 20px;
`
