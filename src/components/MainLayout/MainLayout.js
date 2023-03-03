import GridContainer from "../GridContainer/GridContainer";
import MainFilter from "./MainFilter";
import Spotlight from "./Spotlight/Spotlight";
import Signup from "../Signup/Signup";

const MainLayout = () => {
  return (
    <GridContainer>
      <MainFilter />
      <Spotlight />
      <Signup />
    </GridContainer>
  );
};

export default MainLayout;
