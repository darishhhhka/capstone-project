import './index.css';
export const Circle = ({ className }) => {
  return (
    <div
      className={`${className} rounded-full w-[var(--circle-size)] h-[var(--circle-size)] bg-[linear-gradient(141.33deg,var(--dark-grey)50.14%,var(--dark-medium-grey)108.81%)] absolute`}
    ></div>
  );
};
