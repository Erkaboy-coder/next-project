import React from 'react';
import Link from "next/link";

const F1 = () => {
    return (
        <div style={{ height: "400px" }}>
            <h1>F1 page</h1>
            <Link href='/f1/f2' > To F2 </Link>
        </div>
    );
};

export default F1;