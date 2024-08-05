import React from "react";
import { useState, useEffect } from "react";

const url = `https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`;

const useFetchedQuestions = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error ('The API hates you')
                }
                const result = await response.json();
                setData(result.results);
            }
            catch (err) {
                setError(err);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData(url);
    }, [url])
    return { data, loading, error };
}

export default useFetchedQuestions;