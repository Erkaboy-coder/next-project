import { useRouter } from "next/router";
import wonders from "../wonders";
import Image from "next/image";

export default function PhotoModal() {
    const router = useRouter();
    const { id } = router.query;

    const wonder = wonders.find((item) => item.id === id);

    if (!wonder) {
        return (
            <div className="flex justify-center items-center h-screen">
                <p>Image not found.</p>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center">
            <div className="relative bg-white p-4 rounded">
                <button
                    className="absolute top-2 right-2 text-red-500"
                    onClick={() => router.back()}
                >
                    Close
                </button>
                <Image
                    src={wonder.src}
                    alt={wonder.name}
                    className="object-cover"
                />
                <p className="mt-2 text-center">{wonder.name}</p>
            </div>
        </div>
    );
}
