import { useMutation, useQueryClient } from "react-query";
import { Button } from "antd";
import { acceptRequest } from "../../services/requestService";

const AcceptButton = ({ email }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(acceptRequest, {
    onSuccess: () => {},
    onSettled: () => {
      queryClient.invalidateQueries("acceptRequest");
    },
  });

  const handleAccept = () => {
    mutate(email);
  };

  return (
    <Button type="link" onClick={handleAccept}>
      Accept
    </Button>
  );
};

export default AcceptButton;
