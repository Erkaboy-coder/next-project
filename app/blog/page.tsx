
export const metadata = {
    title: "Blog",
    description:"Blog meta",
}

async function fetchData() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Data loaded!";
}

export default async function BlogPage() {
    const data = await fetchData();

    return (
        <div style={{ height: '400px' }} className={''}>

            <h1 className="text-center mt-5 text-blue-500">This is BlogPage</h1>
            {data}
        </div>
    );
}
  