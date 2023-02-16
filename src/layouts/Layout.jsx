import { Outlet, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="text-2xl flex justify-center bg-indigo-700 text-white p-3">
          <NavLink to="/">
            <h1>SRECMS</h1>
          </NavLink>
        </div>
        <nav className="bg-slate-200 p-5 ">
          <NavLink to="/" className="mr-3 hover:bg-slate-400 p-3 rounded">
            Home
          </NavLink>
          <NavLink
            to="/dashboard"
            className="mr-3 hover:bg-slate-400 p-3 rounded"
          >
            Dashboard
          </NavLink>
        </nav>
      </header>
      <main className="p-5">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
