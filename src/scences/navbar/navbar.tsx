import React from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Links from "../links";
import { SelectedPage } from "../shared/types";
import userMediaQuery from "@/hooks/userMediaQuery";
import ActionButton from "../shared/ActionButton";

type Props = {
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
    const isAboveMediumScreens = userMediaQuery("(min-width: 1060px)");
    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* left side */}
                        <img src={Logo} alt="logo" />
                        {/* right side */}
                        {isAboveMediumScreens ?
                            (<div className={`${flexBetween} w-full`}>
                                <div className={`${flexBetween} gap-8 text-sm`}>
                                    <Links
                                        page={"Home"}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Links
                                        page={"Benefits"}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Links
                                        page={"Our Classes"}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                    <Links
                                        page={"Contact Us"}
                                        selectedPage={selectedPage}
                                        setSelectedPage={setSelectedPage}
                                    />
                                </div>
                                <div className={`${flexBetween} gap-8`}>
                                    <p>Sign In</p>
                                    <ActionButton
                                        setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                </div>
                            </div>) : (<div>
                                <button className="rounded-full bg-secondary-500 p-2"
                                    onClick={() => setIsMenuToggled(!isMenuToggled)} >
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button >

                            </div>)}
                    </div>
                </div>
            </div>
            {/*Mobile menu model  */}
            {!isAboveMediumScreens && isMenuToggled && (
                <div className="fixed right-0 bottom-0 z-40 w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* close icon */}
                    <div className="flex justify-end p-12">
                        <button className="h-6 w-6 text-gray-400" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <XMarkIcon />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
