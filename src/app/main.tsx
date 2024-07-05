import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home } from '../pages/site/page'
import 'antd/dist/reset.css'
import { ConfigProvider } from 'antd'

const customTheme = {
  token: {
    colorPrimary: '#0B6623',
  },
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={customTheme}>
      <Home />
    </ConfigProvider>
  </React.StrictMode>,
)
