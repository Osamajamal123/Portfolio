import Navigation from "./components/Navigation";
import Greetings from "./containers/Greetings";
import Skills from "./containers/Skills";
import Proficiency from "./containers/Proficiency";
import Education from "./containers/Education";
import Experience from "./containers/Experience";
import Projects from "./containers/Projects";
import GithubProfile from "./containers/GithubProfile";
import Feedbacks from "./containers/Feedbacks";

const App = () => {
  return (
    <div>
      <Navigation />
      <Greetings />
      <Skills />
      {/* <Proficiency /> */}
      <Education />
      <Experience />
      <Projects />
      <Feedbacks />
      <GithubProfile />
    </div>
  );
};
export default App;
