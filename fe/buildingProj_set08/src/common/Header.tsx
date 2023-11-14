import { styled } from "styled-components";

export const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Holder>
            <Logo />
            <Search>
              <Icon />
              <Input>gdgd</Input>
            </Search>
          </Holder>
          <Holder>
            <Button>Create</Button>
            <Avatar>P</Avatar>
          </Holder>
        </Main>
      </Container>
    </div>
  );
};

const Avatar = styled.div`
  display: flex;
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background-color: darkorange;
  color: white;
  border-radius: 50%;
`;
const Button = styled.div`
  padding: 10px 18px;
  background-color: #680068fd;
  color: white;
  border-radius: 5px;
  margin-right: 10px;
  font-family: Poppins;
`;
const Input = styled.div`
  flex: 1;
  height: 100%;
  outline: none;
  border: 0;
  &::placeholder {
    font-family: Poppins;
  }
`;
const Icon = styled.div`
  font-size: 30px;
`;
const Search = styled.div`
  border: 1px solid silver;
  border-radius: 30px;
  width: 300px;
  align-items: center;
  display: flex;
  padding-left: 10px;
`;
const Logo = styled.div`
  height: 40px;
  margin-right: 40px;
`;
const Holder = styled.div`
  display: flex;
  align-items: center;
`;
const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid silver;
`;
