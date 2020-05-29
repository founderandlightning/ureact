import { css } from "styled-components/macro";

export const baseFont = css`
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  color: ${({ theme }) => theme.black};
`;

export const baseFontWhite = css`
  font-family: "Muli", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  color: ${({ theme }) => theme.white};
`;

export const headingXL = css`
  font-weight: 900;
  font-size: 48px;
  color: ${({ theme }) => theme.blue};
`;

export const headingL = css`
  font-weight: 900;
  font-size: 36px;
  color: ${({ theme }) => theme.blue};
`;

export const headingLBlack = css`
  font-weight: 900;
  font-size: 36px;
  color: ${({ theme }) => theme.black};
`;

export const headingM = css`
  font-weight: 900;
  font-size: 24px;
  color: ${({ theme }) => theme.sea};
`;

export const headingMB = css`  
  font-size: 24px;
  color: ${({ theme }) => theme.sea};
  line-height: 42px;
`;

export const headingS = css`
  font-weight: 900;
  color: ${({ theme }) => theme.sea};
`;

export const headingXS = css`
  font-weight: 900;
`;

export const paragraphM = css`
  font-size: 24px;
`;

export const paragraphS = css`
  ${baseFont};
  line-height: 30px;
`;

export const paragraphXS = css`
  font-size: 16px;
`;

export const linkM = css`
  font-weight: 900;
  text-decoration: underline;
  color: ${({ theme }) => theme.sea};
`;

export const LinkS = css`
  font-weight: bold;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ theme }) => theme.sea};
`;
