import { Routes, Route,Navigate } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Detail from "./Pages/Detail";



function App() {
  return (
    <Layout >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail" element={<Detail />} />
        <Route path="*"  element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>


  )
}

export default App