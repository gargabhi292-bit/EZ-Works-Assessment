import axios from 'axios';

const API_BASE_URL = 'https://vernanbackend.ezlab.in';

const ContactApi = () => {
    const postContact = async (contactData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/api/contact-us/`, contactData);
            return response.data;
        } catch (error) {
            console.error('Error posting contact:', error.message);
            throw error;
        }
    };

    return { postContact };
}

export default ContactApi