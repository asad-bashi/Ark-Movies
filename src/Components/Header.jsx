import styled from "styled-components";

const Main = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1.4rem 2rem;
`;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  column-gap: 1.3rem;
`;

const ListItem = styled.li`
  font-size: 1.5rem;
  font-weight: 500;
`;

function Header() {
  return (
    <Main>
      <Container>
        <div>logo</div>
        <nav>
          <List>
            <li>Home</li>
            <li>WatchList</li>
          </List>
        </nav>
      </Container>
    </Main>
  );
}

export default Header;
