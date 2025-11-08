import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import ContactApi from '../api/ContactApi'

const ContactViewModel = () => {
    const { register, handleSubmit, setError, clearErrors, formState: { errors, isSubmitting, isSubmitSuccessful } } = useForm();

    const { postContact } = ContactApi()

    const onSubmit = async (formData) => {
        try {
            console.log('Submitting contact with data:', formData)
            const data = await postContact(formData);
            console.log('Contact submitted:', data)
            clearErrors('contactForm')
        } catch (err) {
            setError('contactForm', { type: 'server', message: 'Failed to submit contact.' })
        }
    }

    return {
        register, errors, isSubmitting, isSubmitSuccessful,
        submitForm: handleSubmit(onSubmit)
    }
}

export default ContactViewModel