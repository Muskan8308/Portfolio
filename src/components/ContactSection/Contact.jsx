import React from 'react'
import styles from './Contact.module.css'
import {useForm} from 'react-hook-form'
import { toast } from 'react-hot-toast';
import emailjs from 'emailjs-com'
import linkedinIcon from '../../assets/profile/linkedinLogo.png';
import githubIcon from '../../assets/profile/githubLogo.png';
import leetcodeIcon from '../../assets/profile/leetcodeLogo.png';

export const Contact = () => {

    const { register, handleSubmit, formState: {errors}} = useForm();

    const onSubmitClick = (data) => {
        emailjs.sendForm(
            '','',form.current, ''
        )
        .then((result) => {
            console.log(result.text);
            toast.success("Message sent successfully!");
        },
        (error) => {
            console.log(error.text);
            toast.error("Message failed to send.");
        })
        reset();
    }

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.container}>
        {/* Left box - Message */}
        <div className={styles.messageBox}>
          <p>
            Thanks for visiting! We hope that you have found what you needed.{" "}
            <br />
            If not, feel free to contact us.
          </p>
        </div>

        {/* Right box - Form */}

        <form onSubmit={handleSubmit(onSubmitClick)} className={styles.form}>
          <input
            {...register("name", { required: true })}
            placeholder="Full Name"
          />
          {errors.name && (
            <span className={styles.error}>Name is required!</span>
          )}

          <input
            {...register("email", { required: true })}
            placeholder="Email"
          />
          {errors.email && (
            <span className={styles.error}>Email is required!</span>
          )}

          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
          />
          {errors.message && (
            <span className={styles.error}>Message is required!</span>
          )}

          <button type="submit">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className={styles.socialLinks}>
          <a
            href="https://www.linkedin.com/in/muskan-chourasia19/"
            rel="noopener noreferrer"
            target="_blank"
            className={styles.socialIcon}
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/Muskan8308"
            className={styles.socialIcon}
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://leetcode.com/u/Muskan83038/"
            className={styles.socialIcon}
          >
            <img src={leetcodeIcon} alt="LeetCode" />
          </a>
        </div>
      </div>
    </section>
  );
}