import { Layout, Menu } from "antd";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const { Sider } = Layout;

const StyledSider = styled(Sider)`
  width: 300px;
  background: rgba(255, 255, 255, 0.3);
`;

const items = ["observations", "users", "requests", "profile"];

const Sidebar = () => {
  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate(`/dashboard/${item}`);
  };

  return (
    <StyledSider width={200}>
      <Menu mode="inline" style={{ height: "100%", borderRight: 0 }}>
        {items.map((item) => (
          <Menu.Item key={item} onClick={() => handleNavigate(item)}>
            {item.toUpperCase()}
          </Menu.Item>
        ))}
      </Menu>
    </StyledSider>
  );
};

export default Sidebar;
