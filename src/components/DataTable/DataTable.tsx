// import "./DataTable.css";
// import { prisma } from "@/lib/prisma";

// export default async function DataTable({ table }: { table: string | keyof typeof prisma }) {
//     const tableName = table as keyof typeof prisma;

//     if (!(prisma[tableName] as any).fields) return;

//     const prismaObj = prisma as any;


//     const columns = Object.keys((prisma[tableName] as any).fields);
//     const data = await (prisma[tableName] as any).findMany();

//     return (
//         <table>
//             <thead>
//                 <tr>
//                     {columns.map((col, idx) => (
//                         <th key={idx}>{col}</th>
//                     ))}
//                 </tr>
//             </thead>
//             <tbody>
//                 {data.map((item: any, idx: any) => (
//                     <tr key={idx}>
//                         {Object.values(item).map((val, i) => (
//                             <td key={i}>{String(val)}</td>
//                         ))}
//                     </tr>
//                 ))}
//             </tbody>
//             <tfoot>
//                 <tr>
//                     <td colSpan={columns.length - 1}>Total Count:</td>
//                     <th>{data.length}</th>
//                 </tr>
//                 <tr>
//                     <td colSpan={columns.length} className="update-container">
//                         <button className="update-btn">Update Data</button>
//                     </td>
//                 </tr>
//             </tfoot>
//         </table>
//     )
// }