import { useQuery } from "react-query";
import { Typography, Divider } from "antd";
import { findUser } from "../../services/userService";
import ProfileForm from "../../components/ProfileForm/ProfileForm";
import { useParams } from "react-router-dom";
const { Title } = Typography;

const User = () => {
  const { username } = useParams();

  const { data } = useQuery("findUser", () => findUser(username));

  if (!data) return "Loading...";

  const { firstName, lastName } = data;
  console.log(data);
  return (
    <Typography>
      <Title>
        {firstName} {lastName}
      </Title>
      <Divider />
      <ProfileForm user={data} />
    </Typography>
  );
};

export default User;
