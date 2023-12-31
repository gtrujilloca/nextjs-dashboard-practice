import Image from "next/image";

import { SidebarMenuItem } from "..";
import { menuItems } from "@/constatants";

const Navbar = () => {
  return (
    <div id="menu" className="bg-gray-900 min-h-screen min-w-[400px] z-10 text-slate-300 w-[400px]  left-0 overflow-y-scroll">
      <div id="logo" className="my-4 px-6">
        <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
        <p className="text-slate-500 text-sm">Manage your actions and activities</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              width={32}
              height={32}
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="profile image"
          />
          </span>
          <span className="text-sm md:text-base font-bold">
            Lorem, ipsum.
          </span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {
          menuItems.map((item, index) => {
            return <SidebarMenuItem
              key={index}
              {...item}
            />
          })
        }

      </div>
    </div>
  );
}

export default Navbar;