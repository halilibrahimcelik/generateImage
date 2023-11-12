import HomePageContainer from "@/containers/homePage";
import { MainProvider } from "@/hooks/useMain";

export default function Home() {
  return (
    <main>
      <MainProvider>
        <HomePageContainer />
      </MainProvider>
    </main>
  );
}
