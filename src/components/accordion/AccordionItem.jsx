import {createContext, useContext} from "react";


const AccordionItemContext = createContext();

export function useAccordionItemContext() {
    const ctx = useContext(AccordionItemContext);

    if (!ctx) {
        throw new Error('useAccordionItemContext must be used within AccordionItemContext');
    }
    return ctx;
}
export default function AccordionItem({children, className, id}) {


    return <AccordionItemContext.Provider value={id}>
        <li className={className}>{children}</li>
    </AccordionItemContext.Provider>

}