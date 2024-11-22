import Link from "next/link";

export default function ProductsPage() {
    const productId = 100;
    return (
        <div className="justify-center">

            <h1 className="text-2xl md:text-3xl pl-2 my-2 border-l-4  font-sans font-bold border-teal-400  dark:text-gray-700">
                Products list
            </h1>
            <br/>

            <table className="w-full divide-y divide-gray-200 border-1 shadow-2xl">
                <thead>
                <tr className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">
                    <th className="px-6 py-3 text-xs font-bold  uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-xs font-bol uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-xs font-bold uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 w-2 text-xs font-bold uppercase tracking-wider">Action</th>
                </tr>
                </thead>
                <tbody className="bg-white text-center divide-y divide-gray-200">
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">Jane Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">jane@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">Admin</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">Active</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit
                        </button>
                        <button
                            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete
                        </button>
                        <Link href={`products/${productId}`}
                            className="ml-2 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Show
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit
                        </button>
                        <button
                            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete
                        </button>
                        <Link href="/products/5" replace={false}
                              className="ml-2 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Show
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit
                        </button>
                        <button
                            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete
                        </button>
                        <Link href="/products/1"
                              className="ml-2 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Show
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit
                        </button>
                        <button
                            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete
                        </button>
                        <Link href="/products/1"
                              className="ml-2 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Show
                        </Link>
                    </td>
                </tr>

                <tr>
                    <td className="px-6 py-4 whitespace-nowrap">John Doe</td>
                    <td className="px-6 py-4 whitespace-nowrap">john@example.com</td>
                    <td className="px-6 py-4 whitespace-nowrap">User</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <span
                            className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">Inactive</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <button
                            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out">Edit
                        </button>
                        <button
                            className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Delete
                        </button>
                        <Link href="/products/1"
                              className="ml-2 px-4 py-2 font-medium text-white bg-green-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out">Show
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
  