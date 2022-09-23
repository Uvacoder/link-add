import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import Button from "../components/Button";
import { useDispatch } from 'react-redux';
import { addLink } from '../store/reducers/link';
import { useTranslation } from "react-i18next";

export default function Confirm({ data, closeHandler }) {

    const [vote, setVote] = useState(1);
    const [link, setLink] = useState("");
    
    const { t } = useTranslation();

    const dispatch = useDispatch();

    const submitHandler = e => {
        e.preventDefault();
        var regex = new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
        if (link.match(regex)) {
            dispatch(addLink({ link, vote }));
            toast.success(t("successfuly-added"));
            closeHandler();
        } else {
            toast.error(t("please-add-url"));
        }
    }
    
    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 mb-2"
            >
                {t("new-link-add")}
            </Dialog.Title>
            <form onSubmit={submitHandler}>
                <div className='flex items-center gap-x-3'>
                    <input type="text" placeholder="Link..." className='g-text my-3 flex-1' value={link} onChange={e => setLink(e.target.value)} />
                    <input type="number" value={vote} onChange={e => setVote(e.target.value)} className="g-text" />
                </div>
                <div className='flex items-center justify-end pt-3'>
                    <Button design={"green"} data-testid="new-link-add-save-btn">{t("save")}</Button>
                </div>
            </form>
        </>
    )
}