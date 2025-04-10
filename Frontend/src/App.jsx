import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import TeacherLogin from "./Teacher-Component/TeacherLogin"
import StudentList from "./Teacher-Component/StudentList"
import { DeleteList } from "./Teacher-Component/DeleteList"
import StudentLogin from "./Student-Components/StudentLogin"
import CreatePage from "./Student-Components/CreatePage"
import List from "./Student-Components/List"
import Edit from "./Student-Components/Edit"

function App() {

  return (
    <>
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/teacherlogin" element={<TeacherLogin />} />
        <Route path="/studentlist" element={<StudentList />} />
        <Route path="/delete/:id" element={<DeleteList />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/list/:id" element={<List />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

    </div>
    </>
  )
}

export default App
