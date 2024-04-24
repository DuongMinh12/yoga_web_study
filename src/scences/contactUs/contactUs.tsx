import { SelectedPage } from '../shared/types'
import HText from '../shared/Htext'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'
import { register } from 'module'

type Props = {
    setSetlectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSetlectedPage }: Props) => {
    const inputStyle = `mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
    const { register,
        trigger,
        formState: { errors }
    } = useForm();
    const onSubmit = async (e: any) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    }
    return (
        <section id='contectus' className='mx-auto w-5/6 pt-24 pb-32'>
            <motion.div onViewportEnter={() => setSetlectedPage(SelectedPage.ContactUs)}>
                {/* header */}
                <motion.div className='md:w-3/5'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 }
                    }}>
                    <HText><span className='text-primary-500'>JOIN NOW{" "}</span>TO GET IN SHAPE</HText>
                    <p className='my-5'>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                </motion.div>
                {/* form and image */}
                <div className='mt-10 justify-between gap-8 md:flex'>
                    <motion.div className='mt-10 basis-3/5 md:mt-0'
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, y: 50 },
                            visible: { opacity: 1, y: 0 }
                        }}>
                        <form action="https://formsubmit.co/your@email.com" target='_blank'
                            method='POST'
                            onSubmit={onSubmit}>
                            <input type="text" className={inputStyle}
                                placeholder='NAME'
                                {...register("name", { required: true, maxLength: 100 })} />
                            {errors.name && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.name.type === "required" && "this field is required."}
                                    {errors.name.type === "MaxLength" && "Max length is 100 char."}
                                </p>
                            )}
                            <input type="text" className={inputStyle}
                                placeholder='EMAIL'
                                {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i })} />
                            {errors.email && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.email.type === "required" && "this field is required."}
                                    {errors.email.type === "pattern" && "Invalid email address."}
                                </p>
                            )}
                            <textarea
                                rows={4}
                                cols={50}
                                className={inputStyle}
                                placeholder='MASSAGE'
                                {...register("massage", { required: true, maxLength: 2000 })} />
                            {errors.massage && (
                                <p className='mt-1 text-primary-500'>
                                    {errors.massage.type === "required" && "this field is required."}
                                    {errors.massage.type === "MaxLength" && "Max length is 2000 char."}
                                </p>
                            )}
                            <button type='submit'
                                className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white'>SUBMIT</button>
                        </form>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export default ContactUs