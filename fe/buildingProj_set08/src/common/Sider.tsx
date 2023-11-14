import { useEffect, useState } from "react";
import { GiFallingStar } from "react-icons/gi";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { getProject } from "../api/api";

const Sider = () => {
  const [state, setState] = useState([]);
  useEffect(() => {
    getProject().then((res) => {
      setState(res);
      console.log(res[0].task.sleep);
    });
  }, []);
  return (
    <Container>
      <Main>
        <Top>
          <Image />
          <COntent>
            <Title>Dashboard</Title>
            <TitleSub>Software Project</TitleSub>
          </COntent>
        </Top>
        <TitleSub>
          You're on a <strong>FREE</strong> plan
        </TitleSub>

        <Upgrade>
          <Icon />
          <span>Upgrade</span>
        </Upgrade>

        <br />
        <hr />
        <br />

        <Project>Project</Project>

        {state?.map((props: any) => (
          <Link key={props._id} to={`/project/${props._id}`}>
            <ProjectTask
              onClick={() => {
                console.log(props);
              }}
            >
              {props.name}
            </ProjectTask>
          </Link>
        ))}

        <br />
        <hr />
        <br />

        <But>
          <Button>Add Project</Button>
        </But>
      </Main>
    </Container>
  );
};

export default Sider;

const But = styled.div`
  width: 100%;
  justify-content: center;
  display: flex;
`;

const Button = styled.div`
  text-transform: uppercase;
  font-size: small;
  background-color: #7700ff;
  padding: 10px 18px;
  border-radius: 3px;
  color: white;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    transform: scale(1.02);
  }
`;
const ProjectTask = styled.div`
  padding: 10px;
  margin: 6px 0;

  border-radius: 3px;
  transition: all 360ms;
  &:hover {
    cursor: pointer;
    background-color: #7700ff;
  }
`;

const Project = styled.div`
  font-weight: 600;
  font-size: 17px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

const Icon = styled(GiFallingStar)`
  font-size: 30px;
  margin-right: 10px;
  color: #7700ff;
`;

const Upgrade = styled.div`
  margin-top: 30px;
  border: 1px solid #7700ff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  padding: 10px 0;
`;

const TitleSub = styled.div`
  font-size: 14px;
`;

const Title = styled.div`
  font-weight: 600;
  line-height: 1.2;
  text-transform: uppercase;
`;

const COntent = styled.div`
  margin-left: 10px;
`;

const Image = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 3px;
  background-color: #7700ff;
`;

const Top = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Main = styled.div`
  padding: 0 10px;
  margin-top: 50px;
`;

const Container = styled.div`
  width: 200px;
  height: calc(100vh - 70px);
  position: fixed;
  border-right: 1px solid silver;
`;
