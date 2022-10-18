import React from "react";

function SideBar( {categories} ) {
  return (
    <aside>
      <nav>
        <h3>Categories</h3>
        {categories.map((category) => (
          <a
            href="#"
            target="_blank"
            key={category.id}
            rel="noreferrer"
          >
            {category.name}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default SideBar;
