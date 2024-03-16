import { featuredArticles } from "@/data/data";
import { useState } from "react";

export const useFeaturedArticles = ()=>{
    const [articlesToShow, setArticlesToShow] = useState(6);

    const handleLoadMore = () =>{
        setArticlesToShow(articlesToShow + 6)
    }

    const handleShowLess = ()=>{
        setArticlesToShow(6);
    }
    const fetchedFeaturedArticles = featuredArticles;
    const articles = fetchedFeaturedArticles.slice(0, articlesToShow);

    return {
        articles,
        articlesToShow,
        fetchedFeaturedArticles,
        handleLoadMore,
        handleShowLess,
    }
}
