import { Button } from "antd"
import menu from '../../public/menu.png'

export const MenuButton = () => {
  return (
      <Button type="primary" style={{display:'inline', background:'none', boxShadow:'none', height:'80px', marginLeft:'40px'}}>
        <img src={menu} ></img>
      </Button>
  )
}
