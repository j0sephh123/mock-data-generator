import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

interface SelectOption {
  label: string;
  value: string;
}

interface SelectProps {
  options: SelectOption[];
  selectedOption?: string;
  onChange?: (value: string) => void;
}

interface SelectHandle {
  reset: () => void;
  setValue: (value: string) => void;
  getValue: () => string;
}

const SelectInner = forwardRef<SelectHandle, SelectProps>(
  ({ options, selectedOption = "", onChange }, ref) => {
    const [value, setValue] = useState(selectedOption);

    useImperativeHandle(ref, () => ({
      reset: () => {
        setValue("");
        onChange?.("");
      },
      setValue: (newValue: string) => {
        setValue(newValue);
        onChange?.(newValue);
      },
      getValue: () => value,
    }));

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      const newValue = event.target.value;
      setValue(newValue);
      onChange?.(newValue);
    };

    return (
      <select value={value} onChange={handleChange}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

SelectInner.displayName = "SelectInner";

const Select = () => {
  const selectRef = useRef<SelectHandle>(null);

  const handleChange = (value: string) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      <SelectInner
        ref={selectRef}
        options={[
          { label: "CSV", value: "csv" },
          { label: "JSON", value: "json" },
        ]}
        selectedOption="opt1"
        onChange={handleChange}
      />
    </div>
  );
};

export default Select;
