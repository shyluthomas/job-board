import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { Toaster } from "@/components/ui/toaster";
import { Outlet } from "react-router-dom";
import ModalHOC from "./ModalHOC";

const FullLayout = (): JSX.Element => {
  return (
    <div className=" h-fit">
      <Menubar className="flex justify-between mx-auto h-20 bg-stone-950 sticky top-0">
        <MenubarMenu>
          <div className="flex">
            <div className="text-white text-2xl p-6">
              <span>Business Manager</span>
            </div>

            <MenubarTrigger className="text-white text-xl p-6">
              Business
            </MenubarTrigger>
          </div>
        </MenubarMenu>
      </Menubar>
      <Outlet></Outlet>
      <footer className="text-white text-center  p-8">
        <p>Copyright @Shylu 2024 All rights reserved</p>
      </footer>
      <ModalHOC></ModalHOC>
      <Toaster />
    </div>
  );
};

export default FullLayout;
