import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import Sider from "./Sider";
import styled from "styled-components";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Main>
        <Sider />
        <Holder>
          <Div>
            <Outlet />
          </Div>
        </Holder>
      </Main>
    </div>
  );
};

const Div = styled.div`
  width: calc(100% - 200px);
`;
const Holder = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding-left: 10px;
  margin-top: 20px;
`;
const Main = styled.div`
  display: flex;
`;
