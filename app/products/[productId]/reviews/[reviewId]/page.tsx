import {notFound} from 'next/navigation';

export default function ReviewDetail({params}: {
    params: {
        productId: string
        reviewId: string
    }
}) {
    if(parseInt(params.reviewId) > 1000){
        notFound();
    }
    return (
      <>
        <h1 className="text-center p-5 text-blue-500">This is ReviewDetail page</h1>
        <h1 className="p-3">Review {params.reviewId} for product {params.productId}</h1>
      </>
    );
  }
  