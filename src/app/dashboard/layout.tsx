import { Navbar } from "@/components";


export default function DashboradLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-slate-100 overflow-y-scroll h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Navbar />
        <div className="p-2 w-full text-slate-900" >
          {
            children
          }
        </div>
      </div>
    </div>
  );
}