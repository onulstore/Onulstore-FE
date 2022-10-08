import React from 'react';
import { useItemSlice } from 'store/hooks/index';

type IconPropsType = {
  className?: string;
  color?: string;
  width?: string;
  height?: string;
  stroke?: string;
  fill?: string;
  onClick?: () => void;
};

export const LogoIcon = ({
  color = '#505050',
  width = '14rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 140 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M23.6223 9.75774H16.5338V1.32196C20.1246 2.79591 22.8289 5.94139 23.6223 9.75774ZM11.9303 0.417969C13.071 0.417969 14.1754 0.57574 15.2202 0.869962V9.75917H0.238315C1.34561 4.43474 6.16713 0.417969 11.9303 0.417969ZM0 12.0874C0 11.7349 0.0174377 11.3866 0.0479537 11.0427H14.2916L4.16906 20.9424C1.6188 18.8005 0 15.6251 0 12.0874ZM5.22114 21.7313L15.2202 11.9509V22.2316L13.754 20.7975L12.8254 21.7057L14.6171 23.4583C13.7525 23.653 12.853 23.7568 11.9288 23.7568C9.44251 23.7568 7.13202 23.0091 5.21968 21.7313H5.22114ZM16.5338 22.8528V11.0427H23.8126C23.8446 11.3866 23.8606 11.7349 23.8606 12.0874C23.8606 16.9271 20.8322 21.0874 16.5324 22.8528H16.5338Z"
      fill={color}
    />
    <path
      d="M44.1029 13.7148L51.8001 6.18586C52.842 7.9185 53.4422 9.93542 53.4422 12.0859C53.4422 15.0722 52.2884 17.8012 50.395 19.8665L44.1043 13.7134L44.1029 13.7148ZM41.5104 0.417969C45.1389 0.417969 48.394 2.01132 50.5853 4.52002H32.437C34.6269 2.01132 37.882 0.417969 41.5119 0.417969H41.5104ZM29.5802 12.0874C29.5802 9.77622 30.2704 7.61859 31.4605 5.80493H50.3339L43.1743 12.8066L39.6504 9.35976L38.7219 10.268L42.2457 13.7148L34.3624 21.4257C31.4605 19.2951 29.5787 15.9023 29.5787 12.0874H29.5802ZM35.4785 22.152L43.1757 14.6231L49.4664 20.7762C47.3535 22.6282 44.565 23.7568 41.5119 23.7568C39.3118 23.7568 37.2498 23.1711 35.4799 22.1506L35.4785 22.152Z"
      fill={color}
    />
    <path
      d="M75.1478 23.0617L82.8494 14.0559C82.1214 18.2262 79.125 21.6503 75.1478 23.0617ZM83.0165 11.8585L73.9678 22.4406V0.761939C79.0872 2.00705 82.9104 6.4943 83.0165 11.8571V11.8585ZM68.1015 0.787523L61.4752 18.9895C60.0191 17.055 59.1588 14.6686 59.1588 12.0874C59.1588 6.66059 62.9646 2.08807 68.1015 0.787523ZM62.4531 20.1308L69.5968 0.508936C70.085 0.449239 70.5834 0.417969 71.0877 0.417969C71.6181 0.417969 72.1412 0.452081 72.6527 0.518886V23.6573C72.1398 23.7226 71.6181 23.7582 71.0877 23.7582C67.6946 23.7582 64.627 22.3652 62.4517 20.1323L62.4531 20.1308Z"
      fill={color}
    />
    <path
      d="M111.425 3.95715V2.66087H101.448V0.265869H100.123V2.66087H90.1456V3.95715H95.746L97.3488 6.56677H90.6789V22.9352H92.0042V7.86305H97.3953L95.22 11.7007L96.3796 12.329L98.911 7.86163H102.159V11.7903H105.998V10.494H103.484V7.86163H109.718V21.6375H105.5V22.9338H111.043V6.56677H103.993L105.595 3.95715H111.427H111.425ZM102.445 6.56677H98.895L97.2922 3.95715H104.048L102.445 6.56677Z"
      fill={color}
    />
    <path
      d="M105.996 13.2556H95.5731V20.108H105.996V13.2556ZM104.671 18.8117H96.8984V14.5519H104.671V18.8117Z"
      fill={color}
    />
    <path
      d="M129.952 2.63812V0.241699H128.626V2.63812H119.698L117.989 22.8527L119.309 22.9593L120.919 3.93298H139.93V2.63812H129.952Z"
      fill={color}
    />
    <path
      d="M131.079 5.86328H129.754V13.233H122.895V22.9054H137.937V13.2316H131.078V10.5197H137.937V9.22338H131.078V5.86328H131.079ZM136.613 21.6091H124.22V14.5293H136.613V21.6091Z"
      fill={color}
    />
  </svg>
);

export const SearchIcon = ({
  color = '#505050',
  width = '2rem',
  height = '2rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_148_2120)">
      <path
        d="M9 17C13.4183 17 17 13.4183 17 9C17 4.58172 13.4183 1 9 1C4.58172 1 1 4.58172 1 9C1 13.4183 4.58172 17 9 17Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0004 18.9999L14.6504 14.6499"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_148_2120">
        <rect width={width} height={height} fill={color} />
      </clipPath>
    </defs>
  </svg>
);

export const ShoppingBagIcon = ({
  color = '#505050',
  width = '2.4rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M3 6H21" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ArrowLeftIcon = ({
  color = '#505050',
  width = '2.4rem',
  height = '2.4rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M19 12H5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 19L5 12L12 5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AngleRightIcon = ({
  color = '#F7F7FA',
  width = '.9rem',
  height = '1.6rem',
}: IconPropsType) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 9 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.5L8 8.5L1 15.5"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//Item Common
export const PencilIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path
      d="M11.5909 1.58492C11.7763 1.39948 11.9964 1.25238 12.2387 1.15201C12.481 1.05165 12.7407 1 13.003 1C13.2652 1 13.5249 1.05165 13.7672 1.15201C14.0095 1.25238 14.2296 1.39948 14.4151 1.58492C14.6005 1.77036 14.7476 1.99051 14.848 2.2328C14.9483 2.47509 15 2.73478 15 2.99703C15 3.25928 14.9483 3.51897 14.848 3.76126C14.7476 4.00355 14.6005 4.2237 14.4151 4.40915L4.88331 13.9409L1 15L2.05909 11.1167L11.5909 1.58492Z"
      stroke="#505050"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddWishListModalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="103" height="99" viewBox="0 0 103 99" fill="none">
    <circle cx="49.5" cy="49.5" r="48" stroke="#505050" strokeWidth="3" />
    <path
      d="M37.5 29.1665L31.25 37.4998V66.6665C31.25 67.7716 31.689 68.8314 32.4704 69.6128C33.2518 70.3942 34.3116 70.8332 35.4167 70.8332H64.5833C65.6884 70.8332 66.7482 70.3942 67.5296 69.6128C68.311 68.8314 68.75 67.7716 68.75 66.6665V37.4998L62.5 29.1665H37.5Z"
      stroke="#505050"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M31.25 37.5H68.75"
      stroke="#505050"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M58.3334 45.8335C58.3334 48.0436 57.4554 50.1632 55.8926 51.7261C54.3298 53.2889 52.2102 54.1668 50 54.1668C47.7899 54.1668 45.6703 53.2889 44.1075 51.7261C42.5447 50.1632 41.6667 48.0436 41.6667 45.8335"
      stroke="#505050"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="89" cy="85" r="12.5" fill="#D86145" stroke="#D86145" strokeWidth="3" />
    <path
      d="M94.798 80.8989L87.0202 88.6767L83.4849 85.1414"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

//ArrowIcon
export const ArrowBottomIcon = ({
  width = '.6rem',
  height = '1rem',
  color = '#000',
}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 11 6"
    fill="none"
  >
    <path
      d="M10.2799 0.229439C10.1389 0.0825295 9.94771 -2.41412e-08 9.74837 -3.2855e-08C9.54902 -4.15688e-08 9.35783 0.0825295 9.21685 0.229439L5.49546 4.10846L1.77408 0.229439C1.63229 0.0866926 1.44238 0.00770571 1.24526 0.00949116C1.04814 0.0112766 0.859584 0.0936914 0.720195 0.238985C0.580806 0.384278 0.501742 0.580825 0.500029 0.786293C0.498316 0.991761 0.574092 1.18971 0.711038 1.33751L4.96394 5.77056C5.10492 5.91747 5.29611 6 5.49546 6C5.69481 6 5.886 5.91747 6.02698 5.77056L10.2799 1.33751C10.4208 1.19055 10.5 0.991266 10.5 0.783473C10.5 0.57568 10.4208 0.376394 10.2799 0.229439V0.229439Z"
      fill={color}
    />
  </svg>
);

export const ArrowTopIcon = ({
  width = '.6rem',
  height = '1rem',
  color = '#000',
}: IconPropsType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 10 6"
    fill="none"
  >
    <path
      d="M9.77988 5.77056C9.6389 5.91747 9.44771 6 9.24837 6C9.04902 6 8.85783 5.91747 8.71685 5.77056L4.99546 1.89154L1.27408 5.77056C1.13229 5.91331 0.94238 5.99229 0.745262 5.99051C0.548143 5.98872 0.359584 5.90631 0.220195 5.76102C0.0808067 5.61572 0.00174138 5.41918 2.85759e-05 5.21371C-0.00168423 5.00824 0.0740928 4.81029 0.211038 4.66249L4.46394 0.22944C4.60492 0.0825298 4.79611 2.27469e-07 4.99546 2.18755e-07C5.19481 2.10042e-07 5.386 0.0825297 5.52698 0.229439L9.77988 4.66249C9.92082 4.80945 10 5.00873 10 5.21653C10 5.42432 9.92082 5.62361 9.77988 5.77056Z"
      fill={color}
    />
  </svg>
);
export const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="20px" height="20px">
    <path
      fill="#FBBC05"
      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    />
    <path
      fill="#EA4335"
      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    />
    <path
      fill="#34A853"
      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    />
    <path
      fill="#4285F4"
      d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    />
  </svg>
);

export const CategoryArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
    <path
      d="M0.229439 0.220115C0.0825295 0.361098 0 0.552285 0 0.751634C0 0.950983 0.0825295 1.14217 0.229439 1.28315L4.10846 5.00454L0.229439 8.72592C0.086693 8.86771 0.0077061 9.05762 0.00949156 9.25474C0.011277 9.45186 0.0936919 9.64042 0.238985 9.77981C0.384278 9.91919 0.580825 9.99826 0.786293 9.99997C0.991761 10.0017 1.18971 9.92591 1.33751 9.78896L5.77056 5.53606C5.91747 5.39508 6 5.20389 6 5.00454C6 4.80519 5.91747 4.614 5.77056 4.47302L1.33751 0.220115C1.19055 0.0791756 0.991266 0 0.783473 0C0.57568 0 0.376394 0.0791756 0.229439 0.220115Z"
      fill="#A9A9A9"
    />
  </svg>
);
//Like
export const LargeLikeOffIcon = () => {
  const { isDetailPage } = useItemSlice();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
      <path
        d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
        stroke={isDetailPage ? '#a9a9a9' : '#fff'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const LargeLikeOnIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="21" viewBox="0 0 23 21" fill="none">
    <path
      d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183Z"
      fill="#D86145"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmallLikeIcon = () => (
  <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.38313 0.618851C7.18765 0.422657 6.95556 0.267022 6.70011 0.160838C6.44466 0.0546534 6.17086 0 5.89435 0C5.61784 0 5.34404 0.0546534 5.08859 0.160838C4.83315 0.267022 4.60105 0.422657 4.40558 0.618851L4.21237 0.81268C4.09513 0.93029 3.90466 0.93029 3.78743 0.81268L3.59422 0.618851C3.19937 0.222739 2.66384 0.000205319 2.10544 0.000205323C1.54704 0.000205327 1.01152 0.222739 0.61667 0.618851C0.221823 1.01496 4.16039e-09 1.55221 0 2.11239C-4.16039e-09 2.67258 0.221823 3.20982 0.61667 3.60594L1.02235 4.01292L3.78743 6.78685C3.90466 6.90446 4.09513 6.90446 4.21237 6.78685L6.97744 4.01292L7.38313 3.60594C7.57869 3.40983 7.73383 3.177 7.83968 2.92073C7.94552 2.66446 8 2.38979 8 2.11239C8 1.835 7.94552 1.56032 7.83968 1.30405C7.73383 1.04779 7.57869 0.814952 7.38313 0.618851Z"
      fill="#505050"
    />
  </svg>
);

//REVIEW
export const LargeReviewIcon = ({ fill, stroke }: IconPropsType) => (
  <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.2305 1.55115C13.3402 1.32687 13.6598 1.32687 13.7695 1.55116L17.2931 8.75711C17.3365 8.84596 17.421 8.90768 17.5188 8.92212L25.4035 10.0855C25.6486 10.1217 25.7467 10.4225 25.5701 10.5962L19.8617 16.2088C19.7917 16.2776 19.7598 16.3763 19.7762 16.473L21.1229 24.3989C21.1646 24.6443 20.9064 24.8308 20.6864 24.7141L13.6407 20.9737C13.5527 20.927 13.4473 20.927 13.3593 20.9737L6.31356 24.7141C6.09364 24.8308 5.83543 24.6443 5.87713 24.3989L7.22377 16.473C7.2402 16.3763 7.2083 16.2776 7.13834 16.2088L1.42992 10.5962C1.25325 10.4225 1.35136 10.1217 1.59645 10.0855L9.48119 8.92212C9.57903 8.90768 9.66346 8.84596 9.70691 8.75711L13.2305 1.55115Z"
      stroke={stroke}
      fill={fill}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmallReviewOffIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3.97556 3.35899L5 1.17665L6.02444 3.35899C6.13769 3.60025 6.36366 3.76927 6.62709 3.80976L8.9629 4.16877L7.24807 5.92507C7.07061 6.10682 6.99001 6.36204 7.03091 6.61274L7.43074 9.06408L5.38714 7.934C5.14624 7.80078 4.85376 7.80078 4.61286 7.934L2.56926 9.06408L2.96909 6.61274C3.00999 6.36204 2.92939 6.10682 2.75193 5.92507L1.0371 4.16877L3.37291 3.80976C3.63634 3.76927 3.86231 3.60025 3.97556 3.35899Z"
      stroke="#505050"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const SmallReviewOnIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4.72843 0.578512C4.83641 0.348486 5.16359 0.348486 5.27157 0.578513L6.47705 3.14653C6.51952 3.237 6.60426 3.30038 6.70305 3.31556L9.42331 3.73366C9.66459 3.77074 9.76293 4.0651 9.59239 4.23976L7.60582 6.27438C7.53927 6.34253 7.50905 6.43824 7.52438 6.53225L7.99053 9.39015C8.03085 9.63733 7.76843 9.82218 7.54926 9.70098L5.14518 8.37155C5.05484 8.3216 4.94516 8.3216 4.85482 8.37155L2.45074 9.70098C2.23157 9.82218 1.96915 9.63733 2.00947 9.39015L2.47562 6.53225C2.49095 6.43824 2.46073 6.34253 2.39418 6.27438L0.407608 4.23976C0.237072 4.0651 0.335411 3.77074 0.576686 3.73366L3.29695 3.31556C3.39574 3.30038 3.48048 3.237 3.52295 3.14653L4.72843 0.578512Z"
      fill="#505050"
    />
  </svg>
);

export const UploadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
    <path
      d="M21.5 23.3332H5.16668V6.99984H15.6667V4.6665H5.16668C3.88334 4.6665 2.83334 5.7165 2.83334 6.99984V23.3332C2.83334 24.6165 3.88334 25.6665 5.16668 25.6665H21.5C22.7833 25.6665 23.8333 24.6165 23.8333 23.3332V12.8332H21.5V23.3332ZM12.4117 19.6348L10.125 16.8815L6.91668 20.9998H19.75L15.62 15.5048L12.4117 19.6348ZM23.8333 4.6665V1.1665H21.5V4.6665H18C18.0117 4.67817 18 6.99984 18 6.99984H21.5V10.4882C21.5117 10.4998 23.8333 10.4882 23.8333 10.4882V6.99984H27.3333V4.6665H23.8333Z"
      fill="white"
    />
  </svg>
);

//HURRY ICONS
export const LeftHurryIcon = ({
  className,
  color = '#FF5A50',
  width = '8rem',
  height = '3.4rem',
}: IconPropsType) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 80 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_642_11669)">
      <path
        d="M1 16C1 24.2843 7.71573 31 16 31H62C70.2843 31 77 24.2843 77 16V16C77 7.71573 70.2843 1 62 1H1V16Z"
        fill={color}
        shapeRendering="crispEdges"
      />
      <path
        d="M20.3468 10.7V14.564H15.8948V10.7H13.6268V20.5H15.8948V16.482H20.3468V20.5H22.6148V10.7H20.3468ZM29.2875 20.668C32.0735 20.668 33.7255 19.072 33.7255 16.188V10.7H31.4855V16.104C31.4855 17.966 30.6875 18.736 29.3015 18.736C27.9295 18.736 27.1175 17.966 27.1175 16.104V10.7H24.8495V16.188C24.8495 19.072 26.5015 20.668 29.2875 20.668ZM44.6467 20.5L42.4487 17.35C43.7227 16.804 44.4647 15.726 44.4647 14.256C44.4647 12.058 42.8267 10.7 40.2087 10.7H35.9667V20.5H38.2347V17.77H40.2087H40.3207L42.2107 20.5H44.6467ZM42.1687 14.256C42.1687 15.32 41.4687 15.964 40.0827 15.964H38.2347V12.548H40.0827C41.4687 12.548 42.1687 13.178 42.1687 14.256ZM54.9416 20.5L52.7436 17.35C54.0176 16.804 54.7596 15.726 54.7596 14.256C54.7596 12.058 53.1216 10.7 50.5036 10.7H46.2616V20.5H48.5296V17.77H50.5036H50.6156L52.5056 20.5H54.9416ZM52.4636 14.256C52.4636 15.32 51.7636 15.964 50.3776 15.964H48.5296V12.548H50.3776C51.7636 12.548 52.4636 13.178 52.4636 14.256ZM64.9318 10.7H62.7058L60.0878 15.054L57.4698 10.7H55.0618L58.8558 17V20.5H61.1238V17.028L64.9318 10.7ZM66.1542 17.098H67.8902L68.3242 10.7H65.7202L66.1542 17.098ZM67.0222 20.612C67.8062 20.612 68.3662 20.038 68.3662 19.338C68.3662 18.624 67.8062 18.092 67.0222 18.092C66.2382 18.092 65.6782 18.624 65.6782 19.338C65.6782 20.038 66.2382 20.612 67.0222 20.612Z"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_642_11669"
        x="0"
        y="0"
        width="80"
        height="34"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_642_11669" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_642_11669"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export const WhiteHurryIcon = ({
  className,
  color = 'white',
  width = '8.5rem',
  height = '3.7rem',
}: IconPropsType) => (
  <svg
    className={className}
    width={width}
    height={height}
    viewBox="0 0 85 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_d_363_4620)">
      <path
        d="M1 16C1 7.71573 7.71573 1 16 1H67C75.2843 1 82 7.71573 82 16V34H16C7.71573 34 1 27.2843 1 19V16Z"
        fill={color}
        shapeRendering="crispEdges"
      />
      <path
        d="M20.882 13.2V17.064H16.43V13.2H14.162V23H16.43V18.982H20.882V23H23.15V13.2H20.882ZM29.8226 23.168C32.6086 23.168 34.2606 21.572 34.2606 18.688V13.2H32.0206V18.604C32.0206 20.466 31.2226 21.236 29.8366 21.236C28.4646 21.236 27.6526 20.466 27.6526 18.604V13.2H25.3846V18.688C25.3846 21.572 27.0366 23.168 29.8226 23.168ZM45.1818 23L42.9838 19.85C44.2578 19.304 44.9998 18.226 44.9998 16.756C44.9998 14.558 43.3618 13.2 40.7438 13.2H36.5018V23H38.7698V20.27H40.7438H40.8558L42.7458 23H45.1818ZM42.7038 16.756C42.7038 17.82 42.0038 18.464 40.6178 18.464H38.7698V15.048H40.6178C42.0038 15.048 42.7038 15.678 42.7038 16.756ZM55.4768 23L53.2788 19.85C54.5528 19.304 55.2948 18.226 55.2948 16.756C55.2948 14.558 53.6568 13.2 51.0388 13.2H46.7968V23H49.0648V20.27H51.0388H51.1508L53.0408 23H55.4768ZM52.9988 16.756C52.9988 17.82 52.2988 18.464 50.9128 18.464H49.0648V15.048H50.9128C52.2988 15.048 52.9988 15.678 52.9988 16.756ZM65.467 13.2H63.241L60.623 17.554L58.005 13.2H55.597L59.391 19.5V23H61.659V19.528L65.467 13.2ZM66.6893 19.598H68.4253L68.8593 13.2H66.2553L66.6893 19.598ZM67.5573 23.112C68.3413 23.112 68.9013 22.538 68.9013 21.838C68.9013 21.124 68.3413 20.592 67.5573 20.592C66.7733 20.592 66.2133 21.124 66.2133 21.838C66.2133 22.538 66.7733 23.112 67.5573 23.112Z"
        fill="#D86145"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_363_4620"
        x="0"
        y="0"
        width="85"
        height="37"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="1" dy="1" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_363_4620" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_363_4620"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);
