import { Form, Input, Button, Select } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { sendRegistrationRequest } from "../../services/authService";

const { Option } = Select;

const RegisterForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(sendRegistrationRequest, {
    onSuccess: () => {
      alert("Sended request");
      navigate("/");
    },
    onError: ({ response }) => {
      alert(response.data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("register");
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  const redirectToLogin = () => {
    navigate("/");
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Form.Item
        label="First Name"
        name="firstName"
        rules={[{ required: true, message: "Please input your first name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Last name"
        name="lastName"
        rules={[{ required: true, message: "Please input your last name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your email!",
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Role"
        name="role"
        rules={[{ required: true, message: "Please select your role!" }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="0">Admin System</Option>
          <Option value="1">Admin Data</Option>
          <Option value="2">Analyst</Option>
          <Option value="3">Reader</Option>
        </Select>
      </Form.Item>

      <Form.Item
        label="Permission"
        name="permission"
        rules={[{ required: true, message: "Please select your permission!" }]}
      >
        <Select
          placeholder="Select a option and change input text above"
          allowClear
        >
          <Option value="0">Data Explicit</Option>
          <Option value="1">Data Confidential</Option>
          <Option value="2">Data Secret</Option>
          <Option value="3">Data Top Secret</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="button" onClick={redirectToLogin}>
          Back
        </Button>
        <Button type="primary" htmlType="submit">
          Send Request
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
