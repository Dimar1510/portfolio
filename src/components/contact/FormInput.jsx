import PropTypes from "prop-types";

const FormInput = ({ type, name, placeholder, load }) => {
  return (
    <div className="relative h-16">
      <input
        type={type}
        name={name}
        className="absolute top-0 left-0 size-full border-title-clr border bg-transparent  transition-colors duration-500 outline-none text-text-clr p-6 z-10 rounded-xl disabled:cursor-wait disabled:border-gray-400"
        placeholder={placeholder}
        autoComplete="on"
        disabled={load}
      />
    </div>
  );
};

export default FormInput;

FormInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  load: PropTypes.bool,
};
