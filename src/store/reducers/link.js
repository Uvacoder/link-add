import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';
import toast from "react-hot-toast";

const initialState = {
    links: localStorage.links === undefined ? [] : JSON.parse(localStorage.links),
    selectedVoteFilter: localStorage.selectedVoteFilter === undefined ? 1 : localStorage.selectedVoteFilter // 1 azalan - 2 artan
};


const link = createSlice({
    name: "link",
    initialState,
    reducers: {
        deleteLink: (state, action) => {
            const newLinks = state.links.filter(link => link.id !== action.payload);
            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);

        },
        addLink: (state, action) => {
            const d = new Date();
            console.log(action.payload.vote);
            const newLinks = [{ link: action.payload.link, vote: action.payload.vote !== "" ? parseInt(action.payload.vote) : 0, id: uuidv4(), date: d.getTime() }, ...state.links];
            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);

        },
        voteIncrement: (state, action) => {
            const d = new Date();
            const newLinks = state.links.map(link => {
                if (link.id === action.payload) {
                    return { ...link, vote: link.vote + 1, date: d.getTime() }
                }
                return link;
            });

            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);
        },
        voteDecrement: (state, action) => {
            const d = new Date();
            const newLinks = state.links.map(link => {
                if (link.id === action.payload) {
                    return { ...link, vote: link.vote - 1,  date: d.getTime() }
                }
                return link;
            });

            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);
        },
        sortAsc: (state, action) => {
            const newLinks = state.links.sort(function (a, b) { return b.date - a.date }).sort(function (a, b) { return b.vote - a.vote });
            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);
        },
        sortDesc: (state, action) => {
            const newLinks = state.links.sort(function (a, b) { return b.date - a.date }).sort(function (a, b) { return a.vote - b.vote });
            state.links = newLinks;
            localStorage.links = JSON.stringify(newLinks);
        },
        selectedFilter: (state, action) => {
            state.selectedVoteFilter = action.payload;
            localStorage.selectedVoteFilter = action.payload;
        }
    }
});

export const { deleteLink, voteIncrement, voteDecrement, sortAsc, sortDesc, addLink, selectedFilter } = link.actions;
export default link.reducer; 
