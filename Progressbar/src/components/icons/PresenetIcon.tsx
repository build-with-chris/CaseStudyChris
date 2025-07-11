import * as React from "react";

const PresentIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path d="M20 7h-2.18a3.001 3.001 0 0 0-5.58-2.01c-.27.45-.49.94-.63 1.45-.14-.5-.36-1-.63-1.45A3.001 3.001 0 0 0 6.18 7H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zM15 4a1 1 0 0 1 0 2h-2a6.9 6.9 0 0 1 .35-1.01A1.001 1.001 0 0 1 15 4zM9 4c.41 0 .79.25.94.64.23.46.35.95.35 1.36H8a1 1 0 0 1 0-2zm-4 5h6v2H5V9zm2 11H5v-7h2v7zm4 0H9v-7h2v7zm4 0h-2v-7h2v7zm4 0h-2v-7h2v7zm1-9h-6V9h6v2z" />
  </svg>
);

export default PresentIcon;