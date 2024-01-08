import { Box, Typography } from "@mui/material";

const refundData = [
	{
		reason: "Wrong Size",
		value: "48.8%",
	},
	{
		reason: "Found cheaper alternatives",
		value: "24.9%",
	},
	{
		reason: "Not satisfied about the quality of the product",
		value: "19.3%",
	},
	{
		reason: "The product does not look as on grainger.com",
		value: "9.6%",
	},
	{
		reason: "Other (please specify below)",
		value: "9.%",
	},
];
const RefundReasons = () => {
	return (
		<>
			{refundData.map((data, idx) => (
				<Box
					display={"flex"}
					flexDirection={"row"}
					justifyContent={"space-between"}
                    padding="10px"
				>
					<Typography variant="subtitle1" fontWeight="600">
						{data.reason}
					</Typography>
					<Typography
						variant="subtitle1"
						fontWeight="600"
					>
						{data.value}
					</Typography>
				</Box>
			))}
		</>
	);
};

export default RefundReasons;
