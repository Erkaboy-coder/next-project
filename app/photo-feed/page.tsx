import Link from "next/link";
import wonders from "./wonders";
import Image from "next/image";

export default function PhotoFeedPage() {
    return (
        <main className="container mx-auto">
            <h1 className="text-center text-3xl font-bold my-4">New Wonders of the World</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {wonders.map(({ id, src, name }) => (
                    <Link key={id} href={`/photo-feed/${id}`}>
                        <Image
                            src={src}
                            alt={name}
                            style={{'height': '500px'}}
                            className="object-cover w-full"
                        />
                        <p className="text-lg mt-4 text-center">Name: {name}</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}
