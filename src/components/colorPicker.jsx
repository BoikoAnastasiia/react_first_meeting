
const styles = {
    option: {
        display: 'inline-block',
        width: 40,
        height: 40,
        margin: 4,
    }
}


const ColorPicker = ({ options }) => {
    // console.log(options);
    return <div><h2> Color Picker  </h2>
        <div>
            {options.map(({ label, color }) => (
                <span
                    key={label}
                    className="ColorPicker-option"
                    style={{
                ...styles.option,
                backgroundColor: color,
                    }}
                >
                    </span>))}
    </div>
    </div>
    
}
export default ColorPicker