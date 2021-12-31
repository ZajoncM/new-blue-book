import { useQuery } from "react-query";
import { Typography, Divider } from "antd";
import ObservationTable from "../../components/ObservationTable/ObservationTable";
import { showObservations } from "../../services/observationService";
const { Title } = Typography;
const Observations = () => {
  const { data, isLoading } = useQuery("showObservations", showObservations);

  if (isLoading) return "Loading...";
  return (
    <Typography>
      <Title>Observations</Title>
      <Divider />
      <ObservationTable data={data} />
    </Typography>
  );
};

export default Observations;
