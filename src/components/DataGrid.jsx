import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "sku", headerName: "SKU" },
	{
		field: "bin",
		headerName: "BIN",
		editable: true,
	},
	{
		field: "results",
		headerName: "RESULTS",
		editable: true,
	},
	{
		field: "proSales",
		headerName: "PRO SALES",
		editable: true,
	},
	{
		field: "action",
		headerName: "ACTION",
		editable: true,
	},
	{
		field: "utilization",
		headerName: "UTILIZATION",
		editable: true,
	},
	{
		field: "bestBinLoc",
		headerName: "BEST BIN LOC",
		editable: true,
	},
	{
		field: "reason",
		headerName: "REASON",
		editable: true,
	},
];

const rows = [
	{
		id: 1,
		sku: "#143567",
		bin: "220120",
		results: "-25% Errors",
		proSales: "$157",
		action: "Move",
		utilization: "O",
		bestBinLoc: "121571",
		reason: "Similar SKU",
	},
	{
		id: 2,
		sku: "#22799",
		bin: "101012",
		results: "+47% Savings",
		proSales: "$112",
		action: "Audit",
		utilization: "U",
		bestBinLoc: "276121",
		reason: "Safety",
	},
	{
		id: 3,
		sku: "#227799",
		bin: "151003",
		results: "-17% Lead time",
		proSales: "$213",
		action: "Rotate",
		utilization: "O",
		bestBinLoc: "332411",
		reason: "Gold in NGZ",
	},
	{
		id: 4,
		sku: "#780044",
		bin: "235641",
		results: "+5% Bin utilization",
		proSales: "$392",
		action: "Merge",
		utilization: "U",
		bestBinLoc: "765212",
		reason: "DSI Overdue",
	},
	{
		id: 5,
		sku: "#785612",
		bin: "156721",
		results: "+3% Safety",
		proSales: "$129",
		action: "Disallow",
		utilization: "U",
		bestBinLoc: "543217",
		reason: "Efficiency",
	},
];

export default function DataGridDemo() {
	return (
		<Box sx={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				initialState={{
					pagination: {
						paginationModel: {
							pageSize: 5,
						},
					},
				}}
				pageSizeOptions={[5]}
				checkboxSelection
				disableRowSelectionOnClick
			/>
		</Box>
	);
}
