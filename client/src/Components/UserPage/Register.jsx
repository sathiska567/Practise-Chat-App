import React, { useEffect } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import axios from 'axios';


const onFinish = async(values) => {
  console.log('Success:', values);
  const response = await axios.post("http://localhost:8080/api/v1/users/create-user",{values})
  console.log(response);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};



const Register = () => {


  const getAllUserData = async () => {
    try {
      const UserDataResponse = await axios.get("http://localhost:8080/api/v1/users/get-all-user");
      console.log(UserDataResponse.data);  // Access the data property of the response
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  useEffect(() => {
    getAllUserData();
  }, []);




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
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
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
  


export default Register;