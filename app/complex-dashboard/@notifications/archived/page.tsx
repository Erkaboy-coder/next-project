import React from 'react';
import Card from "@/app/components/card";
import Link from "next/link";

const Archived = () => {
    return (
        <Card>
            <div>Archived Notification</div>
            <Link href="/complex-dashboard" style={{ textDecoration: 'underline', color: 'blue'  }}> Default</Link>
        </Card>
    );
};

export default Archived;