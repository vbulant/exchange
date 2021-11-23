import styled from "styled-components"

export const Container = styled.div<{ isExpanded: boolean }>`
  width: max-content;
  max-height: ${({ isExpanded }) => (isExpanded ? "500vh" : 0)};
  margin: 0 auto;
  border: var(--border-width-sm) solid #ccc;
  border-radius: var(--border-radius);
  overflow: hidden;
  pointer-events: ${({ isExpanded }) => (isExpanded ? "auto" : "none")};
  opacity: ${({ isExpanded }) => (isExpanded ? 1 : 0)};
  transition: opacity var(--duration-toggle) var(--easing-toggle),
    max-height var(--duration-toggle) var(--easing-toggle);
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 1rem 1.25rem;
`

export const Title = styled.h1`
  margin: 0 2rem 0 0;
  text-transform: uppercase;
  font-size: inherit;
`

export const Date = styled.time`
  color: var(--color-text-muted);
`

export const Table = styled.table`
  border-collapse: collapse;

  th,
  td {
    padding: 0.4rem 1.25rem;
  }

  th {
    text-align: left;
  }
`

export const Thead = styled.thead`
  th {
    padding-top: 0;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 600;
    color: var(--color-text-muted);

    &:last-child {
      text-align: right;
    }
  }
`

export const Tbody = styled.tbody`
  th {
    font-weight: 400;
    color: var(--color-action);
  }

  td {
    text-align: right;
  }

  tr:nth-child(2n + 1) {
    th,
    td {
      background-color: var(--color-bg);
    }
  }

  tr {
    &:hover {
      th {
        text-decoration: underline;
      }

      th,
      td {
        background-color: #c0e1ed;
        cursor: pointer;
      }
    }
  }
`
