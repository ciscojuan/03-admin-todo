import Sidebar from "@/components/Sidebar";
import TopMenu from "@/components/TopMenu";
import DashboardPage from "./page";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar />

      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6">
          {children}
        </div>
      </div>
    </>
  );
}
