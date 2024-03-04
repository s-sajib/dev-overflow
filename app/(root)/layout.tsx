import Navbar from "@/components/shared/navbar/Navbar";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative">
      <Navbar />
      <div className="flex">
        LeftSidebar
        <section>
          <div>{children}</div>
        </section>
        Right Sidebar
      </div>
      Toaster Footer
    </main>
  );
};

export default Layout;
