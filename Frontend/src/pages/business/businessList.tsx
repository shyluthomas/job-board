import { DataTable } from "@/components/dataTable/dataTable";
import { Columns } from "..";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { useToast } from "@/components/ui/use-toast";
import { fetchBusinessListList } from "@/store/reducers/businessReducer";

const BusinessList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const businessList = useAppSelector((state) => state.businessReducer.businessList);
  const message = useAppSelector((state) => state.businessReducer.message);
  const { toast } = useToast();
  useEffect(() => {
    dispatch(fetchBusinessListList());
  }, []);
  useEffect(() => {
    if (message.status == true) {
      toast({
        title: "Success",
        description: message.body,
      });
    }
  }, [message]);
  console.log('businessList', businessList)

  return (
    <div className="flex w-full mx-auto p-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Business List</CardTitle>
        </CardHeader>
        <CardContent>
          {businessList.status && businessList.status === "loading" ? (
            "loading.."
          ) : (
            <DataTable columns={Columns} data={businessList.business}></DataTable>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessList;
