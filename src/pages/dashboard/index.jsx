import {
	Box,
	Button,
	IconButton,
	Typography,
	useTheme,
	useMediaQuery,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import Table from "../../components/Table";
import RefundReasons from "../../components/RefundReasons";

const Dashboard = () => {
	const theme = useTheme();
	const smScreen = useMediaQuery(theme.breakpoints.up("sm"));
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			{/* HEADER */}

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
				<Box>
					{/* <Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button> */}
				</Box>
			</Box>

			{/* GRID & CHARTS */}
			<Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
				<Grid xs={12} sm={12} md={6} lg={4} xl={4}>
					<Box
						width="100%"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							title="12,361"
							subtitle="Orders"
							progress="0.75"
							increase="+14%"
							icon={
								<EmailIcon
									sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
								/>
							}
						/>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={6} lg={4} xl={4}>
					<Box
						width="100%"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							title="431,225"
							subtitle="Safety alerts"
							progress="0.50"
							increase="+21%"
							icon={
								<PointOfSaleIcon
									sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
								/>
							}
						/>
					</Box>
				</Grid>
				<Grid xs={12} sm={12} md={12} lg={4} xl={4}>
					<Box
						width="100%"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							title="32,441"
							subtitle="Revenue today"
							progress="0.30"
							increase="+5%"
							icon={
								<PersonAddIcon
									sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
								/>
							}
						/>
					</Box>
				</Grid>
				{/* <Grid xs={12} sm={12} md={6} lg={3} xl={3}>
					<Box
						width="100%"
						backgroundColor={colors.primary[400]}
						display="flex"
						alignItems="center"
						justifyContent="center"
					>
						<StatBox
							title="1,325,134"
							subtitle="Traffic Received"
							progress="0.80"
							increase="+43%"
							icon={
								<TrafficIcon
									sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
								/>
							}
						/>
					</Box>
				</Grid> */}

				<Grid
					xs={12}
					sm={12}
					md={12}
					lg={12}
					container
					rowSpacing={1}
					// columnSpacing={{ xs: 1, sm: 2, md: 3 }}
				>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box backgroundColor={colors.primary[400]}>
							<Typography
								variant="h5"
								fontWeight="600"
								sx={{ padding: "30px 30px 0 30px" }}
							>
								Direct vs Indirect
							</Typography>
							<Box height="250px" mt="-20px">
								<BarChart isDashboard={true} />
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box backgroundColor={colors.primary[400]}>
							<Box
								p="0 30px"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Box>
									<Typography
										variant="h5"
										fontWeight="600"
										color={colors.grey[100]}
										sx={{ padding: "5px 30px" }}
									>
										Average order value
									</Typography>
									<Typography
										variant="h5"
										fontWeight="600"
										color={colors.greenAccent[500]}
										sx={{ padding: "0px 30px" }}
									>
										$58,373,698
									</Typography>
								</Box>
								<Box>
									<IconButton>
										<DownloadOutlinedIcon
											sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
										/>
									</IconButton>
								</Box>
							</Box>
							<Box height="250px" mt="-20px">
								<LineChart isDashboard={true} />
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={4} lg={4}>
						<Box backgroundColor={colors.primary[400]} p="30px">
							<Typography variant="h5" fontWeight="600">
								Products needing attention
							</Typography>
							<Box
								display="flex"
								flexDirection="column"
								alignItems="center"
								mt="25px"
							>
								<ProgressCircle size="125" />
								<Typography
									variant="h5"
									color={colors.greenAccent[500]}
									sx={{ mt: "15px" }}
								>
									$48,352 revenue generated
								</Typography>
								<Typography>
									Includes extra misc expenditures and costs
								</Typography>
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={8}>
						<Box backgroundColor={colors.primary[400]}>
							<Typography
								variant="h5"
								fontWeight="600"
								sx={{ padding: "15px" }}
							>
								Sales Quantity
							</Typography>
							<Box height="250px" mt="-20px" style={{ overflowY: "scroll" }}>
								<Table backgroundColor={colors.primary[400]} />
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box backgroundColor={colors.primary[400]}>
							<Box
								p="0 30px"
								display="flex"
								justifyContent="space-between"
								alignItems="center"
							>
								<Box>
									<Typography
										variant="h5"
										fontWeight="600"
										color={colors.grey[100]}
										sx={{ padding: "5px 30px" }}
									>
										Sales over time(Austin)
									</Typography>
									<Typography
										variant="h5"
										fontWeight="600"
										color={colors.greenAccent[500]}
										sx={{ padding: "0px 30px" }}
									>
										$58,373,698
									</Typography>
								</Box>
							</Box>
							<Box height="250px" mt="-20px">
								<LineChart isDashboard={true} />
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box backgroundColor={colors.primary[400]}>
							<Typography
								variant="h5"
								fontWeight="600"
								sx={{ padding: "30px 30px 0 30px" }}
							>
								Sales vs Refunds
							</Typography>
							<Box height="250px" mt="-20px">
								<BarChart isDashboard={true} />
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box backgroundColor={colors.primary[400]}>
							<Typography
								variant="h5"
								fontWeight="600"
								sx={{ padding: "15px" }}
							>
								Customer wins
							</Typography>
							<Box height="250px" mt="-20px" style={{ overflowY: "scroll" }}>
								<Table
									backgroundColor={colors.primary[400]}
									type="customerWins"
								/>
							</Box>
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box
							backgroundColor={colors.primary[400]}
							height="280px"
							padding="15px"
							style={{ overflowY: "scroll" }}
						>
							<Box>
								<Typography variant="h5" fontWeight="600">
									Reason for Refunds
								</Typography>
							</Box>
							<RefundReasons />
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box
							backgroundColor={colors.primary[400]}
							height="280px"
							padding="15px"
							style={{ overflowY: "scroll" }}
						>
							<Box>
								<Typography variant="h5" fontWeight="600">
									Recent stock movements
								</Typography>
							</Box>
							<RefundReasons />
						</Box>
					</Grid>
					<Grid xs={12} sm={12} md={6} lg={6}>
						<Box
							backgroundColor={colors.primary[400]}
							height="280px"
							padding="15px"
							style={{ overflowY: "scroll" }}
						>
							<Box>
								<Typography variant="h5" fontWeight="600">
									Focus Areas
								</Typography>
							</Box>
							<RefundReasons />
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
};

export default Dashboard;
