import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { business, task } from "@/types";
import { ColumnDef } from "@tanstack/react-table";
import { useAppSelector } from "@/hooks/hooks";
// import { useAppDispatch } from "@/hooks/hooks";
// import {
//   setConfirmationSate,
//   setDeleteTask,
//   setEditTask,
// } from "@/store/reducers/taskReducer";

const ActionLocation = ({ id }: any): JSX.Element => {
  const businessLocation:any = useAppSelector((state) => state.businessReducer.businessLocation);
  const response =  businessLocation.location.data.filter((item: any) => id.includes(item.id))
  return (
    <div className="flex gap-2">
      { response.map((data:any) => 
              <p>
              {data.name}
              </p>
      )}
        
    </div>
  );
};

const ActionClassification = ({ id }: any): JSX.Element => {
  const businessClassification:any = useAppSelector((state) => state.businessReducer.businessClassification);
  console.log('first', businessClassification, id)
  const response =  businessClassification.classification.data.filter((item: any) => id.includes(item.id))
  return (
    <div className="flex gap-2">
      { response.map((data:any) => 
              <p>
              {data.name}
              </p>
      )}
        
    </div>
  );
};

export const Columns: ColumnDef<business>[] = [
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
    header: "classifications",
    cell: ({ row }) => {
      const id = row.original.classifications;
      return <ActionClassification id={id}></ActionClassification>;
    },
  },
  {
    accessorKey: "locations_served",
    header: "locations",
    cell: ({ row }) => {
      const id = row.original.locations_served;
      return <ActionLocation id={id}></ActionLocation>;
    },
  },
];
