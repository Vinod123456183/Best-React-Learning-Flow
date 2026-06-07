import AdvanceFormHandling from "./components/reusable/AdvanceFormHandling";
import CardList from "./components/reusable/CardList";
import Form from "./components/reusable/Form";
import Header from "./components/reusable/Header";
import MyTaskManager from "./components/reusable/MyTaskManager";
import OptimiseForm from "./components/reusable/OptimiseForm";
import PersistTask from "./components/reusable/PersistTask";
// import ReactRouting from "./components/reusable/ReactRouting";
import TagSelector from "./components/reusable/TagSelector";
import TaskManager from "./components/reusable/TaskManager";
import FrontPage from "./pages/FrontPage";

function HomePage() {
  const cards = [
    {
      id: 1,
      title: "Card One",
      description: "This is card one",
      imageUrl: "https://via.placeholder.com/150",
    },
    { id: 2, title: "Card Two", description: "This is card two" },
    {
      id: 3,
      title: "Card Three",
      description: "This is card three",
      imageUrl: "https://via.placeholder.com/150",
    },
  ];
  return (
    <div>
      <Header /> {/* Reusable Component */}
      <FrontPage />
      {/* Props Handling  */}
      <Form /> {/* Form Handling */}
      <AdvanceFormHandling /> {/* Best Form Handling */}
      <TagSelector />
      <OptimiseForm />
      <CardList cards={cards} />
      <TaskManager />
      <PersistTask />
      <MyTaskManager />
      {/* <ReactRouting /> */}
    </div>
  );
}

export default HomePage;
