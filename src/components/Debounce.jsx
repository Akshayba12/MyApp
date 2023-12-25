import React, { useCallback, useState } from "react";

function Debounce() {
  const [serach, setSearch] = useState([]);
  // const [val, setVal] = useState('')

  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      // const context = this;
      clearTimeout(timer);
      timer = setTimeout(() => {
        func(...args);
      }, delay);
    };
  };

  const handleCHange = (event) => {
    const { value } = event.target;
    fetch(`https://demo.dataverse.org/api/search?q=${value}`)
      .then((res) => res.json())
      .then((json) => setSearch(json.data.items))
      .catch((error) => {
        console.log(error);
      });
    // setSearch(value);
  };

  const specifiedPeriod = useCallback(debounce(handleCHange, 500), []);

  console.log("se", serach);

  return (
    <div>
      <input type="text" name={serach} onChange={specifiedPeriod} />
      <div>
        {serach?.map((x, i) => (
          <div key={i}>
            <span className="text-name">{x?.name}</span>
          </div>
        ))}
        {/* <p>{serach}</p> */}
      </div>
    </div>
  );
}

export default Debounce;
