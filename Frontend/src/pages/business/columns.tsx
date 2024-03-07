import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { task } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
// import { useAppDispatch } from "@/hooks/hooks";
// import {
//   setConfirmationSate,
//   setDeleteTask,
//   setEditTask,
// } from "@/store/reducers/taskReducer";

// const ActionButton = ({ id }: any): JSX.Element => {
//   const dispatch = useAppDispatch();
//   return (
//     <div className="flex gap-2">
//       <Button
//         onClick={() => {
//           dispatch(setEditTask({ status: true, id }));
//         }}
//         className="p-2"
//       >
//         edit
//       </Button>
//     </div>
//   );
// };

export const Columns: ColumnDef<task>[] = [
  {
    accessorKey: "username",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          username
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "display_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          Name
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "classifications",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="p-0"
        >
          classifications
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "locations_served",
    header: "locations",
    cell: ({ row }) => {
      const id = row.original.id;
      return id;
      // return <ActionButton id={id}></ActionButton>;
    },
  },
];
