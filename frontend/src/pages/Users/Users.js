import { useQuery } from "react-query";
import { Typography, Divider } from "antd";
import { showUsers } from "../../services/userService";
import UsersTable from "../../components/UsersTable/UsersTable";
const { Title } = Typography;
const Users = () => {
  const { data, isLoading } = useQuery("showUsers", showUsers);

  if (isLoading) return "Loading...";
  return (
    <Typography>
      <Title>Users</Title>
      <Divider />
      <UsersTable data={data} />
    </Typography>
  );
};

export default Users;
