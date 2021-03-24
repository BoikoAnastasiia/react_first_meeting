import './colorPicker.css';

const ColorPicker = ({ options }) => {
  // console.log(options);
  return (
    <div>
      <h2> Color Picker </h2>
      <div>
        {options.map(({ label, color }) => (
          <span
            key={label}
            className="ColorPicker-option"
            style={{
              backgroundColor: color,
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};
export default ColorPicker;
