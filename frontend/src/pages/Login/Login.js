import { Layout, Card, Row, Col } from "antd";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm/LoginForm";

const StyledRow = styled(Row)`
  height: 100vh;
`;

const { Content } = Layout;

const Login = () => {
  return (
    <Content>
      <StyledRow justify="center" align="middle">
        <Col span={8}>
          <Card>
            <LoginForm />
          </Card>
        </Col>
      </StyledRow>
    </Content>
  );
};

export default Login;
