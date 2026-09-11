import {App} from 'antd'

type MessageApi = ReturnType<typeof App.useApp>['message']

let messageApi: MessageApi | null = null

export const setMessageApi = (api: MessageApi): void => {
  messageApi = api
}

export const showError = (content: string) => {
  messageApi?.error(content)
}

export const showSuccess = (content: string) => {
  messageApi?.success(content)
}
