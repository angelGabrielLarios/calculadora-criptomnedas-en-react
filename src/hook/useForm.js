import { useState } from 'react'

export const useForm = (dataInitial = {}) => {
    const [formData, setFormData] = useState(dataInitial)

    const onInputChange = ({target: {name, value}}) => {
        setFormData({
            ...formData,
            [name]: value
        })

    }

    return {
        formData,
        ...formData,
        setFormData,
        onInputChange        
    }
}

