"use client";

import { NavbarComponent } from "../components/NavbarComponent";
import TableComponentCategory from "@/components/TableComponentCategory";

export default function Home() {
  return (
    <NavbarComponent>
      <div className="pt-[5%] flex justify-center z-1">
        <TableComponentCategory></TableComponentCategory>
      </div>
    </NavbarComponent>
  );
}
