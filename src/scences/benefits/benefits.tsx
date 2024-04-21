import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { SelectedPage } from "../shared/types"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                <div>
                    <h1 className="basis-3/5 font-montserrat text-3xl font-bold">
                        MORE THAN JUST A GYM.
                    </h1>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits