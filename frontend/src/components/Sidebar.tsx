import { sidelinks } from "@/data/sidelinks";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className=" fixed top-0 left-0 w-72 h-full overflow-y-auto bg-background border">
      <div>
        <h2 className="text-center mt-5">ClassFusion</h2>
        <nav className="grid gap-1 mt-5 px-2 ">
          {sidelinks?.map((link) => (
            <Link to={link?.href} className="h-12 flex justify-start text-wrap rounded-none px-6">
              <div className="mr-2">{link?.icon}</div>
             {link?.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
