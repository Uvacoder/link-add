import { Dialog } from '@headlessui/react';
import Button from "../components/Button";
import { deleteLink } from '../store/reducers/link';
import { useDispatch } from 'react-redux';
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";


export default function Confirm({ data, closeHandler }) {

    const dispatch = useDispatch();
    const { t } = useTranslation();

    const deleteHandler = () => {
        dispatch(deleteLink(data.data.id));
        toast.success(t("successfully-deleted"));
        closeHandler();
    }

    return (
        <>
            <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 text-gray-900 mb-2"
            >
                {t("delete-confirm")}
            </Dialog.Title>
            <div className='flex items-center justify-end pt-3'>
                <Button onClick={deleteHandler} design={"red"}>{t("yes")}</Button>
            </div>
        </>
    )
}