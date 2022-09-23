import { BiChevronDown } from 'react-icons/bi';
import { Menu, Transition } from '@headlessui/react';
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from 'react';

export default function Header() {
    const { t } = useTranslation();
    const [date, setDate] = useState("");
    const [clock, setClock] = useState("");


    const getDateFunc = () => {
        const daysEng = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const monthsEng = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

        const daysTr = ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"];
        const monthsTr = ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"];

        const current = new Date();

        if (i18next.resolvedLanguage === "en") {
            var day = daysEng[current.getDay()];
            var month = monthsEng[current.getMonth()];
        } else {
            var day = daysTr[current.getDay()];
            var month = monthsTr[current.getMonth()];
        }

        let dayNumber = current.getDate();
        let hour = current.getHours().toString();
        let minutes = current.getMinutes().toString();


        setDate(`${day}, ${dayNumber} ${month}`);
        setClock(`${hour.length === 1 ? "0" + hour : hour}:${minutes.length === 1 ? "0" + minutes : minutes}`);
    }


    useEffect(() => {
        getDateFunc();
        setInterval(() => {
            getDateFunc();
        }, 1000 * 60);
    }, []);

    const changeLang = (lang) => {
        i18next.changeLanguage(lang, (err, t) => {
            if (err) return console.log('something went wrong loading', err);
        });
        getDateFunc();
    }
    return (
        <div className="header z-30">
            <div className='flex flex-col w-24'>
                <b className='text-3xl' data-testid="timer">{clock}</b>
                <span className='text-gray-500 text-md'>{date} </span>
            </div>
            <div className='flag-selector' data-testid="lang-btn">
                <Menu>
                    <Menu.Button>
                        {
                            i18next.resolvedLanguage === "en" ? <div className='select-input'><img src="https://flagicons.lipis.dev/flags/4x3/us.svg" />

                                <span>English</span> <BiChevronDown size={22} />
                            </div> : <div className='select-input'><img src="https://flagicons.lipis.dev/flags/4x3/tr.svg" />

                                <span>Türkçe</span> <BiChevronDown size={22} />
                            </div>
                        }
                    </Menu.Button>
                    <Transition
                        enter="transition duration-100 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className='flag-selector-inner'>
                                <Menu.Item>
                                    <div onClick={() => changeLang("tr")}>
                                        <img src="https://flagicons.lipis.dev/flags/4x3/tr.svg" />
                                        <span>{t("turkish")}</span>
                                    </div>
                                </Menu.Item>
                                <Menu.Item>
                                    <div onClick={() => changeLang("en")}>
                                        <img src="https://flagicons.lipis.dev/flags/4x3/us.svg" />
                                        <span>{t("english")}</span>
                                    </div>
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    )
}