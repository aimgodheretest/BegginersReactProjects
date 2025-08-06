import Accordion from "./components/Accordion.jsx";
import Calculator from "./components/Calculator";
import Counter from "./components/Counter";
import Form from "./components/Form.jsx";
import Meals from "./components/Meals";
import SearchIcon from "./components/SearchIcon";
import Testimonials from "./components/Testimonials";
import Todo from "./components/Todo";
import Toggle from "./components/Toggle";
// import { accordionData } from "./utils/content";

const App = () => {
  return (
    <div>
      {/* <Counter/> */}
      {/* <Todo /> */}
      {/* <Meals/> */}
      {/* <Calculator /> */}
      {/* <Toggle /> */}
      {/* <SearchIcon/> */}
      {/* <Testimonials /> */}

      {/* <div className="accordion">
        {accordionData.map(({ title, content }) => {
          return <Accordion title={title} content={content} />;
        })}
      </div> */}

      <Form/>
    </div>
  );
};

export default App;
