import * as React from "react";

const VerifiedIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="17"
    height="14"
    fill="none"
    viewBox="0 0 17 14"
    {...props}
  >
    <path
      fill="currentColor"
      d="M7.458 8.042 6.312 6.896a.82.82 0 0 0-.604-.25.82.82 0 0 0-.604.25.82.82 0 0 0-.25.604q0 .354.25.604l1.771 1.771a.8.8 0 0 0 .583.25.8.8 0 0 0 .584-.25l3.52-3.52a.82.82 0 0 0 .25-.605.82.82 0 0 0-.25-.604.82.82 0 0 0-.604-.25.82.82 0 0 0-.604.25zM1.667 3.333H15V1.667H1.667zm0 10q-.688 0-1.177-.489A1.6 1.6 0 0 1 0 11.667v-10Q0 .98.49.49T1.667 0H15q.687 0 1.177.49t.49 1.177v10q0 .687-.49 1.177a1.6 1.6 0 0 1-1.177.49z"
    ></path>
  </svg>
);

export default VerifiedIcon;
