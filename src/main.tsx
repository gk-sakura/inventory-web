import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {App as AntdApp, ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN'
import {RouterProvider} from 'react-router/dom'
import {router} from './router'
import 'antd/dist/reset.css'
import FeedbackInitializer from "@/components/FeedBackInitializer.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: {
          colorPrimary: '#1677ff'
          }
      }}
    >
      <AntdApp>
        <FeedbackInitializer />
        <RouterProvider router={router}/>
      </AntdApp>
    </ConfigProvider>
  </StrictMode>,
)
