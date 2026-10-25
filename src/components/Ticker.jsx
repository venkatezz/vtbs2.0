import React from 'react';
import '../styles/ticker.css';

/**
 * Ticker Component
 * Displays three verified business statements in exact order:
 * 1. 5+ Years of Business Support Experience
 * 2. Reliable Compliance Support (claim verified; statutory outcomes depend on official authorities)
 * 3. 50+ Clients Served
 *
 * Desktop: Static centered row with subtle vertical dividers.
 * Mobile: Seamless, lightweight continuous CSS marquee.
 */
const TICKER_ITEMS = [
  '5+ Years of Business Support Experience',
  'IT Solutions & Business Compliance Support',
  '50+ Clients Served'
];

export default function Ticker() {
  return (
    <aside className="ticker-wrap" aria-label="Business Highlights">
      {/* Desktop View: Static row, perfectly centered with no animation */}
      <div className="ticker-desktop-row">
        {TICKER_ITEMS.map((item, idx) => (
          <React.Fragment key={`desktop-${idx}`}>
            <span className="ticker-item">{item}</span>
            {idx < TICKER_ITEMS.length - 1 && (
              <span className="ticker-divider" aria-hidden="true" />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Mobile View: Seamless, lightweight CSS marquee */}
      <div className="ticker-mobile-marquee">
        <div className="ticker-track">
          {/* Primary Group */}
          <div className="ticker-group">
            {TICKER_ITEMS.map((item, idx) => (
              <React.Fragment key={`m1-${idx}`}>
                <span className="ticker-item">{item}</span>
                <span className="ticker-divider" aria-hidden="true" />
              </React.Fragment>
            ))}
          </div>
          {/* Duplicate Group for zero-jump, seamless loop */}
          <div className="ticker-group" aria-hidden="true">
            {TICKER_ITEMS.map((item, idx) => (
              <React.Fragment key={`m2-${idx}`}>
                <span className="ticker-item">{item}</span>
                <span className="ticker-divider" aria-hidden="true" />
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
