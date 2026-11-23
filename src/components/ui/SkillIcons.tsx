import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
}

export const JavaIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 256 345"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Java logo"
  >
    <path
      d="M125.7 344.2c-54.8 0-77.9-2.7-77.9-2.7s-8.1 4.2 11.7 7.4c23.6 3.8 62.4 3.7 93.3 1.2 26.6-2.1 44.8-5.9 44.8-5.9s-7.1-4.7-71.9 0z"
      fill="#E76F00"
    />
    <path
      d="M102.3 294.6c-48.4-3.5-62.8 1.9-62.8 1.9s-7.4 5.2 9.7 9.1c20.4 4.7 54.4 5.3 93.6 2.4 33.7-2.5 69.8-8.2 69.8-8.2s-8-5.4-35.3-7.5c-24.5-1.9-50.6-2.1-75-2.3z"
      fill="#5382A1"
    />
    <path
      d="M123.6 248.8c-23.7.8-49.8 4.2-69.6 13.9-6.4 3.1-13.6 7.4-8.8 13.5 4.6 5.8 14 5.9 22.8 5.7 30-.7 59.9-4.7 89.6-7.8 28.5-3 58-3.4 86.4 1.1 5.3.8 11.2 2.1 15.6-.9 5.3-3.7 4.1-8.5.1-11.8-11.6-9.7-29.2-11.7-45.7-13.5-30.1-3.2-60.6-1.3-90.4-.2z"
      fill="#5382A1"
    />
    <path
      d="M165.7 197.8c7.4 8.7 1.8 16.4-5.3 22.3-19.4 16.1-44.4 20.3-68.5 24.3-25.2 4.2-51.1 7.4-76.3 3.1-4.7-.8-10.2-2.5-12.2-7.2-2.3-5.3.8-9.4 4.5-12.4 14.8-12 33.9-15.5 52.3-18.7 35.8-6.1 72.8-13 105.5-11.4z"
      fill="#5382A1"
    />
    <path
      d="M153.3 147.1c16.3 18.9-6.1 36.4-23.9 45.4-22.1 11.2-47.5 13.4-71.8 17.6-6.1 1.1-14.4 2.8-18.4-2.5-4.2-5.5 0-9.8 4.2-13.1 14.5-11.5 32.7-14.9 50.3-18.9 20.4-4.7 40.8-9.9 59.6-28.5z"
      fill="#5382A1"
    />
    <path
      d="M99.6 78.4c-3.1 2.9-7.9 6.2-7.4 10.6.5 4.7 6.1 6.8 9.8 8.8 14.4 7.8 30.1 13.5 43.1 23.9 14.1 11.3 22.8 28.3 18.2 46.2 13.5-17.7 13.5-44.1 1-62.5-14.6-21.5-39.7-24-64.7-27z"
      fill="#EA2D2E"
    />
    <path
      d="M136.2 3.8c7.2 9.9 3.5 20.4-3.3 29.3-10.7 14-25.7 22.2-39.5 32.5-5.3 4-10.8 8.3-13.9 14.2 9.5-6.7 19.3-13 28.5-20.1 11.5-8.9 22.6-18.4 30.6-30.5 7.8-11.9 4-18.6-2.4-25.4z"
      fill="#EA2D2E"
    />
    <path
      d="M185.1 170.8c-1.3-4.5-4.4-7.4-8.8-9 11.7-20.5 4.9-46.7-14.5-59.5-3.6-2.4-8.3-4.5-12.7-1.7-4.6 2.9-3.9 8.2-1.4 12.3 8.3 13.7 11.7 30 5.4 45.4-8 19.7-25.3 32.2-43.2 43.5-4.2 2.7-9.4 5.7-9.4 11.1 0 4.9 4.9 7.7 9.1 9.2 22.4 8.2 47.7 5.8 69.9-3.2 8-3.2 16.7-7.7 19.7-16.7 1.5-4.1-.3-8-4.1-11.4z"
      fill="#EA2D2E"
    />
  </svg>
);

export const PythonIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 110 110"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Python logo"
  >
    <path
      d="M54.4 2C32.1 2 33.5 11.7 33.5 11.7l.03 10.1h21.4v3H24.3S10 24.8 10 47.1c0 22.3 12.4 21.6 12.4 21.6h7.4v-10.4s-.4-12.4 12.2-12.4h20.8s11.8.2 11.8-11.4V13.8S75.8 2 54.4 2zm-11.7 7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z"
      fill="#3776AB"
    />
    <path
      d="M55.6 108c22.3 0 20.9-9.7 20.9-9.7l-.03-10.1H55.1v-3h30.6s14.3 0 14.3-22.3c0-22.3-12.4-21.6-12.4-21.6h-7.4v10.4s.4 12.4-12.2 12.4H47.2s-11.8-.2-11.8 11.4v20.7s-1.2 11.8 20.2 11.8zm11.7-7a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z"
      fill="#FFD438"
    />
  </svg>
);

export const Html5Icon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="HTML5 logo"
  >
    <path d="M41.4 0L78 410.7 255.8 460l178-49.3L470.6 0H41.4z" fill="#E44D26" />
    <path d="M256 423.8l144.3-40 28.5-319.4H256v359.4z" fill="#F16529" />
    <path
      d="M256 182.2h-74.6l-5.1-57.8H256V69.7H115.8l15.2 170.3H256v-57.8zm0 137.4l-.6.2-61.9-16.7-4-44.4h-55.2l7.7 86.8L256 376.5v-56.9z"
      fill="#EBEBEB"
    />
    <path
      d="M255.8 182.2v57.8h73.7l-7 77.8-66.7 18v57l113.8-31.6 15.6-179H255.8zm0-112.5v54.7h136l4.8-54.7h-140.8z"
      fill="#FFFFFF"
    />
  </svg>
);

export const Css3Icon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="CSS3 logo"
  >
    <path d="M41.4 0L78 410.7 255.8 460l178-49.3L470.6 0H41.4z" fill="#1572B6" />
    <path d="M256 423.8l144.3-40 28.5-319.4H256v359.4z" fill="#33A9DC" />
    <path
      d="M256 182.2h-74.6l-5.1-57.8H256V69.7H115.8l15.2 170.3H256v-57.8zm0 137.4l-.6.2-61.9-16.7-4-44.4h-55.2l7.7 86.8L256 376.5v-56.9z"
      fill="#EBEBEB"
    />
    <path
      d="M255.8 69.7v54.7h74.6l-5.1 57.8h-69.5v57.8h64.3l-6.1 68.4-58.2 15.7v57l113.8-31.6 15.6-179.1.5-4.7 4.7-52.9v-31.1H255.8z"
      fill="#FFFFFF"
    />
  </svg>
);

export const JavaScriptIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="JavaScript logo"
  >
    <rect width="100" height="100" rx="12" fill="#F7DF1E" />
    <path
      d="M28.4 78.5c3.2 5.3 7.8 8.7 15.5 8.7 7.7 0 12.6-3.8 12.6-12.3V44.2h-9.5v30.4c0 4.3-2.1 6.1-5.6 6.1-3.1 0-4.9-2.2-6.5-5.1l-6.5 2.9zM62.6 77.7c3.4 5.8 9.3 9.5 17.5 9.5 9.8 0 15.8-4.9 15.8-13.6 0-8.2-5.4-11.6-14-15.4-6.2-2.7-8.3-4.5-8.3-8.2 0-3.3 2.6-5.8 7-5.8 4 0 6.8 1.8 8.8 5.4l7.6-4.9c-3.6-6-8.9-8.4-16.4-8.4-9.3 0-15.2 5.5-15.2 13.7 0 8.2 5 11.9 13.1 15.4 6.7 2.9 9.3 4.8 9.3 8.7 0 4-3.4 6.6-8.2 6.6-5.3 0-8.9-3.2-11.2-7.5l-7.8 4.5z"
      fill="#000000"
    />
  </svg>
);

export const SpringBootIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Spring Boot logo"
  >
    <circle cx="64" cy="64" r="62" fill="#6DB33F" />
    <path
      d="M93.5 35.8C89.2 31.5 73.1 35.2 58.7 49.6 44.3 64 40.5 80.1 44.8 84.4c4.3 4.3 20.4.6 34.8-13.8 14.4-14.4 18.2-30.5 13.9-34.8zm-29.3 33.7c-2.3 2.3-5.2 4.1-8.3 5.4l2.1-4.7c1.3-3.1 3.1-6 5.4-8.3 2.3-2.3 5.2-4.1 8.3-5.4l-2.1 4.7c-1.3 3.1-3.1 6-5.4 8.3z"
      fill="#FFFFFF"
    />
    <path
      d="M48.2 81.1c11.5 11.5 30.2 11.5 41.7 0s11.5-30.2 0-41.7l-41.7 41.7z"
      fill="#FFFFFF"
      fillOpacity="0.25"
    />
  </svg>
);

export const ReactIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="-11.5 -10.23174 23 20.46348"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="React logo"
  >
    <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
    <g stroke="#61DAFB" strokeWidth="1" fill="none">
      <ellipse rx="11" ry="4.2" />
      <ellipse rx="11" ry="4.2" transform="rotate(60)" />
      <ellipse rx="11" ry="4.2" transform="rotate(120)" />
    </g>
  </svg>
);

export const ReactNativeIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="React Native logo"
  >
    <rect x="25" y="10" width="50" height="80" rx="8" fill="#1E293B" stroke="#61DAFB" strokeWidth="2.5" />
    <circle cx="50" cy="82" r="3.5" fill="#61DAFB" />
    <line x1="42" y1="18" x2="58" y2="18" stroke="#61DAFB" strokeWidth="2" strokeLinecap="round" />
    <g transform="translate(50, 48) scale(1.6)">
      <circle cx="0" cy="0" r="1.8" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="0.9" fill="none">
        <ellipse rx="9.5" ry="3.6" />
        <ellipse rx="9.5" ry="3.6" transform="rotate(60)" />
        <ellipse rx="9.5" ry="3.6" transform="rotate(120)" />
      </g>
    </g>
  </svg>
);

export const NextjsIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Next.js logo"
  >
    <circle cx="64" cy="64" r="64" fill="#000000" />
    <path
      d="M86.8 91.5L47.4 41.2H40V86.8H46.6V50.6L82.1 95.8C83.7 94.5 85.3 93.1 86.8 91.5Z"
      fill="url(#next_grad)"
    />
    <rect x="80" y="41.2" width="6.6" height="45.6" fill="#FFFFFF" />
    <defs>
      <linearGradient id="next_grad" x1="68" y1="67" x2="90" y2="95" gradientUnits="userSpaceOnUse">
        <stop stopColor="#FFFFFF" />
        <stop offset="1" stopColor="#FFFFFF" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export const GitHubIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 98 96"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="GitHub logo"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.215-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
      fill="#181717"
    />
  </svg>
);

export const VsCodeIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Visual Studio Code logo"
  >
    <path d="M72.5 95.8L97.5 83.3V16.7L72.5 4.2 28.3 43.3 11.7 30.8 2.5 35.8v28.4l9.2 5 16.6-12.5L72.5 95.8z" fill="#0065A9" />
    <path d="M72.5 95.8l25-12.5V16.7L72.5 4.2v91.6z" fill="#007ACC" />
    <path d="M72.5 4.2L28.3 43.3 72.5 82.5V4.2z" fill="#1F9CF0" />
    <path d="M72.5 82.5L28.3 43.3 11.7 30.8 2.5 35.8v28.4l9.2 5 16.6-12.5 44.2 25.8z" fill="#0065A9" opacity="0.3" />
  </svg>
);

export const IntellijIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="IntelliJ IDEA logo"
  >
    <defs>
      <linearGradient id="ij_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FE315D" />
        <stop offset="35%" stopColor="#CB3285" />
        <stop offset="70%" stopColor="#007ACC" />
        <stop offset="100%" stopColor="#087CFA" />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="20" fill="url(#ij_grad)" />
    <rect x="8" y="8" width="84" height="84" rx="14" fill="#000000" />
    <rect x="20" y="68" width="28" height="6" fill="#FE315D" />
    <text x="24" y="52" fill="#FFFFFF" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="30">
      IJ
    </text>
  </svg>
);

export const UbuntuIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Ubuntu logo"
  >
    <circle cx="50" cy="50" r="48" fill="#E95420" />
    {/* Inner ring */}
    <circle cx="50" cy="50" r="28" fill="none" stroke="#FFFFFF" strokeWidth="8" />
    {/* 3 white head dots */}
    <circle cx="18" cy="50" r="7" fill="#FFFFFF" />
    <circle cx="66" cy="22" r="7" fill="#FFFFFF" />
    <circle cx="66" cy="78" r="7" fill="#FFFFFF" />
    {/* inner dot centers */}
    <circle cx="18" cy="50" r="3.5" fill="#E95420" />
    <circle cx="66" cy="22" r="3.5" fill="#E95420" />
    <circle cx="66" cy="78" r="3.5" fill="#E95420" />
  </svg>
);

export const PostmanIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Postman logo"
  >
    <circle cx="50" cy="50" r="48" fill="#FF6C37" />
    {/* Stylized Postman Spaceman */}
    <path
      d="M32 58l18-18 6 6-12 12h18v8H32v-8zm24-28a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm-4 36l12-12 6 6-12 12-6-6z"
      fill="#FFFFFF"
    />
  </svg>
);

export const SwaggerIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Swagger UI logo"
  >
    <circle cx="50" cy="50" r="48" fill="#85EA2D" />
    <circle cx="50" cy="50" r="36" fill="#173647" />
    <text x="35" y="62" fill="#85EA2D" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="38">
      {'{ }'}
    </text>
  </svg>
);

export const MysqlIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="MySQL logo"
  >
    <path
      d="M87.2 55.4c-1.8-6.1-5.7-11.4-11-15-5.3-3.6-11.8-5.2-18.2-4.5-12.8 1.4-23.7 9.8-28.7 21.7-2.5 6-3.4 12.6-2.5 19.1.9 6.5 3.8 12.6 8.3 17.3 4.5 4.7 10.4 7.9 16.8 9.1 6.4 1.2 13.1.4 19.1-2.3 6-2.7 11-7.2 14.2-12.9 3.2-5.7 4.5-12.3 3.7-18.8-.2-2.3-.7-4.5-1.7-6.7zm-22.4 18.2c-4.1 0-7.4-3.3-7.4-7.4s3.3-7.4 7.4-7.4 7.4 3.3 7.4 7.4-3.3 7.4-7.4 7.4z"
      fill="#00758F"
    />
    <path
      d="M26.4 22.8c-2.1 4.5-3.2 9.5-3.2 14.5 0 9.2 3.7 18 10.2 24.5 6.5 6.5 15.3 10.2 24.5 10.2 6.8 0 13.4-2 19-5.7-3.4 5.7-8.4 10.2-14.4 12.9-6 2.7-12.7 3.5-19.1 2.3-6.4-1.2-12.3-4.4-16.8-9.1-4.5-4.7-7.4-10.8-8.3-17.3-.9-6.5 0-13.1 2.5-19.1 2.5-5.9 6.5-11.1 11.6-14.8-2-.5-4-1-6-1.5z"
      fill="#F29111"
    />
  </svg>
);

export const PostgresqlIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="PostgreSQL logo"
  >
    <path
      d="M50 10C34 10 24 22 24 37c0 10 5 18 12 24v17c0 2 2 4 4 4h20c2 0 4-2 4-4V61c7-6 12-14 12-24 0-15-10-27-26-27zm-11 36c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm22 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z"
      fill="#336791"
    />
    <path
      d="M44 65c0 4-4 8-9 8s-9-4-9-8c0-5 6-8 9-11 3 3 9 6 9 11zm30 0c0-5-6-8-9-11-3 3-9 6-9 11 0 4 4 8 9 8s9-4 9-8z"
      fill="#4169E1"
      opacity="0.8"
    />
  </svg>
);

export const CanvaIcon: React.FC<IconProps> = ({ className = '', size = 48 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    role="img"
    aria-label="Canva logo"
  >
    <defs>
      <linearGradient id="canva_grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00C4CC" />
        <stop offset="100%" stopColor="#7D2AE8" />
      </linearGradient>
    </defs>
    <circle cx="50" cy="50" r="48" fill="url(#canva_grad)" />
    <path
      d="M48 30c-11 0-20 9-20 20s9 20 20 20c7 0 13-3.6 16.5-9.1l-6.8-4.5C55.4 60 52 62 48 62c-6.6 0-12-5.4-12-12s5.4-12 12-12c4 0 7.4 2 9.7 5.6l6.8-4.5C61 33.6 55 30 48 30z"
      fill="#FFFFFF"
    />
  </svg>
);

export const TechnologyIcon: React.FC<{ iconId: string; size?: number; className?: string }> = ({
  iconId,
  size = 46,
  className = '',
}) => {
  switch (iconId.toLowerCase()) {
    case 'java':
      return <JavaIcon size={size} className={className} />;
    case 'python':
      return <PythonIcon size={size} className={className} />;
    case 'html5':
      return <Html5Icon size={size} className={className} />;
    case 'css3':
      return <Css3Icon size={size} className={className} />;
    case 'javascript':
      return <JavaScriptIcon size={size} className={className} />;
    case 'springboot':
      return <SpringBootIcon size={size} className={className} />;
    case 'react':
      return <ReactIcon size={size} className={className} />;
    case 'reactnative':
      return <ReactNativeIcon size={size} className={className} />;
    case 'nextjs':
      return <NextjsIcon size={size} className={className} />;
    case 'github':
      return <GitHubIcon size={size} className={className} />;
    case 'vscode':
      return <VsCodeIcon size={size} className={className} />;
    case 'intellij':
      return <IntellijIcon size={size} className={className} />;
    case 'ubuntu':
      return <UbuntuIcon size={size} className={className} />;
    case 'postman':
      return <PostmanIcon size={size} className={className} />;
    case 'swagger':
      return <SwaggerIcon size={size} className={className} />;
    case 'mysql':
      return <MysqlIcon size={size} className={className} />;
    case 'postgresql':
      return <PostgresqlIcon size={size} className={className} />;
    case 'canva':
      return <CanvaIcon size={size} className={className} />;
    default:
      return null;
  }
};
