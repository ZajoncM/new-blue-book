import { useQuery } from "react-query";
import { Typography, Divider } from "antd";
import { checkUser } from "../../services/authService";
import ProfileForm from "../../components/ProfileForm/ProfileForm";

const { Title } = Typography;

const Profile = () => {
  const { data } = useQuery("checkUser", checkUser);

  if (!data) return "Loading...";

  const { firstName, lastName } = data;
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

export default Profile;
