import './colorPicker.css';

const ColorPicker = ({ options }) => {
  // console.log(options);
  return (
    <div className="ColorPicker-container">
      <h2 className="ColorPicker-title"> Color Picker </h2>
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
