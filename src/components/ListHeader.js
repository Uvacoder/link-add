import Button from "./Button";
import { FiPlus } from "react-icons/fi";
import { openModal } from '../store/reducers/modal';
import { useDispatch, useSelector } from 'react-redux';
import { Menu, Transition } from '@headlessui/react';
import { BiChevronDown } from 'react-icons/bi';
import { useTranslation } from "react-i18next";
import { sortAsc, sortDesc, selectedFilter } from "../store/reducers/link";

export default function ListHeader() {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const { selectedVoteFilter } = useSelector(state => state.link);

    const newLinkAddHandler = () => {
        dispatch(openModal({ name: "item", maxWidth: "max-w-2xl", data: [] }))
    }

    const selectedFilterHandle = e => {
        if (e === 1) {
            dispatch(sortAsc());
        } else {
            dispatch(sortDesc());
        }
        dispatch(selectedFilter(e));
    }

    return (
        <>
            <div className="list-header mt-8 flex justify-between px-8 z-20">
                <div className="flex items-center gap-x-4">
                    <p className="text-xl">{t("all-my-links")}</p>
                    <Button className="flex items-center gap-x-3" onClick={newLinkAddHandler} data-testid="new-link-add-dialog-btn">{t("new-link-add")} <FiPlus className="text-white" /></Button>
                </div>
                <div>
                    <Menu>
                        <Menu.Button>
                            <div className='select-input !w-52'>
                                <span> {selectedVoteFilter.toString() === "1" ? t("highest-first")  : t("lowest-first")} </span> <BiChevronDown size={22} />
                            </div>
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
                                        {({ active }) => (
                                            <div className={`${active && 'bg-blue-500'}`} onClick={() => selectedFilterHandle(1)}>
                                                <span>{t("highest-first")}</span>
                                            </div>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <div className={`${active && 'bg-blue-500'}`} onClick={() => selectedFilterHandle(2)}>
                                                <span>{t("lowest-first")}</span>
                                            </div>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </>
    )
}