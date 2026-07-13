import { useState } from 'react';

export function useAdmissionForm() {
  const [values, setValues] = useState({
    studentFirstName: '', studentLastName: '', dob: '', gender: '', grade: '',
    parentName: '', parentEmail: '', parentPhone: '', prevSchool: '', reason: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!values.studentFirstName.trim()) newErrors.studentFirstName = 'Required';
    if (!values.studentLastName.trim()) newErrors.studentLastName = 'Required';
    if (!values.dob) newErrors.dob = 'Required';
    if (!values.grade.trim()) newErrors.grade = 'Required';
    if (!values.parentName.trim()) newErrors.parentName = 'Required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.parentEmail)) newErrors.parentEmail = 'Valid email required';
    if (!values.parentPhone.trim()) newErrors.parentPhone = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // In production, send to API
      setSubmitted(true);
    }
  };

  return { values, errors, handleChange, handleSubmit, submitted };
}