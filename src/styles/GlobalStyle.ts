import { createGlobalStyle } from "styled-components"

const styles = createGlobalStyle`
  :root {
    --color-white: #fff;
    --color-text: #393e41;
    --color-text-muted: #7b868c;
    --color-bg: #f4f5f6;
    --color-action: #1d7ec3;
    --color-action-border: #bcd2e1;
    --color-focus: #00bcf5;
    --color-error: #e0002d;
    --color-error-bg: #ffebef;

    --border-width: 0.1875rem;
    --border-width-sm: 0.125rem;
    --border-radius: 0.5rem;

    --duration-toggle: 0.5s;
    /* https://easings.net/#easeInOutCubic */
    --easing-toggle: cubic-bezier(0.65, 0, 0.35, 1);
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    line-height: 1.4;
    color: var(--color-text);
  }
`

export default styles
