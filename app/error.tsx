"use client";

import React from 'react';

function ErrorBoundary({error, reset}: {error: Error, reset: () => void}) {
    return (
        <div style={{height:'400px'}}>{error.message} <button onClick={reset}>Try again</button></div>
    );
}

export default ErrorBoundary;