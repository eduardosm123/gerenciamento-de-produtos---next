
import TextComponent from "@/components/TextComponent";
export default function FormTitle({ children }: {children: React.ReactNode}) {
  return (
    <TextComponent>
      <span className="text-white">{children}</span>
    </TextComponent>
  );
}
