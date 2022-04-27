import Header from "./components/NavBar/Header";
import TodoContextProvider from "./context/TodoContext";
import MainRoutes from "./MainRoutes";

function App() {
  return (
   <>
   <TodoContextProvider>
       <Header />
       <MainRoutes/>
   </TodoContextProvider>
   </>
  );
}

export default App;
