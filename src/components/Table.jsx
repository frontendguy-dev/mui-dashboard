import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const salesTitle = ["Part Number", "Impressions", "Revenue", "Sales", "Conversions"];
const customerTitle = ["Name", "Email", "Spent", "Country"];

const salesQuantity = [
	createData("798J06", "2.4k", "$3.877", 254, "4.0%"),
	createData("797NV3", "2.2k", "$3.098", 367, "4.3%"),
	createData("2XB23", "1.2k", "$2.987", 249, "6.0%"),
	createData("2LHT7", "1.9k", "$2.009", 267, "4.3%"),
	createData("1K058", "1.6k", "$3.118", 290, "3.9%"),
];

const customerWins = [
	createData("Alex Shatov", "alexshatov@gmail.com", "$3.877", "Canada"),
	createData("Gaurav", "gaurav@gmail.com", "$3.098", "India"),
	createData("Shivam", "shivam@gmail.com", "$2.987", "USA"),
	createData("Mirko flusk", "mirkoflusk@gmail.com", "$2.009", "Spain"),
	createData("Olga Semklo", "olgasemklo@gmail.com", "$3.118", "Italy"),
]

export default function BasicTable(props) {
	const rows = props.type === "customerWins" ? customerWins : salesQuantity;
	const title = props.type === "customerWins" ? customerTitle : salesTitle;
	return (
		<TableContainer component={Paper}>
			<Table
				style={{ backgroundColor: props.backgroundColor, height: "250px" }}
				aria-label="simple table"
			>
				<TableHead>
					<TableRow>
						{title.map((title, idx) => <TableCell key={idx} align={idx > 0 ? 'right' : ''}>{title}</TableCell>)}
						{/* <TableCell>Part Number</TableCell>
						<TableCell align="right">Impressions</TableCell>
						<TableCell align="right">Revenue&nbsp;(g)</TableCell>
						<TableCell align="right">Sales&nbsp;(g)</TableCell>
						<TableCell align="right">Conversions&nbsp;(g)</TableCell> */}
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<TableRow
							key={row.name}
							sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
						>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell align="right">{row.calories}</TableCell>
							<TableCell align="right">{row.fat}</TableCell>
							<TableCell align="right">{row.carbs}</TableCell>
							<TableCell align="right">{row.protein}</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}
