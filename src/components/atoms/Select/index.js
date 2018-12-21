import PropTypes from 'prop-types';
import React from 'react';
import Label from '../Label';

class Select extends React.Component {
    static propTypes = {
        id: PropTypes.string,
        label: PropTypes.string,
        required: PropTypes.bool,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        selectedOption: PropTypes.string,
        onChange: PropTypes.func.isRequired,
        options: PropTypes.array.isRequired,
    };

    static defaultProps = {
        required: false,
        label: '',
        placeholder: '',
        className: ''
    };
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    onChange(event) {
        const { target: { value } } = event;
        this.props.onChange(value);
    }

    render() {
        const { options, id, label, selectedOption, placeholder, required, className } = this.props;

        return (
            <div className="form-group">
                <Label text={label} id={id} required={required} />
                <div className="form-control-container">
                    <select
                        id={id}
                        name={id}
                        value={selectedOption}
                        onChange={this.onChange}
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
