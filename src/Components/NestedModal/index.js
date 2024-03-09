import { useState } from 'react';
import { technicalEvent, nonTechnicalEvent } from '../../utils/constants';
import axios from 'axios';
import RegisterCard from '../RegisterCard';
import Dialog from '@mui/material/Dialog';

import payment from "../../Assets/payment.jpg"
import "./index.css"

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [openPayment, setOpenPayment] = useState(false);


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    collegeName: '',
    technicalEvents: [],
    nonTechnicalEvents: [],
    userPaymentPhoto: null
  });



  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === 'checkbox') {
      if (checked) {
        setFormData(prevData => ({
          ...prevData,
          [name]: [...prevData[name], value]
        }));
      } else {
        setFormData(prevData => ({
          ...prevData,
          [name]: prevData[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prevData => ({
          ...prevData,
          userPaymentPhoto: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };






  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handlePaymentDialogOpen = () => {
    setOpenPayment(true);
  };

  const handlePaymentDialogClose = () => {
    setOpenPayment(false);
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      if (formData.number.length !== 10) {

        alert("Enter a valid Number")
        return
      }

      await axios.post(`${process.env.REACT_APP_BACKEND}/api/v1/user/check`, { email: formData.email })


      handleClose()
      handlePaymentDialogOpen()

    } catch (error) {

      setFormData({
        name: '',
        email: '',
        number: '',
        collegeName: '',
        technicalEvents: [],
        nonTechnicalEvents: [],
        userPaymentPhoto: null
      });
      alert("Email already exist please contact us for any queries")
      handleClose()
    }

  };


  const handleSubmitPaymentForm = async (event) => {
    event.preventDefault();
    try {
      if (!formData.userPaymentPhoto) {
        alert("Payment screenshot is required")
        return
      }

      const response = await axios.post(`${process.env.REACT_APP_BACKEND}/api/v1/user`, formData)



      if (response.status === 200) {
        alert("registered successfully")
        setFormData({
          name: '',
          email: '',
          number: '',
          collegeName: '',
          technicalEvents: [],
          nonTechnicalEvents: [],
          userPaymentPhoto: null
        });
      }

    } catch (error) {
      
      alert("Something went wrong,please check your data ")
    }
    handlePaymentDialogClose();
  };


  return (
    <>
      <div onClick={handleClickOpen} id="register">
        <RegisterCard />
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll='body'
        fullWidth={true}
        maxWidth="xs"
      >
        <div className='model-container'>
          <form className='model-form-container' onSubmit={handleSubmit}>
            <div >
              <label>Name:</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div>
              <label>Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label>Phone No:</label>
              <input type="text" name="number" value={formData.number} onChange={handleChange} required />
            </div>
            <div >
              <label>College Name:</label>
              <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} required />
            </div>
            <div >
              <label>Technical Events:</label>
              <div>
                {technicalEvent.map((event, index) => {
                  return (
                    <div className='model-form-checkbox' key={index}>
                      <input type="checkbox" name="technicalEvents" value={event} onChange={handleChange} />
                      <label>{event}</label>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <label>Non-Technical Events:</label>
              <div>
                {nonTechnicalEvent.map((event, index) => {
                  return (
                    <div className='model-form-checkbox' key={index}>
                      <input type="checkbox" name="technicalEvents" value={event} onChange={handleChange} />
                      <label>{event}</label>
                    </div>
                  )
                })}
              </div>
            </div>
            <button
              type="submit">Submit</button>
          </form>
        </div>
      </Dialog>



      <Dialog
        open={openPayment}
        onClose={handlePaymentDialogClose}
        scroll='body'
        fullWidth={true}
        maxWidth="xs"
      >
        <div className='model-container'>

          <form
            method="post"
            action="#"
            className='model-form-container'
            onSubmit={handleSubmitPaymentForm}>
            <div >
              <p style={{ color: "black" }}>Scan the QR code for payment</p>
              <img src={payment} alt='scanner' />
            </div>

            <div >
              <label>Upload the screenshot of the payment <span style={{fontSize:"0.7rem",color:"red"}}>(*size should not exceed 5MB)</span></label>
              <input
                type="file"
                name="userPaymentPhoto"
                onChange={handleImageChange}
                accept="image/*"
                id="userPaymentPhoto" />
            </div>

            <button
              type="submit">Submit</button>
          </form>
        </div>
      </Dialog>



    </>
  );
}

