import './App.css';
import {
  Routes,
  Route,
  NavLink,
  useNavigate,
  useParams,
  Outlet
} from "react-router-dom";


//POST元件
function Post() {
  return (
    <>
      <p>這是 Post 元件</p>

      <div className="mt-3">
        <NavLink to="post123" className="btn btn-info me-2">
          查看 post123
        </NavLink>

        <NavLink to="post456" className="btn btn-info me-2">
          查看 post456
        </NavLink>
      </div>

      <hr />
      <Outlet />
    </>
  );
}

//建立Post ID子元件
function PostId() {
  const params = useParams();
    return (
    <p>
      這是 Post ID 子元件，Post ID: {params.postId}
    </p>
  );
}

//logOut元件
function LogOut() {
  const navigate = useNavigate();
  //useNavigate() 是：程式主動幫你換頁、不用 NavLink、 用 JS 控制跳轉
  const handleLogOut = () => {
    // 清除登入狀態（例如：localStorage、context等）
    localStorage.removeItem("isLoggedIn");
    // 導向登入頁面
    navigate("/login");
  }
  return (
    <button
      className="btn btn-danger mt-3"
      onClick={handleLogOut}>登出</button>
  );
}

const Home = () => {
  return <p>這是首頁</p>
}

const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </>
  )

};
const Login = () => {
  return <p>這是登入頁面</p>
};
const Register = () => {
  return <p>這是註冊頁面</p>
};

function App() {
  return (
    <div className="container">
      <div className="nav-link">
        <NavLink to="/" className="btn btn-secondary me-2">
          回到首頁
        </NavLink>
        <NavLink to="/register" className="btn btn-primary me-2">
          註冊頁面
        </NavLink>
        <NavLink to="/login" className="btn btn-success me-2">
          登入頁面
        </NavLink>
        <NavLink to="/todo" className="btn btn-warning me-2">
          Todo 頁面
        </NavLink>
        <NavLink to="/post" className="btn btn-warning me-2">
          Post 頁面
        </NavLink>
      </div>
      {/* Routes, Route 練習區 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="todo" element={<Todo />} />

        {/* Day45 動態路由、巢狀路由 */}
        <Route path="post" element={<Post />}>
          <Route path=":postId" element={<PostId />} />
        </Route>

        <Route path="*" element={<main style={{ padding: "1rem" }}>
          <h2>404 Not Found</h2>
        </main>} />
      </Routes>
      {/* 練習區 */}
    </div>
  );
}

export default App;
