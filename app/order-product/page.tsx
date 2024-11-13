"use client";

import React from 'react';
import { useRouter } from "next/navigation";

const OrderPage = () => {
    const router = useRouter();

    const handleClick = ()=>{
        console.log('click');
        // router.replace('/');
        router.back()
    }
    return (
        <div className={'h-svh'}>
            <h1>Order page</h1>
            <br/>
            <button className={'bg-gray-600 rounded text-white p-2 hover:bg-blue-300'}  onClick={handleClick}>Previous</button>
        </div>
    );
};

export default OrderPage;