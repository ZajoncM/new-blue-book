import { Table, Space } from "antd";
import DeleteButton from "../DeleteButton/DeleteButton";
import EditButton from "../EditButton/EditButton";

const columns = [
  {
    title: "Observation Date",
    dataIndex: "observationDate",
    key: "observationDate",
  },
  {
    title: "Coordinates",
    dataIndex: "coordinates",
    key: "coordinates",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Observation Material Directory",
    dataIndex: "observationMaterialDirectory",
    key: "observationMaterialDirectory",
  },
  {
    title: "Permission",
    dataIndex: "permission",
    key: "permission",
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

const ObservationTable = ({ data }) => {
  console.log(data);
  return <Table columns={columns} dataSource={data} />;
};

export default ObservationTable;
