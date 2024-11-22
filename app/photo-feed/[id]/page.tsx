import { notFound } from "next/navigation"; // For App Router
import wonders from "../wonders"; // Adjust path if necessary
import Image from "next/image";

type Props = {
    params: {
        id: string;
    };
};

export default function PhotoDetailPage({ params }: Props) {
    const { id } = params;

    const photo = wonders.find((wonder) => wonder.id === id);

    if (!photo) {
        return notFound();
    }

    return (
        <main className="container mx-auto">
            <h1 className="text-3xl font-bold my-4 text-center">{photo.name}</h1>
            <Image
                src={photo.src}
                alt={photo.name}
                width={800}
                height={600}
                className="object-cover mx-auto"
            />
            <p className="text-lg mt-4 text-center">Photographer: {photo.photographer}</p>
            <p className="text-lg text-center">Location: {photo.location}</p>
        </main>
    );
}
