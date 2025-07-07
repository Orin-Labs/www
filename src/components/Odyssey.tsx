import { cn } from '../utils';
import { BackgroundGradient } from './BackgroundGradient';

export function Odyssey() {
  return (
    <div
      className={cn(
        "bg-white w-full max-w-full border border-gray-200 pt-8 md:pt-0 rounded-lg overflow-hidden justify-center",
        "relative shadow-lg hover:scale-105 transition-all duration-300 hidden md:flex"
      )}
    >
      <script async src="https://subscribe-forms.beehiiv.com/embed.js" />
      <iframe
        title="Subscribe to Orin's Blog"
        src="https://subscribe-forms.beehiiv.com/1df3b255-c4c1-4e5b-80e8-5e9105565a3e"
        className="beehiiv-embed"
        data-test-id="beehiiv-embed"
        style={{
          width: "100%",
          maxWidth: "min(100%, 984px)",
          height: "339px",
          backgroundColor: "transparent",
          margin: 0,
          zIndex: 10,
        }}
      />
      <script
        type="text/javascript"
        async
        src="https://subscribe-forms.beehiiv.com/attribution.js"
      />
      <BackgroundGradient speed={0.01} />
    </div>
  );
}
