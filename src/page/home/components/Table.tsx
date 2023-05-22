import { TrashSimple , NotePencil} from 'phosphor-react'

function Table() {
    return (

        <div className="relative overflow-x-auto shadow-md mt-4 w-full  bg-white p-4">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Empresa
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Responsável
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Colaborador
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Ações
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple MacBook Pro 17"
                        </th>
                        <td className="px-6 py-4">
                            Silver
                        </td>
                        <td className="px-6 py-4">
                            Laptop
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <NotePencil />
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <TrashSimple color="red" />
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Microsoft Surface Pro
                        </th>
                        <td className="px-6 py-4">
                            White
                        </td>
                        <td className="px-6 py-4">
                            Laptop PC
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <NotePencil />
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <TrashSimple color="red" />
                            </a>
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Magic Mouse 2
                        </th>
                        <td className="px-6 py-4">
                            Black
                        </td>
                        <td className="px-6 py-4">
                            Accessories
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <NotePencil />
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <TrashSimple color="red" />
                            </a>
                        </td>
                    </tr>
                    <tr className="border-b bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Google Pixel Phone
                        </th>
                        <td className="px-6 py-4">
                            Gray
                        </td>
                        <td className="px-6 py-4">
                            Phone
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <NotePencil />
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <TrashSimple color="red" />
                            </a>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Apple Watch 5
                        </th>
                        <td className="px-6 py-4">
                            Red
                        </td>
                        <td className="px-6 py-4">
                            Wearables
                        </td>
                        <td className="px-6 py-4 flex gap-3">
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <NotePencil />
                            </a>
                            <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                <TrashSimple color="red" />
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
}

export default Table;