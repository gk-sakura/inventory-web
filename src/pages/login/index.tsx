import styles from './index.module.scss'
import {Button, Form, Input, Modal, Row} from "antd";
import {useState} from "react";
import {useAuthStore} from "@/stores/useAuthStore.ts";
import {register} from "@/services/auth.ts";
import {showSuccess} from "@/utils/feedback.ts";
import {useNavigate} from "react-router";

type LoginFormValues = {
  username: string
  password: string
}

export default function LoginPage() {
  const [formLogin] = Form.useForm<LoginFormValues>()
  const [formRegister] = Form.useForm<LoginFormValues>()
  const [showRegister, setShowRegister] = useState<boolean>(false)
  const login = useAuthStore(state => state.login)
  const navigate = useNavigate()

  const handleSubmitLogin = async (values: LoginFormValues) => {
    await login(values.username, values.password)
    showSuccess("登录成功")
    navigate("/dashboard")

  }

  const handleShowRegister = () => {
    setShowRegister(true)
  }
  const handleCloseRegister = () => {
    setShowRegister(false)
  }
  const handleSubmitRegister = async (values: LoginFormValues) => {
    await register(values)
    showSuccess("注册成功")
    handleCloseRegister()
  }
  return (
    <div className={styles.page}>
      <Form<LoginFormValues>
        form={formLogin}
        initialValues={{
          username: '',
          password: ''
        }}
        onFinish={handleSubmitLogin}
        className={styles.loginForm}
        labelAlign="right">
        <div className={styles.loginFormTitle}>登录</div>
        <Form.Item label="用户名" name="username">
          <Input/>
        </Form.Item>
        <Form.Item label="密码" name="password">
          <Input type="password"/>
        </Form.Item>
        <Row style={{ width: '100%'}} justify="space-around">
          <Button type="primary" htmlType="submit">
            登录
          </Button>
          <Button type="primary" onClick={handleShowRegister}>
            注册
          </Button>
        </Row>
      </Form>
      <Modal
        title={"注册"}
        open={showRegister}
        onCancel={handleCloseRegister}
        onOk={() => formRegister.submit()}>
        <Form<LoginFormValues>
          form={formRegister}
          onFinish={handleSubmitRegister}
          initialValues={{
            username: '',
            password: ''
          }}>
          <Form.Item label={"用户名"} name={"username"}>
            <Input placeholder={"请输入用户名"} />
          </Form.Item>
          <Form.Item label={"密码"} name={"password"}>
            <Input placeholder={"请输入密码"} type={"password"} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
