import { Coffees } from "./components/Coffees";
import { Intro } from "./components/Intro";

export function Home() {
  return (
    <div>
      <Intro />
      <Coffees />
    </div>
  )
}