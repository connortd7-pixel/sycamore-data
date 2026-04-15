'use client';

import { InlineWidget } from 'react-calendly';

export default function CalendlyEmbed() {
  return (
    <div className="bg-white border border-border rounded-xl overflow-hidden">
      <InlineWidget
        url="https://calendly.com/connortd7/30min"
        styles={{ height: '600px' }}
      />
    </div>
  );
}
