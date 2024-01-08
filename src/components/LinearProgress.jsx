import * as React from "react";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
	},
}));

function LinearProgressWithLabel() {
	const data = [
		{ label: "Receiving", val: 73 },
		{ label: "Shipping", val: 35 },
		{ label: "Put-away", val: 21 },
		{ label: "Inventory", val: 27 },
		{ label: "Safety", val: 37 },
	];
	return (
		<>
			{data.map((data, idx) => (
				<Box sx={{ display: "flex", alignItems: "center" }} key={idx} mt="15px">
					<Box sx={{ width: "100%", mr: 1 }}>
						<Typography variant="subtitle1">{data.label}</Typography>
						<BorderLinearProgress variant="determinate" value={data.val} />
					</Box>
					<Box sx={{ minWidth: 35 }}>
						<Typography variant="body2" color="text.secondary">{`${Math.round(
							data.val
						)}%`}</Typography>
					</Box>
				</Box>
			))}
		</>
	);
}

export default LinearProgressWithLabel;
