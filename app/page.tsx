import Header from "./ui/header/header";
import Partners from "./ui/partners/partners";
import Services from "./ui/services/services";
import Testimonials from "./ui/testimonials/testimonials";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between gap-20'>
      <Header />
      {/* <Partners /> */}
      <Services />
      <Testimonials />
    </main >
  );
}
