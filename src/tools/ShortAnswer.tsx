import {
  HTMLProps,
  useState,
} from 'react';

import {
  SendHorizonal,
  X,
} from 'lucide-react';
import {
  ActionIcon,
  cn,
  TextInput,
} from 'slate-ui';

import { ShortAnswerSection } from '@utils/prompts/tools';

export interface ShortAnswerProps extends HTMLProps<HTMLDivElement> {
  question: ShortAnswerSection;
  onAnswer: (answer: string) => void;
  clearAnswer: () => void;
}

export function ShortAnswer({
  question,
  onAnswer,
  className,
  clearAnswer,
  ...props
}: ShortAnswerProps) {
  const [answer, setAnswer] = useState(question.answered || "");

  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <p className="text-muted">{question.question}</p>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          onAnswer(answer);
        }}
      >
        <TextInput
          value={answer}
          onChange={setAnswer}
          className="grow"
          placeholder="Enter your answer"
          disabled={!!question.answered}
        />
        <ActionIcon
          onClick={() => {
            setAnswer("");
            clearAnswer();
          }}
          icon={X}
          type="button"
          disabled={!answer}
        />
        <ActionIcon
          icon={SendHorizonal}
          variant="secondary"
          disabled={!answer || !!question.answered}
          type="submit"
        />
      </form>
    </div>
  );
}
