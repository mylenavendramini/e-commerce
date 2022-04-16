import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {/* If theres no label, dont render a label. If theres label, render it: */}
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : " "
          } form-input-label `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
