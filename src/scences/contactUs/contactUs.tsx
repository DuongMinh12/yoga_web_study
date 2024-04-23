import React from 'react'
import { SelectedPage } from '../shared/types'
import HText from '../shared/Htext'

type Props = {
    setSetlectedPage: (value: SelectedPage) => void
}

const ContactUs = ({ setSetlectedPage }: Props) => {
    return (
        <section id='contectus'>
            <div>
                <div>
                    <HText><span className='text-primary-500'>JOIN NOW{" "}</span>TO GET IN SHAPE</HText>
                    <p>Congue adipiscing risus commodo placerat. Tellus et in feugiat nisl
                        sapien vel rhoncus. Placerat at in enim pellentesque. Nulla
                        adipiscing leo egestas nisi elit risus sit. Nunc cursus sagittis.</p>
                </div>
            </div>
        </section>
    )
}

export default ContactUs