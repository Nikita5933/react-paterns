import {createContext, useContext, useState} from "react";
import AccordionItem from "./AccordionItem.jsx";
import AccordionTitle from "./AccordionTitle.jsx";
import AccordionContent from "./AccordionContent.jsx";

const AccordionContext = createContext();

export function useAccordionContext() {
    const ctx = useContext(AccordionContext);

    if(!ctx) {
        throw new Error("useAccordionContext must be used within a AccordionContext");
    }

    return ctx;
}

export default function Accordion({children, className}) {

    const [openItemId, setOpenItemId] = useState();

    function toggleItem(id) {
        setOpenItemId((prevId) => prevId === id ? null : id);
    }

    const contextValue = {
        openItemId: openItemId,
        toggleItem: toggleItem,
    }
    return (
        <AccordionContext.Provider value={contextValue}>
        <ul className={className}>
            {children}
        </ul>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;