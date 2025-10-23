import Home from "./components/Home";
import Member from "./components/Member";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { members } from "./interfaces/member";

function App() {
  return (
    <>
      {/* 
        
      */}
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <div className="bg-background-light dark:bg-background-dark font-display text-gray-800 dark:text-gray-200">
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            {members.map((member) => (
              <Route
                key={member.route} // 
                path={`/${member.route}`}
                element={<Member member={member} />}
              />
            ))}
            {/* // */}
            {/* // */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
