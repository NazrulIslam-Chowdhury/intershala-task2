import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import './AppointmentForm.css';

const AppointmentForm = () => {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();

    const appointmentOnSubmit = (data) => {
        const appointment = {
            Name: data.name,
            Email: data.email,
            Mobile: data.mobile,
            Date: data.date,
        }

        fetch('https://task-2-server.vercel.app/appointment', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(appointment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Your appointment submitted')
                }
            })
            .catch((error) => console.error(error))
        reset();
    }

    return (
        <section>
            <div className='color'></div>
            <div className='color'></div>
            <div className='color'></div>
            <div className="box">
                <div className="container">
                    <div className="form">
                        <h2>Appointment</h2>
                        <form onSubmit={handleSubmit(appointmentOnSubmit)} action="">
                            <div className="inputBox">
                                <input
                                    {...register("name")}
                                    type="text"
                                    placeholder='Name' />
                            </div>
                            <div className="inputBox">
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder='Email' />
                            </div>
                            <div className="inputBox">
                                <input
                                    {...register("mobile")}
                                    type="tel"
                                    placeholder='Mobile' />
                            </div>
                            <div className="inputBox">
                                <input
                                    {...register("date")}
                                    type="date" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value='Submit' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppointmentForm;