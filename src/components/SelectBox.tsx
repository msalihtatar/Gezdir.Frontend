import { useState } from "react";
import { FormSelect } from "react-bootstrap";


const SelectBox = ({ options }:{options:string}) => {
    const [optionSelected, setSelectedOptions] = useState<string>('en');
  
    const handleChange = (selected:string) => {
      setSelectedOptions(selected);
    };
  
    return (
        <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
        <option selected value='en'>English</option>
        <option value="tr">Turkish</option>
      </select>
    );
  };