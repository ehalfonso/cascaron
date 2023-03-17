import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [form, setForm] = useState(initialForm);
  const handleChange = (e) => {
    //console.log(`${e.target.name} ${e.target.value}`)
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleReset = (e) => {
    setForm(initialForm)    
  };

  return {
    ...form,
    form,
    handleChange,
    handleReset,
  };
};

export default useForm;
