import React , {useState} from 'react'
import './styles/ContactUs.css'
import axios from 'axios'


const ContactUs = () => {
    const [formData , setFormData] = useState({name:'',email:'',phone:''});

    const handleChange = (e) =>{
        const {name, value}=e.target;
        setFormData({
        ...formData,
        [name]:value
        });
    };

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post('http://upskilling-egypt.com:3001/contact',formData);
            console.log(res.data)
        }catch(error){
            console.log(error) 
        }
        setFormData({name:'',email:'',phone:''})
    }

  return (
    <section className='ContactUs' id='contact-sec'>
     <h1 className='contactUs-heading'>CONTACT US</h1>
     <div className='contactUs-details'>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name} onChange={handleChange} placeholder='Full Name'className='form-input'/>
            <input type='email' name='email' value={formData.email} onChange={handleChange} placeholder='Email' className='form-input'/>
            <input type='text' name='phone' value={formData.phone} onChange={handleChange} placeholder='Phone Number' className='form-input'/>
            <button type='submit' className='submit-btn'>Send</button>
        </form>
        <div className='contacts-list'>
            <div className='contact'>
                < img src={ require('../utils/imgs/mail.png')} alt='mail-icon' className='contact-img'/>
                <p>upskilling.eg1@gmail.com</p>
            </div>
            <div className='contact'>
                < img src={ require('../utils/imgs/phone.png')} alt='phone-icon' className='contact-img'/>
                <p>+20 115 493 2137</p>
            </div>
        </div>
     </div>
    </section>
  )
}

export default ContactUs