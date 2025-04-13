'use client';
import { CustomButton } from "./Button";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="flex justify-around items-center bg-[#1E173F] w-[100%] h-[7%] fixed">
       <CustomButton color="primary" className="w-[17%] h-[60%]">categorias</CustomButton>
       <CustomButton color="secondary" className="w-[17%] h-[60%]">produtos</CustomButton>
      </div>
      {children}
    </div>
  );
};
