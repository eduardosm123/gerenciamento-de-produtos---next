'use client';
import { ButtonComponent } from "./ButtonComponent";
import { useRouter } from "next/navigation";
export const NavbarComponent = ({ children }: { children: React.ReactNode }) => {
   const router = useRouter();
  return (
    <div>
      <div className="flex justify-around items-center bg-[#1E173F] shadow-lg w-[100%] h-[7%] fixed">
       <ButtonComponent color="primary" className="w-[17%] h-[60%]" onClick={()=> router.push("/")}>categorias</ButtonComponent>
       <ButtonComponent color="secondary" className="w-[17%] h-[60%]">produtos</ButtonComponent>
      </div>
      {children}
    </div>
  );
};
