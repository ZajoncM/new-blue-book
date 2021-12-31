import { Layout, Card, Row, Col } from "antd";
import styled from "styled-components";
import RegisterForm from "../../components/RegisterForm/RegisterForm";

const StyledRow = styled(Row)`
  height: 100vh;
`;

const { Content } = Layout;

const Register = () => {
  return (
    <Content>
      <StyledRow justify="center" align="middle">
        <Col span={8}>
          <Card>
            <RegisterForm />
          </Card>
        </Col>
      </StyledRow>
    </Content>
  );
};

export default Register;
