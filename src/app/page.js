import Banner from "@/components/banner";
import LearningTips from "@/components/LearningTips";
import Popular from "@/components/popular";
import TopInsturctors from "@/components/TopInsturctors";

import Trending from "@/components/trending";


export default function Home() {
  return (
    <div >
      <Banner />
      <Popular />
      <Trending />
      <LearningTips />
      <TopInsturctors />
    </div>
  );
}
