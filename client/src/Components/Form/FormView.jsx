import React from 'react';
import { Button, Form, Input } from 'antd';
import io from "socket.io-client";

const socket = io.connect("http://localhost:8080");

const FormView = () => {

  const onFinish = (values) => {
    const messageData = {
      message: values.username, // Assuming the message is the username entered in the form
    };
    socket.emit("send_message", messageData);
  };

  

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    <Form
      name="basic"
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormView;
