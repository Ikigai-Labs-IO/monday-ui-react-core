import * as React from "react";

export const uiIcons = {
  sideNavCollapse: (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.5 13.5V2.5H4.25V13.5H2.5ZM5.75 13.5H13.5V2.5H5.75V13.5ZM1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2ZM8.57555 9.23732C7.89213 8.5539 7.89214 7.44587 8.57555 6.76245L11.1488 4.18923L11.1488 11.8105L8.57555 9.23732Z"
      />
    </>
  ),
  sideNavExpand: (
    <>
      <path d="M10.8234 6.76268C11.5068 7.4461 11.5068 8.55413 10.8234 9.23755L8.25015 11.8108L8.25015 4.18945L10.8234 6.76268Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 2C1 1.44772 1.44772 1 2 1H14C14.5523 1 15 1.44772 15 2V14C15 14.5523 14.5523 15 14 15H2C1.44772 15 1 14.5523 1 14V2ZM2.5 13.5V2.5H4.25V13.5H2.5ZM5.75 13.5H13.5V2.5H5.75V13.5Z"
      />
    </>
  ),
  apps: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.01783 1.67529L14.1345 4.50478L14.1345 12.4631L8.04058 15.3238L1.8501 12.6101L1.86701 4.47106L8.01783 1.67529ZM3.35214 11.6308L3.36363 6.09898L7.23145 7.80392V13.3313L3.35214 11.6308ZM8.73145 13.3424L12.6345 11.5102V6.1118L8.73145 7.82148V13.3424ZM8.01234 3.32547L11.5359 4.95542L8.00096 6.50386L4.4568 4.94159L8.01234 3.32547Z"
    />
  ),
  metric: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.99756 2.75C6.30422 2.74991 6.58003 2.93651 6.69403 3.22119L10.0016 11.481L11.3047 8.22159C11.4186 7.93678 11.6944 7.75 12.0011 7.75H14.75V9.25H12.509L10.6986 13.7784C10.5848 14.0632 10.3091 14.2499 10.0024 14.25C9.69578 14.2501 9.41997 14.0635 9.30597 13.7788L5.99836 5.51895L4.6953 8.77841C4.58144 9.06322 4.30562 9.25 3.99889 9.25H1.25V7.75H3.49101L5.30137 3.22159C5.4152 2.93685 5.69091 2.75009 5.99756 2.75Z"
    />
  ),
  schedule: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.75 2.5H7.25V1.5H8.75V2.5H11.25V1.5H12.75V2.5H15V15.5H1V2.5H3.25V1.5H4.75V2.5ZM11.25 4V5.5H12.75V4H13.5V6.75H2.5V4H3.25V5.5H4.75V4H7.25V5.5H8.75V4H11.25ZM13.5 14V8.25H2.5V14H13.5Z"
    />
  ),
  facets: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.42981 1.5C8.42981 2.05521 8.12816 2.53997 7.67981 2.79933V4.07501C9.39149 4.42247 10.6798 5.93578 10.6798 7.75C10.6798 8.2311 10.5892 8.69104 10.4241 9.11369L11.6956 10.3851C11.8242 10.3493 11.9597 10.3301 12.0997 10.3301C12.9282 10.3301 13.5997 11.0017 13.5997 11.8301C13.5997 12.6585 12.9282 13.3301 12.0997 13.3301C11.2713 13.3301 10.5997 12.6585 10.5997 11.8301C10.5997 11.7024 10.6157 11.5784 10.6457 11.4601L9.58235 10.4008C8.90366 11.0799 7.96579 11.5 6.92981 11.5C5.8894 11.5 4.94794 11.0763 4.26858 10.392L2.97649 11.6841C2.99182 11.7671 2.99983 11.8526 2.99983 11.94C2.99983 12.7132 2.37303 13.34 1.59983 13.34C0.82663 13.34 0.199829 12.7132 0.199829 11.94C0.199829 11.1668 0.82663 10.54 1.59983 10.54C1.72221 10.54 1.84092 10.5557 1.95406 10.5852L3.43271 9.1066C3.2694 8.68589 3.17981 8.22841 3.17981 7.75C3.17981 5.93578 4.46813 4.42247 6.17981 4.07501V2.79933C5.73146 2.53997 5.42981 2.05521 5.42981 1.5C5.42981 0.671573 6.10138 0 6.92981 0C7.75824 0 8.42981 0.671573 8.42981 1.5ZM6.92981 5.50021L6.91411 5.50005C5.6787 5.50849 4.67981 6.5126 4.67981 7.75C4.67981 8.99264 5.68717 10 6.92981 10C8.17245 10 9.17981 8.99264 9.17981 7.75C9.17981 6.5126 8.18092 5.50849 6.94551 5.50005L6.92981 5.50021Z"
    />
  ),
  connector: (
    <>
      <path d="M11.2617 6.25001V9.29933L14.2592 6.30189C14.7083 5.85279 14.7083 5.12465 14.2592 4.67555L11.2617 1.67801V4.75001L5.25002 4.75001L5.25003 6.25001L11.2617 6.25001Z" />
      <path d="M4.68704 12.25V15.2478L1.68954 12.2503C1.24044 11.8012 1.24045 11.073 1.68956 10.6239L4.68704 7.62648V10.75H10.75V12.25H4.68704Z" />
    </>
  ),
  marketPlace: (
    <>
      <path d="M7.6866 3.76396L10.1248 2.68282L7.6866 1.5293L5.24837 2.68282L7.6866 3.76396Z" />
      <path d="M10.8523 3.42057V6.74238L8.12474 8.0325L8.11458 8.01726V4.63451L10.8523 3.42057Z" />
      <path d="M11.2801 7.59017L13.7134 8.74139L11.2801 9.81587L8.84668 8.74139L8.85571 8.73688L11.2801 7.59017Z" />
      <path d="M14.438 9.49088V12.8553L11.7152 14.0626V10.6932L14.438 9.49088Z" />
      <path d="M10.8555 14.0805V10.6847L8.11133 9.47298V12.8637L10.8555 14.0805Z" />
      <path d="M7.23941 7.98303L7.24941 7.99803L7.23941 8.00303L4.54362 6.72766V3.45671L7.23941 4.65206V7.98303Z" />
      <path d="M7.25149 12.8553V9.49088L4.52865 10.6932V14.0626L7.25149 12.8553Z" />
      <path d="M4.09321 7.59017L6.52658 8.74139L4.09321 9.81587L1.65983 8.74139L4.09321 7.59017Z" />
      <path d="M3.6043 13.9721V10.7361L0.989258 9.58138V12.8126L3.6043 13.9721Z" />
    </>
  ),
  inProgress: (
    <path d="M7.16022 4.12988C4.60444 4.12988 2.53027 6.20408 2.53027 8.75988C2.53027 11.3157 4.60444 13.3899 7.16022 13.3899C8.59663 13.3899 9.87789 12.7375 10.7317 11.7026L11.209 11.1241L12.3661 12.0786L11.8888 12.6572C10.7626 14.0222 9.0638 14.8899 7.16022 14.8899C3.77599 14.8899 1.03027 12.1441 1.03027 8.75988C1.03027 5.37568 3.77599 2.62988 7.16022 2.62988C10.1523 2.62988 12.2785 4.56954 12.681 6.75H15.8108L12.8132 9.74749C12.3641 10.1966 11.636 10.1966 11.1869 9.74748L8.18945 6.75H11.1383C10.7482 5.42525 9.35178 4.12988 7.16022 4.12988Z" />
  ),
  cloud: (
    <path d="M17.32,20.07H6.68A5.57,5.57,0,0,1,5,9.21.32.32,0,0,0,5.17,9,7.18,7.18,0,0,1,12,3.93h0a7.4,7.4,0,0,1,1.33.13A7.12,7.12,0,0,1,18.83,9a.32.32,0,0,0,.21.21,5.57,5.57,0,0,1-1.72,10.86ZM12,5.68A5.39,5.39,0,0,0,6.85,9.51,2.12,2.12,0,0,1,5.5,10.88a3.82,3.82,0,0,0,1.18,7.44H17.32a3.81,3.81,0,0,0,1.18-7.44,2.12,2.12,0,0,1-1.35-1.37A5.36,5.36,0,0,0,13,5.78a4.87,4.87,0,0,0-1-.1Z" />
  ),
  resource: (
    <path d="M15.69682,22.873a.87481.87481,0,0,1-.875-.875v-1.7793h-1.918V21.998a.875.875,0,0,1-1.75,0v-1.7793h-1.918V21.998a.875.875,0,0,1-1.75,0v-1.7793H6.41948a2.6261,2.6261,0,0,1-2.623-2.623V16.56152H1.99956a.875.875,0,0,1,0-1.75H3.79643v-1.918H1.99956a.875.875,0,0,1,0-1.75H3.79643v-1.918H1.99956a.875.875,0,0,1,0-1.75H3.79643V6.41113a2.6261,2.6261,0,0,1,2.62305-2.623h1.0664V2.002a.875.875,0,1,1,1.75,0V3.78808h1.918V2.002a.875.875,0,1,1,1.75,0V3.78808h1.918V2.002a.875.875,0,0,1,1.75,0V3.78808H17.605a2.62527,2.62527,0,0,1,2.62207,2.62305V7.43554h1.77247a.875.875,0,0,1,0,1.75H20.22709v1.918h1.77247a.875.875,0,1,1,0,1.75H20.22709v1.918h1.77247a.875.875,0,0,1,0,1.75H20.22709V17.5957a2.62526,2.62526,0,0,1-2.62207,2.623h-1.0332V21.998A.87481.87481,0,0,1,15.69682,22.873ZM6.41948,5.53808a.874.874,0,0,0-.87305.87305V17.5957a.874.874,0,0,0,.87305.873H17.605a.87377.87377,0,0,0,.87207-.873V6.41113a.87377.87377,0,0,0-.87207-.87305Z" />
  ),
  archive: (
    <>
      <path d="M18.4,22.87H5.6a2.46,2.46,0,0,1-2.46-2.46V10.06A2.46,2.46,0,0,1,5.6,7.6h.63A1.63,1.63,0,0,1,7.86,9.23V9.4a.36.36,0,0,0,.36.35h7.56a.36.36,0,0,0,.36-.35V9.23A1.63,1.63,0,0,1,17.77,7.6h.63a2.46,2.46,0,0,1,2.46,2.46V20.41A2.46,2.46,0,0,1,18.4,22.87ZM5.6,9.35a.71.71,0,0,0-.71.71V20.41a.71.71,0,0,0,.71.71H18.4a.71.71,0,0,0,.71-.71V10.06a.71.71,0,0,0-.71-.71l-.51.05a2.11,2.11,0,0,1-2.11,2.1H8.22A2.11,2.11,0,0,1,6.11,9.4V9.35Z" />
      <path d="M17,16.69H7.27a.88.88,0,1,1,0-1.75H17a.88.88,0,1,1,0,1.75Z" />
      <path d="M18.15,7.29a.87.87,0,0,1-.87-.87.22.22,0,0,0-.21-.21H6.93a.22.22,0,0,0-.21.21A.88.88,0,0,1,5,6.42a2,2,0,0,1,2-2H17.07a2,2,0,0,1,2,2A.88.88,0,0,1,18.15,7.29Z" />
      <path d="M17,4a.87.87,0,0,1-.88-.88.22.22,0,0,0-.21-.21H8.11a.22.22,0,0,0-.21.21.88.88,0,1,1-1.75,0,2,2,0,0,1,2-2h7.78a2,2,0,0,1,2,2A.87.87,0,0,1,17,4Z" />
    </>
  ),
  reservedInstances: (
    <>
      <path d="M15.7,22.87a.87.87,0,0,1-.88-.87V20.22H12.9V22a.88.88,0,0,1-1.75,0V20.22H9.23V22a.88.88,0,0,1-1.75,0V20.22H6.42A2.62,2.62,0,0,1,3.8,17.6v-1H2a.88.88,0,1,1,0-1.75H3.8V12.89H2a.88.88,0,1,1,0-1.75H3.8V9.22H2A.88.88,0,1,1,2,7.47H3.8V6.41A2.62,2.62,0,0,1,6.42,3.79H7.48V2A.88.88,0,1,1,9.23,2V3.79h1.92V2A.88.88,0,1,1,12.9,2V3.79h1.92V2a.88.88,0,1,1,1.75,0V3.79h1a2.62,2.62,0,0,1,2.62,2.62v1H22a.88.88,0,1,1,0,1.75H20.23V11.1H22a.88.88,0,1,1,0,1.75H20.23v1.92H22a.88.88,0,1,1,0,1.75H20.23V17.6a2.63,2.63,0,0,1-2.62,2.62h-1V22A.87.87,0,0,1,15.7,22.87ZM6.42,5.54a.87.87,0,0,0-.87.87V17.6a.87.87,0,0,0,.87.87H17.61a.87.87,0,0,0,.87-.87V6.41a.87.87,0,0,0-.87-.87Z" />
      <path d="M14.68,15.38a.22.22,0,0,1-.17-.07.28.28,0,0,1-.07-.17V8.86a.24.24,0,0,1,.07-.17.22.22,0,0,1,.17-.07H16a.24.24,0,0,1,.25.24v6.28a.28.28,0,0,1-.07.17.24.24,0,0,1-.18.07ZM8,15.38a.21.21,0,0,1-.17-.07.23.23,0,0,1-.07-.17V8.86A.24.24,0,0,1,8,8.62h2.63a3,3,0,0,1,2,.58,2,2,0,0,1,.71,1.62A2,2,0,0,1,13,12a2,2,0,0,1-.86.72l1.32,2.37a.23.23,0,0,1,0,.11.19.19,0,0,1-.07.14.18.18,0,0,1-.14.06H12a.37.37,0,0,1-.27-.09.86.86,0,0,1-.13-.17L10.49,13h-1v2.15a.23.23,0,0,1-.07.17.24.24,0,0,1-.18.07Zm1.5-3.76h1.11a.93.93,0,0,0,.68-.22.81.81,0,0,0,.23-.6.89.89,0,0,0-.22-.61.94.94,0,0,0-.69-.23H9.51Z" />
    </>
  ),
  chartAscending: (
    <>
      <path d="M22,22.63H2a.88.88,0,0,1,0-1.75H22a.88.88,0,1,1,0,1.75Z" />
      <path d="M20.63,18.36a.88.88,0,0,1-.88-.88V8A.88.88,0,1,1,21.5,8v9.47A.87.87,0,0,1,20.63,18.36Z" />
      <path d="M16.13,18.36a.87.87,0,0,1-.88-.88V10.2a.88.88,0,0,1,1.75,0v7.28A.87.87,0,0,1,16.13,18.36Z" />
      <path d="M11.63,18.36a.87.87,0,0,1-.88-.88V12.4a.88.88,0,1,1,1.75,0v5.08A.87.87,0,0,1,11.63,18.36Z" />
      <path d="M7.12,18.36a.87.87,0,0,1-.87-.88V10.2A.88.88,0,0,1,8,10.2v7.28A.87.87,0,0,1,7.12,18.36Z" />
      <path d="M2.62,18.36a.87.87,0,0,1-.87-.88v-4a.88.88,0,1,1,1.75,0v4A.88.88,0,0,1,2.62,18.36Z" />
      <path d="M2.84,8.61A.88.88,0,0,1,2.36,7L7.07,3.92a2.38,2.38,0,0,1,1.81-.63,2.41,2.41,0,0,1,1.77,1L11.8,5.78a.7.7,0,0,0,.49.27.71.71,0,0,0,.53-.2L13,5.73l6.58-4.22A.87.87,0,1,1,20.49,3L14,7.16a2.4,2.4,0,0,1-1.81.63,2.43,2.43,0,0,1-1.77-1L9.25,5.3A.68.68,0,0,0,8.76,5a.71.71,0,0,0-.53.2l-.14.11L3.32,8.47A.84.84,0,0,1,2.84,8.61Z" />
    </>
  ),
  application: (
    <path d="M20,22.38h-3.8a2.87,2.87,0,0,1-2.86-2.87v-3.8a2.86,2.86,0,0,1,2.86-2.86H20a2.87,2.87,0,0,1,2.87,2.86v3.8A2.88,2.88,0,0,1,20,22.38Zm-3.8-7.78a1.11,1.11,0,0,0-1.11,1.11v3.8a1.12,1.12,0,0,0,1.11,1.12H20a1.12,1.12,0,0,0,1.12-1.12v-3.8A1.12,1.12,0,0,0,20,14.6ZM7.79,22.38H4a2.87,2.87,0,0,1-2.86-2.87v-3.8A2.86,2.86,0,0,1,4,12.85h3.8a2.86,2.86,0,0,1,2.86,2.86v3.8A2.87,2.87,0,0,1,7.79,22.38ZM4,14.6a1.11,1.11,0,0,0-1.11,1.11v3.8A1.12,1.12,0,0,0,4,20.63h3.8A1.12,1.12,0,0,0,8.9,19.51v-3.8A1.11,1.11,0,0,0,7.79,14.6Zm16-3.45h-3.8a2.86,2.86,0,0,1-2.86-2.86V4.49a2.87,2.87,0,0,1,2.86-2.87H20a2.88,2.88,0,0,1,2.87,2.87v3.8A2.87,2.87,0,0,1,20,11.15Zm-3.8-7.78A1.12,1.12,0,0,0,15.1,4.49v3.8A1.11,1.11,0,0,0,16.21,9.4H20a1.12,1.12,0,0,0,1.12-1.11V4.49A1.12,1.12,0,0,0,20,3.37ZM7.79,11.15H4A2.86,2.86,0,0,1,1.13,8.29V4.49A2.87,2.87,0,0,1,4,1.62h3.8a2.87,2.87,0,0,1,2.86,2.87v3.8A2.86,2.86,0,0,1,7.79,11.15ZM4,3.37A1.12,1.12,0,0,0,2.88,4.49v3.8A1.11,1.11,0,0,0,4,9.4h3.8A1.11,1.11,0,0,0,8.9,8.29V4.49A1.12,1.12,0,0,0,7.79,3.37Z" />
  ),
  dashboard: (
    <>
      <path d="M20,22.58H16.27a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H20A2.93,2.93,0,0,1,22.88,16v3.67A2.94,2.94,0,0,1,20,22.58ZM16.27,14.8A1.18,1.18,0,0,0,15.1,16v3.67a1.18,1.18,0,0,0,1.17,1.18H20a1.18,1.18,0,0,0,1.18-1.18V16A1.18,1.18,0,0,0,20,14.8Z" />
      <path d="M7.73,22.58H4.05a2.93,2.93,0,0,1-2.92-2.93V16a2.93,2.93,0,0,1,2.92-2.93H7.73A2.93,2.93,0,0,1,10.65,16v3.67A2.93,2.93,0,0,1,7.73,22.58ZM4.05,14.8A1.17,1.17,0,0,0,2.88,16v3.67a1.17,1.17,0,0,0,1.17,1.18H7.73A1.18,1.18,0,0,0,8.9,19.65V16A1.18,1.18,0,0,0,7.73,14.8Z" />
      <path d="M19.94,11H4.05A2.93,2.93,0,0,1,1.13,8V4.35A2.93,2.93,0,0,1,4.05,1.42H19.94a2.94,2.94,0,0,1,2.93,2.93V8A2.93,2.93,0,0,1,19.94,11ZM4.05,3.17A1.17,1.17,0,0,0,2.88,4.35V8A1.17,1.17,0,0,0,4.05,9.2H19.94A1.18,1.18,0,0,0,21.12,8V4.35a1.18,1.18,0,0,0-1.18-1.18Z" />
    </>
  ),
  info: (
    <>
      <path d="M12,22.875A10.875,10.875,0,1,1,22.875,12,10.88784,10.88784,0,0,1,12,22.875Zm0-20A9.125,9.125,0,1,0,21.125,12,9.13571,9.13571,0,0,0,12,2.875Z" />
      <path d="M11.17774,8.74026a.33183.33183,0,0,1-.24707-.0957.33563.33563,0,0,1-.09571-.24707V7.16409a.34159.34159,0,0,1,.09571-.23926.32267.32267,0,0,1,.24707-.10254h1.64453a.35223.35223,0,0,1,.34277.3418v1.2334a.32346.32346,0,0,1-.10352.24707.33736.33736,0,0,1-.23925.0957Zm.01367,8.1543a.32413.32413,0,0,1-.24707-.10254.3422.3422,0,0,1-.09571-.24023V10.11136a.328.328,0,0,1,.34278-.34278H12.8086a.3294.3294,0,0,1,.34277.34278v6.44043a.339.339,0,0,1-.09668.24023.32058.32058,0,0,1-.24609.10254Z" />
    </>
  ),
  infoFilled: (
    <>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z" />
    </>
  ),
  success: (
    <>
      <path d="M12.00014,22.875A10.875,10.875,0,1,1,22.87514,12,10.88784,10.88784,0,0,1,12.00014,22.875Zm0-20A9.125,9.125,0,1,0,21.12514,12,9.13571,9.13571,0,0,0,12.00014,2.875Z" />
      <path d="M10.41518,15.65628a.87318.87318,0,0,1-.61914-.25586L7.15346,12.75784a.8756.8756,0,0,1,1.23828-1.23828L10.41518,13.544,15.713,8.24515a.8756.8756,0,0,1,1.23828,1.23828l-5.917,5.917A.87318.87318,0,0,1,10.41518,15.65628Z" />
    </>
  ),
  successFilled: (
    <>
      <path d="m11.98,1.09C5.91,1.09.98,6.02.98,12.09s4.93,11,11,11,11-4.93,11-11S18.04,1.09,11.98,1.09Zm5.9,8.11l-7.09,7.09c-.2.2-.47.31-.74.31s-.54-.1-.74-.31l-3.17-3.17c-.41-.41-.41-1.07,0-1.48s1.07-.41,1.48,0l2.43,2.43,6.35-6.35c.41-.41,1.07-.41,1.48,0,.41.41.41,1.07,0,1.48Z" />
    </>
  ),
  cancel: (
    <>
      <path d="M12,22.88A10.88,10.88,0,1,1,22.87,12,10.89,10.89,0,0,1,12,22.88Zm0-20A9.13,9.13,0,1,0,21.12,12,9.14,9.14,0,0,0,12,2.88Z" />
      <path d="M15.69,17a.89.89,0,0,1-.62-.26L7.69,9.39A.88.88,0,1,1,8.93,8.15l7.38,7.38a.88.88,0,0,1-.62,1.5Z" />
      <path d="M8.31,17a.88.88,0,0,1-.62-1.5l7.38-7.38a.88.88,0,1,1,1.24,1.24L8.93,16.77A.89.89,0,0,1,8.31,17Z" />
    </>
  ),
  cancelFilled: (
    <>
      <path d="m12,1C5.93,1,1,5.93,1,12s4.93,11,11,11,11-4.93,11-11S18.07,1,12,1Zm5.19,14.69c.41.41.41,1.08,0,1.49-.21.21-.48.31-.75.31s-.54-.1-.75-.31l-3.7-3.7-3.7,3.7c-.21.21-.48.31-.75.31s-.54-.1-.75-.31c-.41-.41-.41-1.08,0-1.49l3.7-3.7-3.7-3.7c-.41-.41-.41-1.08,0-1.49s1.08-.41,1.49,0l3.7,3.7,3.7-3.7c.41-.41,1.08-.41,1.49,0s.41,1.08,0,1.49l-3.7,3.7,3.7,3.7h.02Z" />
    </>
  ),
  danger: (
    <>
      <path d="M21.17,22H2.83a1.7,1.7,0,0,1-1.7-1.71,1.67,1.67,0,0,1,.21-.82L10.5,2.84a1.65,1.65,0,0,1,1-.81,1.68,1.68,0,0,1,1.3.14,1.75,1.75,0,0,1,.68.67l9.16,16.67a1.68,1.68,0,0,1,.22.82A1.71,1.71,0,0,1,21.17,22ZM12,3.69,2.87,20.35l18.23-.06Z" />
      <path d="M11.18,18.77a.33.33,0,0,1-.23-.1.32.32,0,0,1-.1-.23V16.81a.33.33,0,0,1,.1-.25.33.33,0,0,1,.23-.1h1.63a.33.33,0,0,1,.23.1.33.33,0,0,1,.1.25v1.63a.32.32,0,0,1-.1.23.33.33,0,0,1-.23.1Zm.06-2.93a.3.3,0,0,1-.24-.1.33.33,0,0,1-.09-.23V9.83a.31.31,0,0,1,.33-.33h1.52a.31.31,0,0,1,.33.33v5.68a.33.33,0,0,1-.09.23.3.3,0,0,1-.24.1Z" />
    </>
  ),
  navigationSlash: (
    <path d="M10.4,20.88l-.17,0a.88.88,0,0,1-.69-1l3.2-16a.88.88,0,0,1,1.72.34l-3.2,16A.88.88,0,0,1,10.4,20.88Z" />
  )
};
