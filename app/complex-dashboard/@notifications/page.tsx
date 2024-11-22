import React from 'react';
import Card from "@/app/components/card";
import Link  from "next/link"

const Notification = () => {
    return (
        <Card>
            <div>Notification</div>
            <Link href="/complex-dashboard/archived" style={{ textDecoration: 'underline', color: 'blue' }}> Archived</Link>
        </Card>
    );
};

export default Notification;