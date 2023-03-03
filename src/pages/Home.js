import Animate from "../components/Animate/Animate";
import Container from "../components/Container/Container";
import Navigation from "../components/Navigation/Navigation";

const Home = () => {
  return (
    <Animate>
      <Container>
        <Navigation/>
        <div className="py-12">
         Hello Hello Hello Hello <br /> Hello Hello Hello
          Hello Hello Hello <br /> Hello Hello Hello Hello Hello Hello <br />{" "}
          Hello Hello Hello Hello Hello Hello <br /> Hello Hello Hello Hello
          Hello Hello <br /> Hello Hello Hello Hello Hello Hello <br /> Hello
          Hello Hello Hello Hello Hello <br /> Hello Hello Hello Hello Hello
          Hello <br /> Hello Hello Hello Hello Hello Hello <br /> Hello Hello
          Hello Hello Hello Hello <br /> Hello Hello Hello Hello Hello Hello{" "}
          <br /> Hello Hello Hello Hello Hello Hello <br /> Hello Hello Hello
          Hello Hello Hello <br /> Hello Hello Hello Hello Hello Hello <br />{" "}
          Hello Hello Hello Hello Hello Hello <br />{" "}
        </div>
      </Container>
    </Animate>
  );
};

export default Home;
