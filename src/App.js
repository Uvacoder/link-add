import Nav from "./components/Nav";
import Header from "./components/Header";
import List from "./components/List";
import ListHeader from "./components/ListHeader";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import Modal from "./components/Modal";

function App() {

  const { modals } = useSelector(state => state.modal);

  return (
    <>
      <div className="app">
        <Nav />
        <div className="ml-[85px] h-full flex flex-col">
          <Header />
          <ListHeader />
          <List />
        </div>
      </div>
      {modals.length > 0 ? modals.map((modal, key) => <Modal key={key} data={modal} />) : ""}
      <Toaster position="top-right" />
    </>
  );
}

export default App;
