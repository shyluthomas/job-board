import { DataTable } from "@/components/dataTable/dataTable";
import { Columns } from "..";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks/hooks";
import { fetchBusinessListList } from "@/store/reducers/businessReducer";

const BusinessList = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const businessList = useAppSelector(
    (state) => state.businessReducer.businessList
  );
  useEffect(() => {
    dispatch(fetchBusinessListList());
  }, []);

  return (
    <div className="flex w-full mx-auto p-10">
      <Card className="w-full">
        <CardHeader>
          <CardTitle data-testid="cardTitle">Business List</CardTitle>
        </CardHeader>
        <CardContent>
          {businessList.status && businessList.status === "loading" ? (
            "loading.."
          ) : (
            <DataTable
              columns={Columns}
              data={businessList.business}
            ></DataTable>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default BusinessList;
