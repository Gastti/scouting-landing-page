import Header from "./ui/header/header";
import Services from "./ui/services/services";
import SocialWidgets from "./ui/socialwidgets/socialwidgets";
import Testimonials from "./ui/testimonials/testimonials";
import WhoWeAre from "./ui/whoweare/whoweare";

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-between'>
      <Header />
      <Services />
      <WhoWeAre />
      <Testimonials />
      <SocialWidgets />
    </main >
  );
}
