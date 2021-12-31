import { useMutation, useQueryClient } from "react-query";
import { Button } from "antd";
import { deleteUser } from "../../services/userService";

const AcceptButton = ({ username }) => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(deleteUser, {
    onSuccess: () => {},
    onSettled: () => {
      queryClient.invalidateQueries("deleteUser");
    },
  });

  const handleAccept = () => {
    mutate(username);
  };

  return (
    <Button type="link" onClick={handleAccept}>
      Delete
    </Button>
  );
};

export default AcceptButton;
