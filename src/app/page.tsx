'use client'
 
import { NavbarComponent } from "../components/NavbarComponent";
import TableComponentCategory from "@/components/TableComponentCategory";

export default function Home() {

 
  return (
     <NavbarComponent>
         
        <div className="pt-[10%] flex justify-center">
          <TableComponentCategory></TableComponentCategory>
        </div>
     </NavbarComponent>
  );
}
