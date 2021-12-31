import { useQuery } from "react-query";
import { Typography, Divider } from "antd";
import RequestTable from "../../components/RequestTable/RequestTable";
import { showRequests } from "../../services/requestService";

const { Title } = Typography;

const Requests = () => {
  const { data, isLoading } = useQuery("showRequests", showRequests);

  if (isLoading) return "Loading...";

  return (
    <Typography>
      <Title>Requests</Title>
      <Divider />
      <RequestTable data={data} />
    </Typography>
  );
};

export default Requests;
