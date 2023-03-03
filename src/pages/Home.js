import Animate from "../components/Animate/Animate";
import Container from "../components/Container/Container";
import Navigation from "../components/Navigation/Navigation";
import Search from "../components/Search/Search";
import MainLayout from "../components/MainLayout/MainLayout";

const Home = () => {
  return (
    <Animate>
      <Container>
        <Navigation />
        <div className="py-12 px-3">
          <Search />
          <MainLayout/>
        </div>
      </Container>
    </Animate>
  );
};

export default Home;
