import React, { useState } from 'react'
import { GridContainer3 } from '@/components/shared/containers/container';
import Card from '../card';
import { useFeaturedArticles } from '@/hooks/useFeaturedArticles';


const FeaturedArticles = () => {

  const { 
        articles,
        articlesToShow,
        fetchedFeaturedArticles,
        handleLoadMore,
        handleShowLess 
      } = useFeaturedArticles();
    
  return (
    <div className='mt-4'>
                <GridContainer3>
                    {articles.map((article, index)=>
                            <Card card={{'thumbnail':article.thumbnail, 'tittle': article.tittle, 'text':article.text, 'url':article.url}} />
                    )}
                </GridContainer3>
                {articlesToShow < fetchedFeaturedArticles.length ? (
            <div className="text-left pb-4 md:pb-0">
              <p
                className="text-primary py-2.5 text-lg mt-2 md:mt-8 underline decoration-pur cursor-pointer"
                onClick={handleLoadMore}
              >
                View more
              </p>
            </div>
          ): 
          <div className="text-left pb-4 md:pb-16 border-b border-[#E4CCE5]">
              <p
                className="text-primary py-2.5 text-lg mt-2 md:mt-8 underline decoration-pur cursor-pointer"
                onClick={handleShowLess}
              >
                Show Less
              </p>
            </div>
          }
            </div>
  )
}

export default FeaturedArticles
