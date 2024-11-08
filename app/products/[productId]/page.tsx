
export default function PdoductDetails({params}: {
    params: {productId: BigInteger}
}) {
    return (
      <>
        <h1 className="text-center p-5 text-blue-500">This is Pdoduct detail page</h1>
        <h1 className="p-3">Details about product {params.productId}</h1>
      </>
    );
  }
  