import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const AcceptButton = ({ username }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`${username}`);
  };

  return (
    <Button type="link" onClick={handleNavigate}>
      Edit
    </Button>
  );
};

export default AcceptButton;
