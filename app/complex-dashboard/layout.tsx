import React from 'react';
import ComplexLogin from "@/app/complex-dashboard/@login/page";
const DashboardLayout = ({
     children,
     users,
     revenue,
     notifications,
     }: {
    children: React.ReactNode;
    users: React.ReactNode;
    notifications: React.ReactNode;
    revenue: React.ReactNode;
    login: React.ReactNode;
}) => {
    const isLoggedIn = true;
    return isLoggedIn ? (
        <div>
            <div>{children}</div>
            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div>{users}</div>
                        <div>{revenue}</div>
                    </div>
                    <div style={{ display: 'flex', flex: 1 }}>{notifications}</div>
                </div>
            </div>
        </div>
    ) : (
        <ComplexLogin />
    );
};

export default DashboardLayout;
