'use client'

import { useSearchParams, usePathname, useRouter } from "next/navigation"
import { useDebouncedCallback } from "use-debounce";

export function SearchMovie(){
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();

    const handleSearch = useDebouncedCallback((term) => {
        const params = new URLSearchParams(searchParams);

        if (term) {
            params.set('search', term);
        } else {
            params.delete('search');
        }

        replace(`${pathname}?${params.toString()}`);
    }, 400)

    return (
        <div className="p-2 flex flex-wrap justify-center items-center gap-2">
            <label htmlFor="search">Search Movie: </label>
            <input onChange={(e) => {
                handleSearch(e.target.value)
            }} className="bg-gray-700 p-2 rounded-md outline-gray-900 border-none" type="text" id="search" placeholder="Search movie..."
            defaultValue={searchParams.get('search')?.toString()}/>
        </div>
    )
}