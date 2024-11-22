type PageProps = {
    params: {
        slug?: string[]; // Optional array of strings for dynamic routing
    };
};

export default function Docs({ params }: PageProps) {
    console.log('Slug:', params.slug);

    // Render for two slug segments
    if (params.slug?.length === 2) {
        return (
            <h1>
                Viewing docs for feature: <strong>{params.slug[0]}</strong> and concept: <strong>{params.slug[1]}</strong>
            </h1>
        );
    }

    // Render for one slug segment
    else if (params.slug?.length === 1) {
        return (
            <h1>
                Viewing docs for feature: <strong>{params.slug[0]}</strong>
            </h1>
        );
    }

    // Default render for no slug
    return <h1>Docs Home Page</h1>;
}

