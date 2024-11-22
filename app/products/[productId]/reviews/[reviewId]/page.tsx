// "use client";
import {notFound} from 'next/navigation';
import React from "react";

function RandomInt(count: number): number {
    console.log(Math.floor(Math.random() * count))
    return Math.floor(Math.random() * count);
}

export default function ReviewDetail({params}: {
    params: {
        productId: string,
        reviewId: string
    }
}) {

    const random = RandomInt(2);
    if(random === 1){
        throw new Error('Error loading product')
    }

    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
      <>
          <div style={{'height': '500px'}}>
              <h1 className="text-center p-5 text-blue-500">This is ReviewDetail page</h1>
              <h1 className="p-3">Review {params.reviewId} for product {params.productId}</h1>
          </div>
      </>
    );
}
  