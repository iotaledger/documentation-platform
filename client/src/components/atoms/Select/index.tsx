import React, { ReactNode } from "react";
import Label from "../Label";
import { SelectProps } from "./SelectProps";

class Select extends React.Component<SelectProps> {
    public render(): ReactNode {
        const { options, id, label, selectedOption, placeholder, className } = this.props;

        return (
            <div className="form-group">
                <Label text={label} id={id} />
                <div className="form-control-container">
                    <select
                        id={id}
                        name={id}
                        value={selectedOption}
                        onChange={e => (this.props.onChange
                            ? this.props.onChange(e.target.value)
                            : undefined)}
                        className={`select ${className}`}
                    >
                        {placeholder && <option value="">{placeholder}</option>}
                        {options.map(opt => (
                            <option key={opt} value={opt}>
                                {opt}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        );
    }
}

export default Select;
