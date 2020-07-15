import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
  <div className="flex justify-between items-center w-full h-12 bg-red-500 px-4">
    <div>Logo</div>
    <div className="contacts">
      <FontAwesomeIcon
        icon={["fab", "github"]}
        size="2x"
        className="cursor-pointer"
        onClick={() =>
          window.open("https://github.com/darge98/pokedex", "_blank")
        }
      />
    </div>
  </div>
);

export default Navbar;
