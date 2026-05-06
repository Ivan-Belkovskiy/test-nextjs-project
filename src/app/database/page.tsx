// 'use client';
// import DataPageWrapper from "@/components/DataPageWrapper/DataPageWrapper";
// import DataTable from "@/components/DataTable/DataTable";
// import TableSelector from "@/components/TableSelector/TableSelector";
// import { PrismaClient } from "@/generated/prisma/internal/class";
// import { prisma } from "@/lib/prisma";
// import { useState } from "react";

// const getTables = (prismaObj: typeof prisma) => {
//     const result = [];
//     for (const key in prismaObj) {
//         if ((prismaObj?.[key as keyof typeof prisma] as any)?.fields) result.push(key);
//     }
//     return result;
// }

export default function DatabasePage() {
    // const tables = getTables(prisma);
    // const [currentTable, setCurrentTable] = useState<(string | null)>(null);
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
            <h1 className="font-700 text-[25px]">Database</h1>
            <hr />
            {/* <DataTable table={'simple_task_manager__tasks'} /> */}
            
        </div>
    );
}