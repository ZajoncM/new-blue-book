import { Table, Space } from "antd";
import AcceptButton from "../AcceptButton/AcceptButton";

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
    title: "Action",
    key: "action",
    render: (a) => (
      <Space size="middle">
        <AcceptButton email={a.email} />
      </Space>
    ),
  },
];

const RequestTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default RequestTable;
