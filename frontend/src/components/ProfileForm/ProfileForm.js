import { Form, Input, Button, Select } from "antd";
import { useMutation, useQueryClient } from "react-query";
import { editUser } from "../../services/userService";

const { Option } = Select;

const ProfileForm = ({ user }) => {
  console.log(user);
  const queryClient = useQueryClient();
  const { mutate } = useMutation(editUser, {
    onSuccess: (data) => {
      alert("user edited");
    },
    onError: () => {
      alert("there was an error");
    },
  });

  const onFinish = (values) => {
    mutate(values);
  };

  return (
    <Form
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 10 }}
      initialValues={user}
      onFinish={onFinish}
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
        <Input disabled={true} />
      </Form.Item>

      <Form.Item
        label="Phone Number"
        name="phoneNumber"
        rules={[{ required: true, message: "Please input your phone number!" }]}
      >
        <Input />
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

      <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Edit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProfileForm;
