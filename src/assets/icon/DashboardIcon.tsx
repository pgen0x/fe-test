import * as React from "react";

const DashboardIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="15"
    height="15"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      fill="currentColor"
      d="M8.333 5V0H15v5zM0 8.333V0h6.667v8.333zM8.333 15V6.667H15V15zM0 15v-5h6.667v5z"
    ></path>
  </svg>
);

export default DashboardIcon;
