// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (intialValue) => {
  const [values, setValues] = useState(intialValue);

  const handleChanges = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };
  return [values, handleChanges];
};

export default useForm;
