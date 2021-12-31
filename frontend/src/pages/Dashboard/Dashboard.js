import { useQuery } from "react-query";
import { checkToken } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { Layout } from "antd";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../Profile/Profile";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Requests from "../Requests/Requests";
import Users from "../Users/Users";
import User from "../User/User";

import Observations from "../Observations/Observations";

const { Content, Header, Footer } = Layout;

const StyledContent = styled(Content)`
  margin: 20px;
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const { isLoading, error } = useQuery("checkUser", checkToken);

  if (isLoading) return "Loading...";

  if (error) {
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <>
      <Sidebar />
      <Layout>
        <Header>Header</Header>
        <StyledContent>
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/users">
              <Route index element={<Users />} />
              <Route path=":username" element={<User />} />
            </Route>
            <Route path="/observations" element={<Observations />} />
          </Routes>
        </StyledContent>
        <Footer>Footer</Footer>
      </Layout>
    </>
  );
};

export default Dashboard;
