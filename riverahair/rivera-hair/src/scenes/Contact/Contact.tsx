
import "./Contact.scss";
import { motion } from "framer-motion";
import {useForm} from 'react-hook-form'

const Contact = () => {

    const {
        register,
        trigger,
        formState: { errors }
      } = useForm();

      const onSubmit = async (e:any) => {
        const isValid = await trigger();
        if (!isValid) {
          e.preventDefault();
        }
      }

  return (
    <motion.div 
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.5 }}
    variants={{
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    }}
    className="contact-form-container">
      <form 
           target="_blank"
           onSubmit={onSubmit}
           action="https://formsubmit.co/elias.rivera101@gmail.com"
           method="POST"
      className="contact-form">
      <h2>Contact Me</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name"
           placeholder="NAME"
           {...register("name", {
             required: true,
             maxLength: 100,
           })}/>
            {errors.name && (
              <p className="text-red mt-1">
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" 
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
              )}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4}
           {...register("message", {
            required: true,
            maxLength: 2000,
          })}
        />
        {errors.message && (
          <p className="text-red mt-1">
            {errors.message.type === "required" &&
              "This field is required."}
            {errors.message.type === "maxLength" &&
              "Max length is 2000 char."}
          </p>
        )}
        </div>
        <button type="submit">Send Message</button>
      </form>
      <div className="contact-image">
        <img src="https://i.ibb.co/Cnh0V3K/Whats-App-Image-2023-05-31-at-12-25-34-PM.jpg" alt="Contact" />
      </div>
    </motion.div>
  );
};

export default Contact;
