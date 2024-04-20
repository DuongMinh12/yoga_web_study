import { SelectedPage } from "../shared/types"
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import useMediaQuery from "@/hooks/userMediaQuery";
import ActionButton from "../shared/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";


type Props = {
    // selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Home = ({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
    return (
        <section id="home" className="gap-16 bg-gray-20 pt-10 md:h-full md:pb-0">
            {/* image and main header */}
            <div className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6">
                {/* main header */}
                <div className="z-10 mt-10 md:basis-3/5">
                    {/* heading */}
                    <div className="md:-mt-20">
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 md:before:content-evolvetext before:z-[-1]">
                                <img alt="home=page-text" src={HomePageText} />
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </div>
                    {/* action */}
                    <div className="mt-8 flex items-center gap-8">
                        <ActionButton setSelectedPage={setSelectedPage}>Join now</ActionButton>
                        <AnchorLink className="text-sm font-bold text-primary-500 underline hover:text-secondary-500" onClick={() => setSelectedPage(SelectedPage.ContactUs)}
                            href={`#${SelectedPage.ContactUs}`}>
                            <p>Learn more</p>
                        </AnchorLink>
                    </div>
                </div>
                {/* image */}
                <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </div>
            {/* sponsors */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6 ">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img src={SponsorRedBull} alt="redbull-sponsor" />
                            <img src={SponsorForbes} alt="forbes-sponsor" />
                            <img src={SponsorFortune} alt="fortune-sponsor" />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home