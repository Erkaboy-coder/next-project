import React from 'react';
import {Metadata} from "next";

export const metadata:Metadata = {
    title:{
        absolute: 'Blog',
    }
}


// app/some-route/loading.tsx
export default function Loading() {
    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Loading...</p>
        </div>
    );
}
