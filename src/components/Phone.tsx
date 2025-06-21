import { HTMLProps } from 'react';

import {
  HTMLMotionProps,
  motion,
} from 'framer-motion';
import { ChevronRight } from 'lucide-react';

import { cn } from '../utils';

export interface Message {
  id: string;
  text: string;
  isFromUser: boolean;
  timestamp: Date;
}

interface PhoneProps extends HTMLMotionProps<"div"> {
  messages?: Message[];
  onSendMessage?: (text: string) => void;
}

const CellularSignalIcon = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="18"
    height="12"
    viewBox="0 0 18 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.6666 0.666666H15.6666C15.1143 0.666666 14.6666 1.11438 14.6666 1.66667V10.3333C14.6666 10.8856 15.1143 11.3333 15.6666 11.3333H16.6666C17.2189 11.3333 17.6666 10.8856 17.6666 10.3333V1.66667C17.6666 1.11438 17.2189 0.666666 16.6666 0.666666ZM11 3H12C12.5522 3 13 3.44771 13 4V10.3333C13 10.8856 12.5522 11.3333 12 11.3333H11C10.4477 11.3333 9.99996 10.8856 9.99996 10.3333V4C9.99996 3.44771 10.4477 3 11 3ZM7.33329 5.33333H6.33329C5.78101 5.33333 5.33329 5.78105 5.33329 6.33333V10.3333C5.33329 10.8856 5.78101 11.3333 6.33329 11.3333H7.33329C7.88558 11.3333 8.33329 10.8856 8.33329 10.3333V6.33333C8.33329 5.78105 7.88558 5.33333 7.33329 5.33333ZM2.66663 7.33333H1.66663C1.11434 7.33333 0.666626 7.78105 0.666626 8.33333V10.3333C0.666626 10.8856 1.11434 11.3333 1.66663 11.3333H2.66663C3.21891 11.3333 3.66663 10.8856 3.66663 10.3333V8.33333C3.66663 7.78105 3.21891 7.33333 2.66663 7.33333Z"
      fill="black"
    />
  </svg>
);

const WifiIcon = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="16"
    height="12"
    viewBox="0 0 16 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.33033 2.608C10.5462 2.6081 12.6774 3.45954 14.2833 4.98633C14.4043 5.10421 14.5976 5.10272 14.7167 4.983L15.8727 3.81633C15.933 3.75561 15.9666 3.67336 15.9661 3.58778C15.9656 3.5022 15.931 3.42035 15.87 3.36033C11.6549 -0.679214 5.0051 -0.679214 0.789998 3.36033C0.728939 3.4203 0.694296 3.50213 0.693733 3.58771C0.69317 3.67329 0.726734 3.75557 0.786998 3.81633L1.94333 4.983C2.06236 5.1029 2.25581 5.10439 2.37666 4.98633C3.98282 3.45943 6.11422 2.608 8.33033 2.608ZM8.33033 6.40367C9.54782 6.40359 10.7219 6.85612 11.6243 7.67333C11.7464 7.78931 11.9387 7.7868 12.0577 7.66767L13.2123 6.501C13.2731 6.43981 13.3069 6.35679 13.306 6.27052C13.3051 6.18426 13.2697 6.10195 13.2077 6.042C10.4595 3.48562 6.20353 3.48562 3.45533 6.042C3.39325 6.10195 3.35784 6.1843 3.35702 6.27059C3.35621 6.35689 3.39006 6.43989 3.451 6.501L4.60533 7.66767C4.72432 7.7868 4.9166 7.78931 5.03866 7.67333C5.94054 6.85666 7.11365 6.40417 8.33033 6.40367ZM10.6433 8.95749C10.6451 9.04399 10.6111 9.12739 10.5493 9.188L8.552 11.2037C8.49345 11.2629 8.41362 11.2962 8.33033 11.2962C8.24704 11.2962 8.16722 11.2629 8.10866 11.2037L6.111 9.188C6.04929 9.12735 6.01534 9.04392 6.01717 8.95741C6.019 8.87091 6.05644 8.78899 6.12067 8.731C7.39624 7.65212 9.26443 7.65212 10.54 8.731C10.6042 8.78903 10.6416 8.87098 10.6433 8.95749Z"
      fill="black"
    />
  </svg>
);

const BatteryIcon = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="25"
    height="12"
    viewBox="0 0 25 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      opacity="0.35"
      x="0.5"
      y="0.833334"
      width="21"
      height="10.3333"
      rx="2.16667"
      stroke="black"
    />
    <path
      opacity="0.4"
      d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4Z"
      fill="black"
    />
    <rect x="2" y="2" width="18" height="8" rx="1.33333" fill="black" />
  </svg>
);

const Chevron = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="21"
    viewBox="0 0 12 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.59766 20.3906C9.86719 20.6484 10.1953 20.7891 10.5703 20.7891C11.3555 20.7891 11.9648 20.1797 11.9648 19.4062C11.9648 19.0195 11.8125 18.668 11.543 18.3984L3.33984 10.3828L11.543 2.39062C11.8125 2.12109 11.9648 1.75781 11.9648 1.38281C11.9648 0.609375 11.3555 0 10.5703 0C10.1953 0 9.86719 0.140625 9.60938 0.398438L0.492188 9.30469C0.164062 9.60938 0 9.98438 0 10.3945C0 10.8047 0.164062 11.1562 0.480469 11.4727L9.59766 20.3906Z"
      fill="#3478F6"
    />
  </svg>
);

const FaceTime = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="26"
    height="26"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x="0.75"
      y="5.25"
      width="17.5"
      height="15.5"
      rx="3.25"
      stroke="#3478F6"
      strokeWidth="1.5"
    />
    <path
      d="M18.6001 13.6682C18.2588 13.2881 18.2588 12.7119 18.6001 12.3318L23.256 7.14766C23.8687 6.46542 25 6.89885 25 7.81584L25 18.1842C25 19.1012 23.8687 19.5346 23.256 18.8524L18.6001 13.6682Z"
      stroke="#3478F6"
      strokeWidth="1.5"
    />
  </svg>
);

const Add = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="34"
    height="34"
    viewBox="0 0 34 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17" cy="17" r="17" fill="#E8E9EB" />
    <path
      d="M11.25 18.0547C10.875 18.0547 10.5547 17.7422 10.5547 17.3594C10.5547 16.9766 10.875 16.6562 11.25 16.6562H16.3047V11.6094C16.3047 11.2344 16.6172 10.9141 17 10.9141C17.3828 10.9141 17.7031 11.2344 17.7031 11.6094V16.6562H22.75C23.125 16.6562 23.4453 16.9766 23.4453 17.3594C23.4453 17.7422 23.125 18.0547 22.75 18.0547H17.7031V23.1094C17.7031 23.4844 17.3828 23.8047 17 23.8047C16.6172 23.8047 16.3047 23.4844 16.3047 23.1094V18.0547H11.25Z"
      fill="#7D7F85"
    />
  </svg>
);

const Microphone = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="12"
    height="18"
    viewBox="0 0 12 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 11.4062C4.4375 11.4062 3.39062 10.2422 3.39062 8.57812V3.35156C3.39062 1.67969 4.4375 0.523438 6 0.523438C7.55469 0.523438 8.60156 1.67969 8.60156 3.35156V8.57812C8.60156 10.2422 7.55469 11.4062 6 11.4062ZM2.50781 17.1641C2.17969 17.1641 1.91406 16.9062 1.91406 16.5781C1.91406 16.25 2.17969 15.9844 2.50781 15.9844H5.40625V14.1562C2.40625 13.9141 0.40625 11.7578 0.40625 8.70312V7.11719C0.40625 6.78906 0.664062 6.53125 0.992188 6.53125C1.32812 6.53125 1.58594 6.78906 1.58594 7.11719V8.65625C1.58594 11.3203 3.32031 13.0859 6 13.0859C8.67188 13.0859 10.4062 11.3203 10.4062 8.65625V7.11719C10.4062 6.78906 10.6719 6.53125 11 6.53125C11.3281 6.53125 11.5859 6.78906 11.5859 7.11719V8.70312C11.5859 11.7578 9.58594 13.9141 6.58594 14.1562V15.9844H9.48438C9.8125 15.9844 10.0781 16.25 10.0781 16.5781C10.0781 16.9062 9.8125 17.1641 9.48438 17.1641H2.50781Z"
      fill="#B4B8BF"
    />
  </svg>
);

const BubbleLeft = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M5 10.5C4.49857 13.5086 1.66667 16.3333 0 17C6.4 17 10.5 14.8333 11.5 13.5L16.5 15L16 0H5.5V2V4V4.5C5.5 5.5 5.5 7.5 5 10.5Z"
      fill="#E9E9EB"
    />
  </svg>
);

const BubbleRight = (props: HTMLProps<SVGSVGElement>) => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 17 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.5 10.5C12.0014 13.5086 14.8333 16.3333 16.5 17C10.1 17 6 14.8333 5 13.5L0 15L0.5 0H11V2V4V4.5C11 5.5 11 7.5 11.5 10.5Z"
      fill="#0078FF"
    />
  </svg>
);

function MessageComponent({ message }: { message: Message }) {
  if (message.isFromUser) {
    return (
      <div className="flex justify-end">
        <div className="relative rounded-[16px] max-w-[280px] bg-[#0078FF] px-3 py-1.5 text-white">
          <p className="text-sm">{message.text}</p>
          <BubbleRight className="absolute -bottom-[0.5px] -right-[6px]" />
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start">
      <div className="relative rounded-[20px] max-w-[280px] bg-[#E9E9EB] px-3 py-1.5 text-black">
        <p className="text-sm">{message.text}</p>
        <BubbleLeft className="absolute -bottom-[0.5px] -left-[6px]" />
      </div>
    </div>
  );
}

export function Phone({
  messages = [],
  onSendMessage,
  className,
  ...props
}: PhoneProps) {
  return (
    <motion.div
      className={cn(
        "w-[375px] h-[812px] bg-white z-10 rounded-[36px] overflow-hidden flex flex-col",
        `shadow-[2px_2px_6px_#00000077,_-2px_-2px_6px_#ffffff99] dark:shadow-none`,
        className
      )}
      initial={{ opacity: 0, scale: 0.95, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      style={{
        fontFamily: "SF Pro Text",
      }}
      {...props}
    >
      {/* Fixed top bar that things can scroll under*/}
      <div
        className="w-full flex flex-col items-stretch bg-[#F1F1F2] text-black px-6"
        style={{
          boxShadow: "0px 0.5px #B2B2B2",
        }}
      >
        <div className="h-11 flex items-center justify-between">
          <span className="text-sm font-semibold">9:42</span>
          <div className="flex items-center gap-1">
            <CellularSignalIcon />
            <WifiIcon />
            <BatteryIcon />
          </div>
        </div>

        <div className="h-[72px] flex items-start justify-between">
          <Chevron className="mt-3" />
          <div className="flex flex-col items-center gap-1">
            <img
              src="/avatar.svg"
              alt="Avatar"
              className="w-12 h-12 rounded-full"
            />
            <div className="flex items-center ml-2">
              <span className="text-[10px] font-normal">Orin</span>
              <ChevronRight className="w-3 h-3 text-[#909093]" />
            </div>
          </div>
          <FaceTime className="mt-3" />
        </div>
      </div>

      {/* Messages */}
      <div className="w-full grow items-stretch px-6 py-4 gap-3 flex flex-col">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ opacity: 0, x: message.isFromUser ? 10 : -10 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { duration: 0.1, delay: index * 0.3 },
            }}
            viewport={{ once: true }}
          >
            <MessageComponent message={message} />
          </motion.div>
        ))}
      </div>

      {/* Inputs */}
      <div className="w-full flex px-3 gap-3">
        <Add />
        <div className="grow relative">
          <input
            className="w-full h-8 rounded-[80px] bg-white px-3 border border-[#C5C5C7] inset"
            placeholder="iMessage"
          />
          <Microphone className="absolute right-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="h-[34px] flex justify-center items-end py-2">
        <div className="w-[135px] h-[5px] rounded-full bg-black"></div>
      </div>
    </motion.div>
  );
}
