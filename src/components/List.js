import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { useState } from "react";
import Pagination from "./Pagination";
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { useTranslation } from "react-i18next";

export default function List() {

    const { links } = useSelector(state => state.link);
    const { t } = useTranslation();

    const [animationParent] = useAutoAnimate();

    const [currentPage, setCurrentPage] = useState(1);
    const [linksPerPage, setLinksPerPage] = useState(5);

    const indexOfLastPost = currentPage * linksPerPage;
    const indexOfFirstPost = indexOfLastPost - linksPerPage;

    const currentLinks = links.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    if (links.length > 0 && currentLinks.length === 0) {
        paginate(currentPage - 1);
    }

    return (
        <>
            <div className="px-8 mt-5 flex-1 flex flex-col gap-y-3" data-testid="list" ref={animationParent}>
                {
                    links.length > 0 ? currentLinks.map(link => <ListItem link={link} key={link.id} />) : (
                        <div className="text-center mt-10 text-2xl w-full">
                            {t("data-not-found")}
                        </div>
                    )
                }
            </div>
            <Pagination paginate={paginate} linksPerPage={linksPerPage} totalLinks={links.length} currentPage={currentPage} />
        </>
    )
}