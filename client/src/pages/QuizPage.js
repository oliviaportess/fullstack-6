import Navbar from "../components/Navbar";
import BackgroundScreen from "../components/BackgroundScreen";
import MainHeading from "../components/MainHeading";
import Button from "../components/Button";
import gridImage from "../images/grid.png";
import FetchQuestion from "../components/quiz/FetchQuestion";

function QuizPage() {

  return (
    <div className="container">
      <Navbar />
      <div className="layout-container">
        <BackgroundScreen url={gridImage} />
        <div className="content">
          <MainHeading title="Question Number Placeholder" />
          <FetchQuestion />
          <div>Answers Placeholder</div>
          <Button
            text={"Next question"}
            className="big-font"
          />
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
