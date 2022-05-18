import { useNavigate } from "react-router-dom";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

export default function VolcanoGrid(props) {
  const columns = [
    { headerName: "Name", field: "name", sortable: true, filter: true },
    { headerName: "Region", field: "region" },
    { headerName: "Subregion", field: "subregion" }
  ];

  const navigate = useNavigate();
  const volcanoes = props.volcanoes;

  return (
    <div
      className="ag-theme-balham"
      style={{
        height: "300px",
        width: "800px"
      }}
    >
      <AgGridReact
        columnDefs={columns}
        rowData={volcanoes}
        pagination
        paginationPageSize={7}
        onRowClicked={(row) => navigate(`/volcano?id=${row.data.id}`)}
      />
    </div>
  );
}
