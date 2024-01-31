import Header from "./ui/header/header";
import Services from "./ui/services/services";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Header />
      <Services />
    </main >
  );
}
