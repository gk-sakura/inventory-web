import {Button, Layout, Menu} from "antd";
import {useNavigate, useLocation, Outlet} from "react-router";
import {useAppStore} from "./stores/useAppStore.ts";

const {Sider, Header, Content} = Layout

function App() {
  const navigate = useNavigate()
  const {pathname} = useLocation()

  const collapsed = useAppStore(state => state.collapsed)
  const toggleCollapsed = useAppStore(state => state.toggleCollapsed)

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsed={collapsed}>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[pathname]}
          onClick={({key}) => navigate(key)}
          items={[
            {key: '/dashboard', label: '首页'},
            {key: '/products', label: '商品管理'}
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', paddingInline: 24 }}>
          <Button onClick={toggleCollapsed}>
            {collapsed ? '展开菜单' : '收起菜单'}
          </Button>
        </Header>
        <Content style={{padding: 24}}>
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  )
}

export default App
