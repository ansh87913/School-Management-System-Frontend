import React, { useContext } from "react";
import { FaGraduationCap } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserContext from "../../Hooks/UserContext";
import { toast } from "react-toastify";

const Header = () => {
  const { setUser, setPaperList } = useContext(UserContext);
  const logout = () => {
    setUser("");
    setPaperList([]);
    localStorage.clear();
    toast.info("Logged Out");
  };
  return (
    <header className="absolute top-0 flex w-full justify-between py-1 bg-slate-950 text-slate-50 dark:bg-slate-950 font-mono">
      <Link
        to="/dash"
        className="ml-4 flex items-center gap-2 px-3 py-1 text-2xl font-semibold sm:text-3xl"
      >
        <FaGraduationCap className="m-1" />
        <h1 className="m-0 pr-1 font-mono text-slate-50 decoration-violet-500 decoration-[3px] underline-offset-[3px] hover:underline">
          EDCONNECT
        </h1>
      </Link>
      <Link
        to="./"
        className="text-md m-2 mr-4 flex items-center rounded-md p-[7px] font-semibold bg-blue-700  hover:bg-red-700 hover:text-slate-100"
        onClick={() => logout()}
      >
        <p>Logout</p>
      </Link>
    </header>
  );
};

export default Header;
