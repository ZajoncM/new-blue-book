import { Table, Space } from "antd";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const columns = [
  {
    title: "First Name",
    dataIndex: "firstName",
    key: "firstName",
  },
  {
    title: "Last Name",
    dataIndex: "lastName",
    key: "lastName",
  },
  {
    title: "Permission",
    dataIndex: "permission",
    key: "permission",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "Phone Number",
    dataIndex: "phoneNumber",
    key: "phoneNumber",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Registration Date",
    dataIndex: "registrationDate",
    key: "registrationDate",
    render: (registrationDate) => {
      const date = new Date(parseInt(registrationDate));

      return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
    },
  },
  {
    title: "Action",
    key: "action",
    render: (user) => (
      <Space size="middle">
        <DeleteButton username={user.username} />
        <EditButton username={user.username} />
      </Space>
    ),
  },
];

const UsersTable = ({ data }) => {
  console.log(data);
  return <Table columns={columns} dataSource={data} />;
};

export default UsersTable;
