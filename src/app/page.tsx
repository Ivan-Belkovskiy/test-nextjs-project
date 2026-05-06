import Counter from "@/components/Counter/Counter";
import CounterBlock from "@/components/CounterBlock/CounterBlock";
// import DataTable from "@/components/DataTable/DataTable";
// import { simple_task_manager__tasksModel } from "@/generated/prisma/models";
import { prisma } from "@/lib/prisma";
// import Image from "next/image";

export default async function Home() {
  const columns = Object.keys(prisma.simple_task_manager__tasks.fields);
  const data = await prisma.simple_task_manager__tasks.findMany();
  // console.log("DEBUG: DATABASE_URL is", process.env.DATABASE_URL ? "FOUND" : "NOT FOUND");
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-center">
        <h1>Test Next.js Project</h1>
        <div className="content flex flex-col items-center gap-10">
          <CounterBlock />
          <div className="data-block flex flex-col gap-5 items-center border-solid border-1 rounded-[5px] p-3">
            {/* <table>
              <thead>
                <tr>
                  {columns.map((col: string, idx: number) => (
                    <th key={idx}>{col}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {data.map((item: simple_task_manager__tasksModel, idx: number) => (
                  <tr key={idx}>
                    {Object.values(item).map((val, i) => (
                      <td key={i}>{String(val)}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan={columns.length - 1}>Total Count:</td>
                  <th>{data.length}</th>
                </tr>
              </tfoot>
            </table> */}
            {/* {data.map((item, idx) => (
              <li key={idx}>{item.name}</li>
            ))} */}
          </div>
        </div>
      </main>
    </div>
  );
}
