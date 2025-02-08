
export function MovieCardSkeleton() {

    return (
        <div className="bg-gray-900 rounded-lg h-full shadow-lg p-2 opacity-20">
            <div className="w-[215px] h-[400px] md:w-[230px] md:h-[420px] bg-gray-600"></div>
            <div className="p-4 text-center max-w-48 mx-auto flex flex-col justify-center items-center">
                <h5 className="text-basic font-bold bg-gray-600 w-full h-4"></h5>
                <p className="bg-gray-600 h-4 w-16 mt-2"></p>
            </div>
        </div>
    )
}


export function MoviesSkeleton(){
    return (
        <>
            <ul className="grid p-2" style={{gridTemplateColumns: 'repeat(auto-fill, minmax(225px, 1fr))', gap: '.5rem'}}>
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>   
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>  
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>  
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>  
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>  
                <li className="mx-auto">
                    <MovieCardSkeleton/>
                </li>  
            </ul> 
        </>
    )
}