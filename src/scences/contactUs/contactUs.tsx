import { SelectedPage } from '../shared/types'
import HText from '../shared/Htext'
import { useForm } from 'react-hook-form'
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import { motion } from 'framer-motion'

type Props = {
    setSetlectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSetlectedPage }: Props) => {
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
                <div className='mt-10 justify-between gap-8 md:flex'></div>
            </motion.div>
        </section>
    )
}

export default ContactUs