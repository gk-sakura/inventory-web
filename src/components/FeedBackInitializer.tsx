import {App} from 'antd'
import {useEffect} from "react";
import {setMessageApi} from "@/utils/feedback.ts";

export default function FeedbackInitializer() {
  const {message} = App.useApp()

  useEffect(() => {
    setMessageApi(message)
  }, [message]);

  return null
}
