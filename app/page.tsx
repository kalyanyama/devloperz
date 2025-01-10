import AnimatedShinyText from "@/components/ui/animated-shiny-text";

export default function Home() {
  return (
    <div className="container text-center grid place-items-center h-screen bg-">
      <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
        devloperz.com
      </AnimatedShinyText>
    </div>
  );
}
