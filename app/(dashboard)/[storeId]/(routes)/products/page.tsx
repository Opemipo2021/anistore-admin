import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import { BillboardsColumn } from "./components/columns";
import { format } from "date-fns";

const ProductsPage = async ({
    params
}: {
    params: {storeId: string}
}) => {
      
    const products = await prismadb.billboard.findMany({
        where: {
            StoreId: params.storeId
        },
        orderBy: {
            createdAt: 'desc'
        }
    });

    const formattedProduct: BillboardsColumn[] = products.map((item) => ({
        id: item.id,
        label: item.label,
        createdAt: format(item.createdAt, "MMMM do, yyyy")
    }))

    return(
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <BillboardClient data={formattedProduct}/>
            </div>
        </div>
    );
}

export default ProductsPage;


// Cross check the Prsima db scripts before pushing to Prisma Client to avoid Typo errors.
// Write script to wake PlanetScale database.
// Push Products Model to Prisma Client Database  to complete Products page ASAP.
// Then begin to work on the User side of the Website 
