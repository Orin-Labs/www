import React from "react";

import { AudioLines, HeadphoneOff, RefreshCcw } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { ActionIcon, Button } from "slate-ui";
import { Toaster } from "sonner";

import { CanvasSectionComponent } from "./tools";
import { useVapi } from "./vapi";

function App() {
  const { display, callOn, setDisplay, setCallOn, loading, vapi, initVapi } =
    useVapi();

  return (
    <div className="max-w-screen h-screen flex flex-col">
      <Toaster />

      <div className="absolute top-4 right-4 z-10">
        <ActionIcon
          icon={RefreshCcw}
          tooltip="Restart"
          onClick={window.location.reload}
        />
      </div>

      <div className="grow w-full flex flex-col gap-8 px-8 items-center justify-center relative">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            background: `
              repeating-linear-gradient(
                90deg,
                rgba(255, 0, 0, 0.3) 39px,
                rgba(255, 0, 0, 0.3) 41px,
                transparent 0px,
                transparent 100%
              ),
              repeating-linear-gradient(
                0deg,
                rgba(0, 0, 255, 0.2) 5px,
                rgba(0, 0, 255, 0.2) 6px,
                transparent 0px,
                transparent 32px
              ),
              radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.8) 40%,
                transparent 100%
              )
              rgba(255, 255, 255, ${display ? 0.5 : 0})
            `,
            backgroundBlendMode: "overlay",
          }}
        />

        {display ? (
          <CanvasSectionComponent
            section={display}
            sendMessageToVapi={(message) => vapi.send(message)}
            updateSection={setDisplay}
          />
        ) : (
          <TypeAnimation
            sequence={[
              "Hey! I'm Orin, an S.A.T tutor. What can I help with?",
              1000,
            ]}
            speed={80}
            className="text-5xl font-normal max-w-2xl text-center relative"
          />
        )}

        {callOn ? (
          <Button
            iconLeft={HeadphoneOff}
            onClick={() => {
              vapi.setMuted(true);
              vapi.stop();
              setCallOn(false);
            }}
            size="lg"
            loading={loading}
            className="text-md gap-2 relative"
          >
            End
          </Button>
        ) : (
          <Button
            iconLeft={AudioLines}
            onClick={initVapi}
            size="lg"
            loading={loading}
            className="text-md gap-2 relative"
          >
            Talk with Orin
          </Button>
        )}
      </div>

      <footer className="bg-gray-50 py-2 border-t">
        <div className="container mx-auto text-center text-gray-400 text-xs flex justify-between gap-4">
          <p>© 2025 Orin Labs. All rights reserved.</p>
          <a href="/privacy" className="underline">
            Privacy Policy
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
