import React, { Component } from "react";
import PropTypes from "prop-types";

class Input extends Component {
  constructor(props) {
    super();
    this._onFocus = this._onFocus.bind(this);
    this.state = {
      formLineCss: props.value ? "form-line focused edited" : props.error ? "form-line error" : "form-line"
    };
  }

  _onFocus() {
    this.setState({
      formLineCss: "form-line focused"
    });
  }

  _onBlur = event => {
    if (!event.target.value) {
      this.setState({
        formLineCss: "form-line"
      });
    } else {
      this.setState({
        formLineCss: "form-line focused edited"
      });
    }
  };

  render() {
    const {
      id,
      autoComplete,
      placeholder,
      required,
      autoFocus,
      label,
      onChange,
      value,
      type,
      size,
      maxLength,
      tabIndex,
      min,
      max,
      disabled
    } = this.props;
    return (
      <div className="form-group form-float">
        <div className={this.state.formLineCss}>
          <input
            type={type}
            className="form-control"
            id={id}
            onChange={onChange}
            value={value}
            required={required}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            placeholder={this.props.floating ? "" : placeholder}
            onFocus={this._onFocus}
            onBlur={event => this._onBlur(event)}
            maxLength={maxLength}
            size={size}
            tabIndex={tabIndex}
            min={min}
            max={max}
            disabled={disabled}
          />
          <label className="form-label">{label}</label>
        </div>
        {this.props.error && <label className="error">{this.props.error}</label>}
      </div>
    );
  }
}
Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "hidden", "email", "number"]),
  floatingLabel: PropTypes.bool
};

export default Input;
