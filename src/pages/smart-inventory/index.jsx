import React from "react";
import {
	Box,
	useTheme,
	useMediaQuery,
	Grid,
	Typography,
	CircularProgress,
} from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";

import Header from "../../components/Header";
import RefundReasons from "../../components/RefundReasons";
import LinearProgressWithLabel from "../../components/LinearProgress";
import BasicPie from "../../components/MuiPieChart";
import SimpleLineChart from "../../components/MuiLineChart";
import QuickFilteringGrid from "../../components/DataGrid";
import DataGridDemo from "../../components/DataGrid";

const Contacts = () => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Box
				display={smScreen ? "flex" : "block"}
				flexDirection={smScreen ? "row" : "column"}
				justifyContent={smScreen ? "space-between" : "start"}
				alignItems={smScreen ? "center" : "start"}
				m="10px 0"
			>
				<Header
					title="Good Morning, Austin"
					subtitle="Here is what's happening with your branches today"
				/>
			</Box>
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid xs={12} sm={12} md={8} lg={8}>
					<Box backgroundColor={colors.primary[400]} m="20px">
						<Typography variant="h5" fontWeight="600" padding="15px">
							Average order processing time
						</Typography>
						<Box
							backgroundColor={colors.primary[400]}
							height="280px"
							padding="15px"
							style={{ overflowY: "scroll" }}
						>
							<Box>
								<Typography variant="h3" fontWeight="600">
									4m 15s
								</Typography>
							</Box>
							<RefundReasons />
						</Box>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={4} lg={4}>
					<Box backgroundColor={colors.primary[400]} m="20px" padding="15px">
						<Box
							style={{
								background: colors.primary[500],
								width: "100%",
								display: "flex",
								justifyContent: "space-between",
							}}
						>
							<Box
								sx={{ position: "relative", display: "inline-flex" }}
								padding="10px"
							>
								<CircularProgress
									variant="determinate"
									value={80}
									thickness={10}
									color="info"
									size={80}
								/>
								<Box
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: "absolute",
										display: "flex",
										alignItems: "center",
										justifyContent: "center",
									}}
								>
									<Typography
										variant="caption"
										component="div"
										color="text.secondary"
									>
										{"80%"}
									</Typography>
								</Box>
							</Box>
							<Box padding="10px">
								<Typography variant="h5" fontWeight="600" mt="15px">
									Branch Analysis
								</Typography>
								<Typography variant="subtitle2" mt="10px">
									Improvement score
								</Typography>
							</Box>
						</Box>

						<Box
							backgroundColor={colors.primary[400]}
							height="200px"
							style={{ overflowY: "scroll" }}
						>
							<LinearProgressWithLabel />
						</Box>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={4} lg={4}>
					<Box backgroundColor={colors.primary[400]} padding="15px" m="20px">
						<Typography variant="h5" fontWeight="600">
							Underutilized spaces
						</Typography>
						<Box backgroundColor={colors.primary[400]} mt="20px">
							<Box>
								<Typography variant="body1">
									<i>Drill down to see product placement</i>
								</Typography>
							</Box>
							<Box>
								<Typography variant="h2" fontWeight="600">
									$224,807
								</Typography>
							</Box>
						</Box>
						<Box>
							<BasicPie />
						</Box>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={8} lg={8}>
					<Box
						m="20px"
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Savings</Typography>
							<Typography variant="h2" mt="15px">
								$513,068.98
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "green" }}
							>
								+12% this week
							</Typography>
						</Box>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Products tracked</Typography>
							<Typography variant="h2" mt="15px">
								569,230
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "green" }}
							>
								+18% this week
							</Typography>
						</Box>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Steps to retrieve</Typography>
							<Typography variant="h2" mt="15px">
								350,745
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "red" }}
							>
								-2% this week
							</Typography>
						</Box>
					</Box>
					<Box
						m="20px"
						style={{ display: "flex", justifyContent: "space-between" }}
					>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Capacity utilization</Typography>
							<Typography variant="h2" mt="15px">
								57%
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "green" }}
							>
								+12% this week
							</Typography>
						</Box>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Time to retrieve</Typography>
							<Typography variant="h2" mt="15px">
								4m 26s
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "red" }}
							>
								-2% this week
							</Typography>
						</Box>
						<Box
							backgroundColor={colors.primary[400]}
							height="155px"
							padding="20px"
							width="33%"
							borderRadius="8px"
						>
							<Typography variant="h5">Placement accuracy</Typography>
							<Typography variant="h2" mt="15px">
								88%
							</Typography>
							<Typography
								variant="subtitle2"
								mt="20px"
								style={{ color: "green" }}
							>
								+18% this week
							</Typography>
						</Box>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={12} lg={12}>
					<Box margin="20px">
						<Box
							backgroundColor={colors.primary[400]}
							padding="20px"
							width="100%"
						>
							<Typography variant="h5">Results</Typography>
							<Box style={{display: 'flex', gap: '30px'}} mt="20px">
								<Box>
									<Typography variant="h2">24.7K</Typography>
									<Typography variant="subtitle2" style={{color: 'lightgray'}}>New SKU analyzed</Typography>
								</Box>
								<Box>
									<Typography variant="h2">$56.9K</Typography>
									<Typography variant="subtitle2" style={{color: 'lightgray'}}>Operational saving</Typography>
								</Box>
								<Box>
									<Typography variant="h2">54%</Typography>
									<Typography variant="subtitle2" style={{color: 'lightgray'}}>Wait time</Typography>
								</Box>
								<Box>
									<Typography variant="h2">1m 56d</Typography>
									<Typography variant="subtitle2" style={{color: 'lightgray'}}>Time in Inventory</Typography>
								</Box>
							</Box>
							<Box>
								<SimpleLineChart />
							</Box>
						</Box>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={12} lg={12}>
					<Box backgroundColor={colors.primary[400]} m="20px">
						<DataGridDemo />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Contacts;
