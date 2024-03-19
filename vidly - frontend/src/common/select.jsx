import React, { Component } from "react";

class Input extends Component {
  render() {
    const { name, label, options, error, ...rest } = this.props;
    return (
      <div className="mb-3">
        <label htmlFor={name} className="form-label">
          {label}
        </label>
        <select {...rest} name={name} id={name} className="form-control">
          <option value="" />
          {options.map((option) => (
            <option key={option._id} value={option._id}>
              {option.name}
            </option>
          ))}
        </select>
        {error && (
          <div style={{ marginTop: "0.25rem" }} className="text-danger small">
            {error}
          </div>
        )}
      </div>
    );
  }
}

export default Input;
