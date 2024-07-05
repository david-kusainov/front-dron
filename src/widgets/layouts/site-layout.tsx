import { Layout } from 'antd'
import { Content, Footer, Header } from 'antd/es/layout/layout'
import { ReactNode } from 'react'

interface SiteLayoutProps {
  children: ReactNode
}

export const SiteLayout = ({ children }: SiteLayoutProps) => {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header>123</Header>
      <Content>{children}</Content>
      <Footer>123</Footer>
    </Layout>
  )
}
