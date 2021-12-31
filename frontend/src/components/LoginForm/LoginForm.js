import { Form, Input, Button } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../services/authService";

const LoginForm = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(loginUser, {
    onSuccess: () => {
      navigate("dashboard");
    },
    onError: ({ response }) => {
      alert(response.data.message);
    },
    onSettled: () => {
      queryClient.invalidateQueries("login");
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  const redirectToRegister = () => {
    navigate("register");
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
        <Button htmlType="button" onClick={redirectToRegister}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
