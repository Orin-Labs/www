import {
  useEffect,
  useRef,
} from 'react';

import {
  Expression,
  GraphingCalculator,
} from 'desmos-react';
import Markdown from 'react-markdown';
import remarkMath from 'remark-math';

export interface GraphProps {
  latexEquations: string[];
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  explainerText: string;
  colors: string[];
}

export function Graph({
  latexEquations,
  xMin,
  xMax,
  yMin,
  yMax,
  explainerText,
  colors = [],
}: GraphProps) {
  const ref = useRef<Desmos.Calculator>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.focusFirstExpression();
      ref.current.setMathBounds({
        left: xMin,
        right: xMax,
        bottom: yMin,
        top: yMax,
      });
    }
  }, [latexEquations, xMin, xMax, yMin, yMax]);

  return (
    <div className="grid grid-cols-2 gap-8">
      <Markdown className="markdown" remarkPlugins={[remarkMath]}>
        {explainerText}
      </Markdown>
      <GraphingCalculator
        attributes={{
          className: "aspect-video rounded-lg overflow-hidden border",
        }}
        fontSize={18}
        settingsMenu={false}
        expressionsTopbar={false}
        expressions={false}
        keypad={false}
        zoomButtons={false}
        border={false}
        ref={ref}
      >
        {latexEquations.map((latex, index) => (
          <Expression
            key={index}
            id={index.toString()}
            latex={latex}
            color={colors[index] ?? undefined}
          />
        ))}
      </GraphingCalculator>
    </div>
  );
}
