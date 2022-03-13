import 'react-vertical-timeline-component/style.min.css';
import { AnimatePresence } from "framer-motion";

import Background from "./components/Background";
import Nav from './components/Nav';
import Main from './components/Main';
function App() {


  return (
    <AnimatePresence initial={false}>
      <div
        className="container-portfolio flex min-h-screen flex-col relative   items-center justify-center bg-primary overflow-hidden">
        <Nav />
        <Background />
        {/* Main */}
        <Main />
      </div>
    </AnimatePresence>
  );
}

export default App;
