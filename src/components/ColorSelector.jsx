

const ColorSelector = ({ label, colors, value, onChange }) => {
  
  const renderOptions = () => {
    const options = [];

    for (const key in colors) {
      if (Object.hasOwnProperty.call(colors, key)) {
        options.push(
          <option key={key+colors[key]} value={key}>
            {key.toUpperCase()}
          </option>
        );
      }
      
    }

    return options;
  };

  return (
    <div className="my-5">
      <label className="px-3  text-xl font-extrabold">{label}:</label>
      <select className="px-3 py-2 text-lg rounded-md" value={value} onChange={onChange}>
        { renderOptions()}
      </select>
    </div>
  );
};

export default ColorSelector;
