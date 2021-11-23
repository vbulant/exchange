import styled, { css } from "styled-components"

export const Container = styled.div<{ isCollapsed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: ${({ isCollapsed }) => (isCollapsed ? "5vh" : "calc(47vh - 10rem)")} 0;
  transition: margin var(--duration-toggle) var(--easing-toggle);
`

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 0 0 1.25rem;
  font-size: 2rem;
  font-weight: 600;
`

export const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.25rem;
  width: 100%;
  white-space: nowrap;

  @media (min-width: 600px) {
    width: auto;
  }
`

export const Input = styled.input<{ hasError: boolean }>`
  width: 7rem;
  margin: -0.5rem 0.75rem -0.5rem 0;
  padding: 0.5rem 0.75rem;
  border: 0;
  text-align: right;
  font-size: inherit;
  font-weight: 700;
  color: inherit;
  background: var(--color-bg);
  border: var(--border-width) solid var(--color-bg);
  border-radius: var(--border-radius);
  outline: none;
  transition: 0.2s ease-in-out;

  &:focus {
    border-color: var(--color-action);
    background-color: transparent;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      &,
      &:focus {
        border-color: var(--color-error-border);
        background-color: var(--color-error-bg);
      }
    `}
`

export const Arrow = styled.span`
  display: none;

  @media (min-width: 600px) {
    display: inline-block;
    margin: 0 2vw;
    font-weight: 300;
  }
`

export const CurrencyFrom = styled.span`
  font-size: 1.125rem;
`

export const Value = styled.strong`
  margin-right: 0.75rem;
  font-weight: 700;
  color: var(--color-action);
`

export const SelectCurrencyTo = styled.select`
  border: var(--border-width) solid var(--color-action-border);
  border-radius: var(--border-radius);
  padding: 0.4rem;
  font-size: 1.125rem;
  font-weight: inherit;
  color: var(--color-action);
  background: transparent;
  outline: none;
  transition: border-color 0.2s ease-in-out;

  &:focus {
    border-color: var(--color-action);
  }
`

export const Toggle = styled.button.attrs({ type: "button" })`
  border: 0;
  padding: 0;
  background: transparent;
  cursor: pointer;
  color: var(--color-action);
  text-decoration: underline;
  font-size: 0.875rem;
`
