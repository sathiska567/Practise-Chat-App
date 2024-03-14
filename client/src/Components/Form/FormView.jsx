import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';
import io from "socket.io-client"

const socket = io.connect("http://localhost:8080");
console.log(socket);


const FormView = () => {

 
const onFinish = async (values) => {

  // if (currentMessage !== "") {
  //   const messageData = {
  //     room: room,
  //     author: username,
  //     time:  new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes(),
  //   };

  if(values !== ""){
     const messageData = {
       message:"hello"
     }
     const response = await socket.emit("send_message", messageData);
     
     console.log(response)
  }
  

};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};


  return (
    <>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>


        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    </>
  )
}



export default FormView;