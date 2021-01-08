export interface SelectProps {
    id: string;
    label: string;
    required: boolean;
    placeholder: string;
    className: string;
    selectedOption: string;
    onChange: (value: string) => void;
    options: string[];
}

