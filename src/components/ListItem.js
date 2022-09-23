import { FaTrash } from "react-icons/fa";
import Button from "./Button";
import { BsCaretDownFill, BsCaretUpFill } from "react-icons/bs";
import { openModal } from '../store/reducers/modal';
import { voteIncrement, voteDecrement, sortAsc, sortDesc } from "../store/reducers/link";
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from "react-i18next";

export default function ListItem({ link }) {

    const dispatch = useDispatch();
    const { t } = useTranslation();


    const { selectedVoteFilter } = useSelector(state => state.link);

    const removeItemHandler = () => {
        dispatch(openModal({ name: "confirm", maxWidth: "max-w-md", data: link }))
    }

    const voteUp = () => {
        dispatch(voteIncrement(link.id));

        if (parseInt(selectedVoteFilter) === 1) {
            dispatch(sortAsc());
        } else {
            dispatch(sortDesc());
        }

    }
    const voteDown = () => {
        dispatch(voteDecrement(link.id));
        if (parseInt(selectedVoteFilter) === 1) {
            dispatch(sortAsc());
        } else {
            dispatch(sortDesc());
        }
    }

    return (
        <div className="flex items-center justify-between bg-gray-50 p-3 rounded-xl group" >
            <div className="flex items-center gap-x-3 w-48">
                <span className="font-semibold">{t("vote")}: <span>{link.vote}</span></span>
                <Button className="vote-btn" design="gray" onClick={voteDown}><BsCaretDownFill /></Button>
                <Button className="vote-btn" design="gray" onClick={voteUp}><BsCaretUpFill /></Button>
            </div>
            <div>
                <a className="text-blue-600 hover:underline" data-testid="list-item-text" href={/(http(s?)):\/\//i.test(link.link) ? link.link : `https://${link.link}`} target="_blank" rel="noopener noreferrer">{link.link}</a>
            </div>
            <div className="flex items-center gap-x-4">
                <Button onClick={removeItemHandler} design="red" className="flex opacity-0 items-center justify-center !p-0 !w-8 !h-8 group-hover:opacity-100"><FaTrash size={13} /></Button>
            </div>
        </div>
    )
}