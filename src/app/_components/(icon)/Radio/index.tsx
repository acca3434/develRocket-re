interface RadioGroupProps {
  label?: string;
}

export const CheckRadio: React.FC<RadioGroupProps> = ({ label }) => {
  return (
    <div>
      <div className="flex gap-1 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <circle
            cx="11"
            cy="11"
            r="10"
            stroke="#5569FF"
            strokeWidth="2"
            fill="none"
          />
          <circle cx="11" cy="11" r="6" fill="#5569FF" />
        </svg>
        <label>{label}</label>
      </div>
    </div>
  );
};

export const UnCheckRadio: React.FC<RadioGroupProps> = ({ label }) => {
  return (
    <div>
      <div className="flex gap-1 ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
        >
          <circle cx="11" cy="11" r="10" stroke="#888888" stroke-width="2" />
        </svg>
        <label>{label}</label>
      </div>
    </div>
  );
};
