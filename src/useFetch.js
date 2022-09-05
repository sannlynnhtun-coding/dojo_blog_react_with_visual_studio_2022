import { useState, useEffect } from "react";
const useFetch = (url) => {
    // const [name, setName] = useState('collin');
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    const abortCont = new AbortController();

    useEffect(() => {
        // console.log('use efffect ran');
        // console.log(blogs);
        // console.log(name);

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('could not fetch data for that resource');
                    }
                    return res.json();
                })
                .then(data => {
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                })
                .catch((err) => {
                    if (err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } else {
                        console.log(err.message);
                        setIsPending(false);
                        setError(err.message);
                    }
                });
        }, 500);
        // return () => console.log('cleanup');
        // return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error }
}

export default useFetch;