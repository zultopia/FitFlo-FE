interface FilterButtonGroupProps {
  options: string[];
  selectedOptions: string[];
  onChange: (option: string) => void;
  title: string;
}

const FilterButtonGroup: React.FC<FilterButtonGroupProps> = ({
  options,
  selectedOptions,
  onChange,
  title,
}) => (
  <div className="mb-4">
    <h2 className="text-lg font-semibold">{title}</h2>
    <div className="flex gap-2 flex-wrap">
      {options.map((option) => (
        <button
          key={option}
          className={`px-4 py-2 rounded-md border transition-all ${
            selectedOptions.includes(option)
              ? "bg-blue-500 text-white"
              : "bg-white border-gray-300 text-gray-700"
          }`}
          onClick={() => onChange(option)}
        >
          {option}
        </button>
      ))}
    </div>
  </div>
);

export default FilterButtonGroup;
