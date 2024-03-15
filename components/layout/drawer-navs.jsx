import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";

import { Menu } from "lucide-react";
import SiteNavs from "./site-navs";

const DrawerNavs = ({ navLinks, activeTab, setActiveTab }) => {
  return (
    <div className="md:hidden transition duration-300 ease-in-out">
      <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline" size="xs">
            <Menu />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto  w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Menu</DrawerTitle>
            </DrawerHeader>
            <SiteNavs
              drawer={true}
              navLinks={navLinks}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="default">Close</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default DrawerNavs;
