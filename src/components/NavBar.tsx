import { CiSearch } from "react-icons/ci";

function NavBar() {
  return (
    <>
      <nav className="top-nav">
        <a className="logo-link" href="#">
          HarisZ
        </a>
        <div className="search-bar">
          <form>
            <input type="text" placeholder="Search" />
            <button type="submit">
              <CiSearch className="search-icon" />
            </button>
          </form>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
