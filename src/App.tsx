import { ArrowUpRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const DIVIDER = <div className="w-full border-t"></div>;
const HIRING_BUTTON = (
  <a href="mailto:brhoulton@gmail.com">
    <button className="rounded-lg border flex gap-2 justify-center px-2 py-1 text-sm items-center">
      we're hiring
      <ArrowUpRight size={18} />
    </button>
  </a>
);

function App() {
  return (
    <div className="p-6 md:p-10 lg:p-16 w-fit flex flex-col gap-4 sm:pb-8">
      <TypeAnimation
        sequence={["incortical"]}
        repeat={0}
        wrapper="span"
        className="text-5xl rounded-lg bg-black text-white p-2 -ml-2 w-fit"
        speed={50}
        cursor={false}
      />

      <h3 className="text-slate-700 text-2xl">brain-inspired ai</h3>

      <p>
        intelligence<sup className="hidden sm:inline">[1]</sup> needs {"<"}86B
        neurons to work.
      </p>
      <p>
        event-based neuronal systems can already scale to billions of neurons.
        <sup className="hidden sm:inline">[2]</sup>
      </p>
      <p>we're building the software to bridge the gap.</p>
      {HIRING_BUTTON}

      {DIVIDER}

      <h3 className="text-xl">projects [research]</h3>
      <p>1. grow functional connectomes from brain structures</p>
      <p>2. simulated rat connectome</p>

      <h3 className="text-xl">projects [infra]</h3>
      <p>1. cloud: millions of neurons across thousands of VMs</p>
      <p>2. neuromorphic: billions of neurons on custom hardware</p>
      <p>
        3.{" "}
        <a href="mailto:brhoulton@gmail.com" className="text-blue-700">
          {"</ ideas? join us />"}
        </a>
      </p>

      <div className="sm:fixed sm:border-t bg-white sm:bottom-0 sm:left-0 sm:right-0 justify-center flex sm:justify-between p-4 text-sm text-slate-500">
        <p>Copyright © 2024 Incortical</p>
        <ul className="hidden md:flex gap-2 divide-x text-right">
          <li>
            <sup>[1]</sup>
            <a href="https://arxiv.org/pdf/1911.01547">
              On the Measure of Intelligence
            </a>
          </li>
          <li className="pl-2">
            <sup>[2]</sup>
            <a href="https://www.hpcwire.com/2024/04/22/intel-announces-hala-point-worlds-largest-neuromorphic-system-for-sustainable-ai/">
              Intel Hala Point
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
