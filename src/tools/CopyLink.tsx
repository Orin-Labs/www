import { useState } from 'react';

import {
  Check,
  Copy,
} from 'lucide-react';
import {
  Button,
  TextInput,
} from 'slate-ui';

export function CopyLink({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="flex gap-2 items-center">
      <TextInput value={url} />
      <Button
        onClick={() => {
          navigator.clipboard.writeText(url);
          setCopied(true);
          setTimeout(() => {
            setCopied(false);
          }, 2000);
        }}
        iconLeft={copied ? Check : Copy}
      >
        {copied ? "Copied!" : "Copy"}
      </Button>
    </div>
  );
}
