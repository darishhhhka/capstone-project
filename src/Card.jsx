import { IconComponent } from "./IconComponent";
import "./index.css";

export const Card = ({ iconName, title, description }) => {
  return (
    <article className="font-['Gilroy'] h-[var(--card-height)] max-w-[var(--card-max-width)] bg-[var(--medium-grey)] p-[var(--padding-card)] rounded-2xl flex flex-col gap-[var(--gap)]">
      <div className="self-end">
        <IconComponent iconName={iconName} className="w-1/3" />
      </div>
      <div className="font-bold leading-7">
        <h3 className="text-[var(--white)] text-2xl mb-3">{title}</h3>
        <p className="text-[var(--light-grey)] text-lg">{description}</p>
      </div>
    </article>
  );
};
