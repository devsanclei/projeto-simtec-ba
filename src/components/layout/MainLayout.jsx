import Sidebar from "./Sidebar";
import Header from "./Header";
import Content from "./Content";

export default function MainLayout({ children }) {
  return (
    <div className="flex h-screen">

      <Sidebar />

      <div className="flex flex-col flex-1">

        <Header />

        <Content>
          {children}
        </Content>

      </div>

    </div>
  );
}