import React from 'react';
// import './button.css';
import { InputField } from '../Input/InputField';
// import { AuthProvider } from "../../../context/AuthContext";

import { useAuth } from "../../../context/AuthContext";
import {useState} from 'react'
interface FormProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Form = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: FormProps) => {

  // const {setDataUser} = useAuth();

  const [customer,setCustomer] = useState({
    biography:'',
    nik:'',
    jobPosition:'',
    company:'',
    division:'',
    location:'',
  })

  const {setDataCustomer,checkEdit } = useAuth();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here, e.g., send the form data to the server
    setDataCustomer(customer)
    checkEdit()
  };

  const onBiography=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,biography:event.target.value})
  }

  const onNik=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,nik:event.target.value})
  }

  const onJobPosition=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,jobPosition:event.target.value})
  }

  const onCompany=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,company:event.target.value})
  }

  const onDivision=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,division:event.target.value})
  }
  const onLocation=(event: React.ChangeEvent<HTMLInputElement>)=>{
    setCustomer({...customer,location:event.target.value})
  }

  return (
    <div className="pt-3 flex  gap-y-3">
    <form onSubmit={handleSubmit} className="flex flex-row justify-between flex-wrap">
      <InputField onInputChange={onBiography} id="biography" label="Biography" value={customer.biography}/>
      <InputField onInputChange={onNik} id="nik" label="NIK" value={customer.nik}/>
      <InputField onInputChange={onJobPosition} id="jobPosition" label="Job Position" value={customer.jobPosition}/>
      <InputField onInputChange={onCompany} id="company" label="Company" value={customer.company}/>
      <InputField onInputChange={onDivision} id="division" label="Division" value={customer.division}/>
      <InputField onInputChange={onLocation} id="location" label="Location" value={customer.location}/>
      <button type="submit" className="w-full bg-[#f9dcdb] p-2 rounded-[5px] text-white">Submit</button>
    </form>
  </div>
  );
};
