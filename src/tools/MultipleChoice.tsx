import { HTMLProps } from 'react';

import {
  Check,
  LucideIcon,
  X,
} from 'lucide-react';
import {
  cn,
  RadioGroup,
  SlateId,
} from 'slate-ui';

import { MultipleChoiceSection } from '@utils/prompts/tools';

export interface MultipleChoiceProps extends HTMLProps<HTMLDivElement> {
  question: MultipleChoiceSection;
  onAnswer: (answer: string) => void;
}

export function getIcon<T extends SlateId>(
  question: {
    answered: T | undefined | null;
    answer: T;
  },
  option: T
): LucideIcon | undefined {
  if (question.answered === option && question.answer === option) {
    return Check;
  }
  if (question.answered === option && question.answer !== option) {
    return X;
  }
  if (
    !!question.answered &&
    question.answered !== question.answer &&
    option === question.answer
  ) {
    return Check;
  }
  return undefined;
}

export function MultipleChoice({
  question,
  onAnswer,
  className,
  ...props
}: MultipleChoiceProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)} {...props}>
      <p className="text-muted">{question.question}</p>
      <RadioGroup
        items={question.options.map((option) => ({
          id: option,
          name: option,
          iconRight: getIcon(question, option),
        }))}
        value={question.answered}
        onChange={(s) => {
          if (s) {
            onAnswer(s);
          }
        }}
        disabled={!!question.answered}
        className="w-full"
      />
    </div>
  );
}
