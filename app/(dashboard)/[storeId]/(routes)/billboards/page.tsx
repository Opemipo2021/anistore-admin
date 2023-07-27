import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardsColumn } from "./components/columns";
import { format } from "date-fns";

const BillboardsPage = async ({
    params
}: {
    params: {storeId: string}
}) => {

    const billboards = await prismadb.billboard.findMany({
        where: {
            StoreId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedBillboard: BillboardsColumn[] = billboards.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "MMMM do yyyy")
    }))

    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedBillboard}/>
            </div>
        </div>
    );
}

export default BillboardsPage;