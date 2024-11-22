import { Metadata } from "next";

type Props = {
    params: {
        productId: string;
    };
};

// Ensure generateMetadata is async and handles params properly
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    return {
        title: `Product ${params.productId}`, // Dynamically set title based on productId
    };
};

export default async function ProductDetails({ params }: Props) {
    const productId = params.productId;

    return (
        <>
            <div style={{ height: '450px' }}>
                <h1 className="text-center p-5 text-blue-500">This is the Product Detail page</h1>
                <h1 className="p-3">Details about product {productId}</h1>
            </div>
        </>
    );
}
