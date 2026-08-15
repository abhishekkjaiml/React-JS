import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-[19vw] min-w-57.5 shrink-0 bg-background border-r border-border">

      <div className="flex flex-col px-5 py-5">

        <h1 className="text-[18px] font-semibold text-text-primary pb-4 border-b border-border">
          Filter By
        </h1>

        {/* Price */}
        <div className="py-5 border-b border-border">
          <h2 className="text-[14px] font-semibold text-text-primary mb-4">
            Price
          </h2>

          {/* Price filter will come here */}
        </div>

        {/* Category */}
        <div className="py-5 border-b border-border">
          <h2 className="text-[14px] font-semibold text-text-primary mb-4">
            Category
          </h2>

          {/* Category filter will come here */}
        </div>

        {/* Brand */}
        <div className="py-5 border-b border-border">
          <h2 className="text-[14px] font-semibold text-text-primary mb-4">
            Brand
          </h2>

          {/* Brand filter will come here */}
        </div>

      </div>

    </aside>
  );
};

export default Sidebar;