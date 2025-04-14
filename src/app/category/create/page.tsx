"use client";

import FormComponentCategory from "@/components/FormComponentCategory";
import { NavbarComponent } from "@/components/NavbarComponent";

export default function Page() {
  return (
    <NavbarComponent>
      <div className="pt-[10%] flex justify-center flex-row">
        <div className="w-[40%]">
            <section className="bg-[#1E173F] h-[3.4375rem] flex justify-center items-center font-bold">
                <h1 className="text-white">Formulário de cadastro de categorias</h1>
            </section>
            <section className="bg-[#EEF8FF] w-[40vw] h-[30.625rem] flex justify-center items-center font-bold">
                <FormComponentCategory></FormComponentCategory>
            </section>
        </div>
       
      </div>
    </NavbarComponent>
  );
}
