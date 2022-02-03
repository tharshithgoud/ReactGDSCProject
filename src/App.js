import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainNavigation from "./components/layout/MainNavigation/MainNavigation.component";
import Home from "./pages/Home/Home.page";
import About from "./pages/About/About.page";
import Blog from "./pages/Blog/Blog.page";
import ContactUs from "./pages/ContactUs/ContactUs.page";
import Projects from "./pages/Projects/Projects.page";
import Admin from "./pages/Admin/Admin.page";
import Timeline from "./pages/Timeline/Timeline.page";
import NotFound from "./pages/NotFound/NotFound.page";
import Team from "./pages/Team/Team.page";
import Gallery from "./pages/Gallery/Gallery.page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainFooter from "./components/layout/Footer/MainFooter.component";
import "animate.css/animate.min.css";

function App() {
  return (
    <Router>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/team" element={<Team />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <MainFooter />
    </Router>
  );
}

export default App;
