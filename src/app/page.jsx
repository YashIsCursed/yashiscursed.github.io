import { motion } from "framer-motion";
import Info from "/src/component/Info/Info.jsx"
import List from "/src/component/List/List.jsx"
import Work from "/src/component/Work/Work.jsx"

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Info/>
      <Work/>
    </div>
  );
}
