import { ThemeProvider } from "@material-ui/core/styles";
import SobreMi from "./pages/SobreMi/SobreMiPage";
import QueHago from "./pages/QueHago/QueHagoPage";
import theme from "./Muitheme";
import Header from "./components/Header/Header";
import AnimationOnScroll from "./utils/AnimationScroll";
import Proyectos from "./pages/Proyectos/ProyectosPage";
import Contactame from "./pages/Contactame/ContactamePage";
import { Provider } from "./context/context";

const App = () => {
  AnimationOnScroll();

  return (
    <ThemeProvider theme={theme}>
      <Provider>
        <Header />
        <SobreMi />
        <QueHago />
        <Proyectos />
        <Contactame />
      </Provider>
    </ThemeProvider>
  );
};

export default App;
