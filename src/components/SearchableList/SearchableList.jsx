import {useRef, useState} from "react";

export default function SearchableList({items, children, itemKeyFn}) {
    const lastChange = useRef();
    const [searchTerm, setSearchTerm] = useState('');

    const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

    function handleChange(event) {
        if(lastChange.current) {
            clearTimeout(lastChange.current);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setSearchTerm(event.target.value);
        }, 500)

    }
    return (
        <div className='searchable-list'>
            <input onChange={handleChange} type="search" placeholder='Search'/>
            <ul>
                {searchResults.map((item) => <li key={itemKeyFn(item)}>{children(item)}</li>)}
            </ul>
        </div>
    )
}