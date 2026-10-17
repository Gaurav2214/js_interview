import { useEffect, useRef, useState } from "react";

export const Search = () => {
    const [result, setResult] = useState([]);
    const controllerRef = useRef<any>(null);

    useEffect(() => {
        return () => controllerRef.current?.abort();
    }, []);

    async function search(query) {
        controllerRef.current?.abort();
        const controller = new AbortController();
        controllerRef.current = controller;
        try{
            const response = await fetch(
                `/api/search?q=${encodeURIComponent(query)}`,
                {signal: controller.signal}
            )
            if(!response.ok){
                throw new error("Search result failed");
            }
            const data = await response.json();
            if(!controller.signal.aborted){
                setResult(data);
            }
        } catch(error){
            if(error?.name === 'AbortError'){
                console.log("Search failed:", error);
            }
        }
    }
    search();

    return() => {
        controller.abort();
    };
    

    
}