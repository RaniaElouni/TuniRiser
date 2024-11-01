import Hero from "@/components/media/Hero";
import Services from "@/components/media/Services";
import Scrol from "@/components/media/Scrol";
import Podcast from "@/components/media/Podcast";
import MarketingStra from "@/components/media/MarketingStra";



export default function page() {
  return (
   <div>
    <Hero/>
    <Services />
    <Podcast/>
    <MarketingStra/>
   </div>
  );
}
