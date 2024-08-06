import { Button } from "@/components/ui/button"
import { UserPlus , CirclePlus } from "lucide-react"
import { Input } from "@/components/ui/input"
import { DataTable } from "@/components/custom/data-table"
import { Payment, columns } from "./Columns"


export const payments: Payment[] = [
  {
    id: "728ed52f",
    amount: 100,
    status: "success",
    email: "m@example.com",
  },
  {
    id: "489e1d42",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  {
    id: "728ed52f",
    amount: 100,
    status: "success",
    email: "m@example.com",
  },
  {
    id: "489e1d43",
    amount: 125,
    status: "failed",
    email: "example@gmail.com",
  }, {
    id: "728ed62f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d72",
    amount: 125,
    status: "failed",
    email: "example@gmail.com",
  }, {
    id: "728ed02f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "489e1d32",
    amount: 125,
    status: "processing",
    email: "example@gmail.com",
  },
  // ...
]


const student = () => {
  return (
    <div className="pr-8">
      <div>
      <h1>STUDENTS...</h1>
      <Button>
          <UserPlus />
          Add-student
      </Button>
      </div>
      <div>
        <Input />
        <Button>
          <CirclePlus />
          status
        </Button>
        <Button>
          <CirclePlus />
          priority
        </Button>
      </div>
      <div>
        <DataTable columns={columns} data={payments}  />
      </div>
    </div>
  )
}

export default student