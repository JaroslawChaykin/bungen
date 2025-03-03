import { Container } from "src/shared/ui/Container";

export const Header = ({ children }) => {
  return (
    <header className="h-[90px] w-screen p-2">
      <Container>
        <div className="flex justify-center">
          <div className="flex items-center w-fit h-full p-4 px-10 rounded-xl bg-linear-to-r from-white/20 to-white/10 backdrop-blur-md ">
            <div className="mr-40 text-3xl font-bold">Bunker Generator</div>
            <div className="flex gap-3">{children}</div>
          </div>
        </div>
      </Container>
    </header>
  );
};
