'use client'

import { RxHamburgerMenu } from "react-icons/rx"
import { IoClose } from "react-icons/io5"
import { useEffect } from "react"

interface Props {
    openMenu: boolean
    setOpenMenu: () => void
}

export function HeaderBurgerMenu(props: Props) {

    useEffect(() => {
        if (props.openMenu) {
            document.body.classList.add('overflow-hidden')
        } else {
            document.body.classList.remove('overflow-hidden')
        }
        return () => document.body.classList.remove('overflow-hidden')
    }, [props.openMenu])

    return (
        <div>
            <div className="relative w-8 h-8 cursor-pointer">
                <div
                    onClick={() => props.setOpenMenu()}
                    className="relative w-full h-full"
                >
                    <div
                        className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${props.openMenu
                                ? 'opacity-0 rotate-90 scale-50'
                                : 'opacity-100 rotate-0 scale-100'
                            }
            `}
                    >
                        <RxHamburgerMenu className="text-white light:text-ink size-8" />
                    </div>
                    <div
                        className={`
            absolute inset-0 flex items-center justify-center
            transition-all duration-300 ease-in-out
            ${props.openMenu
                                ? 'opacity-100 rotate-0 scale-100'
                                : 'opacity-0 -rotate-90 scale-50'
                            }
            `}
                    >
                        <IoClose className="text-white light:text-ink size-8" />
                    </div>
                </div>
            </div>
        </div>
    )
}