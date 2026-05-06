// Component is not working //
import { prisma } from "@/lib/prisma";

const getTables = (prismaObj: typeof prisma) => {
    const result: (keyof typeof prisma)[] = [];
    for (const key in prismaObj) {
        if ((prismaObj?.[key as keyof typeof prisma] as any)?.fields) result.push(key as keyof typeof prisma);
    }
    return result;
}

export default function TableSelector({ onSelect }: { onSelect?: (table: keyof typeof prisma) => any }) {
    const tables = getTables(prisma);

    return (
        <div className="table-selector">
            {tables.map((table, idx) => (
                <button key={idx} onClick={() => onSelect?.(table)}>{table as string}</button>
            ))}
        </div>
    );
}