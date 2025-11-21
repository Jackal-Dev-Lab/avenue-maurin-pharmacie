
import { Header } from "./header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";

export function Layout({ children }: { children?: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
