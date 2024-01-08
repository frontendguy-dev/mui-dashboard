{
	/* <Grid xs={12} sm={12} md={4} lg={4} xl={4}>
					<Box
						backgroundColor={colors.primary[400]}
						maxHeight="100vh"
						overflow="auto"
						m="25px 0 0 0"
					>
						<Box
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							color={colors.grey[100]}
							p="15px"
						>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Recent Transactions
							</Typography>
						</Box>
						{mockTransactions.map((transaction, i) => {
							return (
								<Box
									key={`${transaction}-${i}`}
									display="flex"
									justifyContent="space-between"
									alignItems="center"
									borderBottom={`4px solid ${colors.primary[500]}`}
									p="15px"
								>
									<Box>
										<Typography
											variant="h5"
											fontWeight="600"
											color={colors.greenAccent[100]}
										>
											{transaction.txId}
										</Typography>
										<Typography color={colors.grey[100]}>
											{transaction.user}
										</Typography>
									</Box>
									<Box color={colors.grey[100]}>{transaction.date}</Box>
									<Box
										color={colors.greenAccent[500]}
										p="5px 10px"
										borderRadius="4px"
									>
										${transaction.cost}
									</Box>
								</Box>
							);
						})}
					</Box>
				</Grid> */
}

// const theme = useTheme();
// const colors = tokens(theme.palette.mode);
// const columns = [
//   { field: "id", headerName: "Id", width: 100 },
//   { field: "registrarId", headerName: "Registrar Id", width: 100 },
//   {
// 	field: "name",
// 	headerName: "Name",
// 	cellClassName: "name-column--cell",
// 	width: 200,
//   },
//   {
// 	field: "age",
// 	headerName: "Age",
// 	type: "number",
// 	headerAlign: "left",
// 	align: "left",
// 	width: 100,
//   },
//   { field: "phone", headerName: "Phone Number", width: 100 },
//   { field: "email", headerName: "Email", width: 200 },
//   { field: "address", headerName: "Address", width: 250 },
//   { field: "city", headerName: "City", width: 100 },
//   { field: "zipCode", headerName: "Zip Code", width: 100 },
// ];
// return (
//   <Box m="20px">
// 	<Box display="flex" justifyContent="space-between" alignItems="center">
// 	  <Header title="CONTACTS" subtitle="welcome to you Contacts" />
// 	</Box>
// 	<Box
// 	  m="8px 0 0 0"
// 	  width="100%"
// 	  height="80vh"
// 	  sx={{
// 		"& .MuiDataGrid-root": {
// 		  border: "none",
// 		},
// 		"& .MuiDataGrid-cell": {
// 		  borderBottom: "none",
// 		},
// 		"& .name-column--cell": {
// 		  color: colors.greenAccent[300],
// 		},
// 		"& .MuiDataGrid-columnHeaders": {
// 		  backgroundColor: colors.blueAccent[700],
// 		  borderBottom: "none",
// 		},
// 		"& .MuiDataGrid-virtualScroller": {
// 		  backgroundColor: colors.primary[400],
// 		},
// 		"& .MuiDataGrid-footerContainer": {
// 		  borderTop: "none",
// 		  backgroundColor: colors.blueAccent[700],
// 		},
// 		"& .MuiCheckbox-root": {
// 		  color: `${colors.greenAccent[200]} !important`,
// 		},
// 		"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
// 		  color: `${colors.grey[100]} !important`,
// 		},
// 	  }}
// 	>
// 	  <DataGrid
// 		rows={mockDataContacts}
// 		columns={columns}
// 		components={{ Toolbar: GridToolbar }}
// 	  />
// 	</Box>
//   </Box>
// );