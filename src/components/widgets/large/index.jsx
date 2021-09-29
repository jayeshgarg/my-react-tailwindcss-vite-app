import React, {useState} from 'react';
import EnhancedTable from "./large2";
import {
    Checkbox, IconButton,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel, Toolbar, Tooltip, Typography
} from "@mui/material";
import {alpha} from "@mui/material/styles";
import {Delete} from "@mui/icons-material";

const WidgetLarge = () => {
    const data = {
        title: 'Latest Transactions',
        transactions: [
            {id: 1, name: "Jane Doe", date: "2021-09-29", amt: 1000.00, status: "Pending"},
            {id: 2, name: "John Doe", date: "2020-04-20", amt: 1500.00, status: "Approved"},
            {id: 3, name: "Jonny Doe", date: "2018-01-05", amt: 100.00, status: "Approved"},
            {id: 4, name: "Jennifer Doe", date: "2019-02-29", amt: 1000000.00, status: "Declined"},
        ],
        columnNames: [
            {id: 'id', headerName: 'Customer ID', width: 10},
            {id: 'name', headerName: 'Customer Name', width: 100},
            {id: 'date', headerName: 'Transaction Date', width: 50},
            {id: 'amt', headerName: 'Transaction Amount', width: 50, isCurrency: true, currencySymbol: '€'},
            {id: 'status', headerName: 'Status', width: 100},
        ]
    }

    const [selectedRows, setSelectedRows] = useState([]);
    const [sortDirection, setSortDirection] = useState('asc')
    const [sortCol, setSortCol] = useState(data.transactions.id)

    const onClickSortHandler = (sortColName) => {
        if (sortColName === sortCol) {
            setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
        } else {
            setSortCol(sortColName)
            setSortDirection('asc')//default when a col is newly sorted
        }
    }

    const onClickTableRowClickHandler = (rowId) => {
        const idx = selectedRows.indexOf(rowId)
        let newSelected = [];
        if (idx < 0) {
            newSelected = newSelected.concat(selectedRows, rowId)
        } else if (idx >= 0) {
            newSelected = selectedRows.filter(id => id != rowId);
        }
        setSelectedRows(newSelected);
    }

    const compare = (ob1, ob2, order) => {
        let result = 0;
        if (ob1 < ob2) {
            result = -1
        }
        if (ob1 > ob2) {
            result = 1
        }
        if (order === 'desc') {
            result *= -1
        }
        return result;
    }

    const sortData = (data, order, col) => {
        return data.sort((r1, r2) => compare(r1[col], r2[col], order))
    }

    const onSelectAllStateChangeHandler = (e) => {
        if (e.target.checked) {
            const newSelected = data.transactions.map((n) => n.id);
            setSelectedRows(newSelected);
        } else {
            setSelectedRows([])
        }
    }

    return (
        <div className='shadow-around p-5 rounded-xl w-full h-full'>
            <span className='text-2xl font-semibold'>{data.title}</span>
            <Toolbar>
                {selectedRows.length > 0 ? (
                    <Typography sx={{flex: '1 1 100%'}} color="inherit" variant="subtitle1" component="div">
                        {selectedRows.length} selected
                    </Typography>
                ) : (<span className='text-2xl font-semibold'>{data.title}</span>)}

                {selectedRows.length > 0 ? (
                    <Tooltip title="Delete">
                        <IconButton>
                            <Delete/>
                        </IconButton>
                    </Tooltip>
                ) : (<></>)}
            </Toolbar>
            <TableContainer>
                <Table sx={{minWidth: 650}} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    indeterminate={selectedRows.length > 0 && data.transactions.length > selectedRows.length}
                                    checked={data.transactions.length > 0 && data.transactions.length === selectedRows.length}
                                    onChange={onSelectAllStateChangeHandler}
                                />
                            </TableCell>
                            {data.columnNames.map((col, idx) => {
                                return <TableCell key={idx}>
                                    <TableSortLabel
                                        onClick={() => onClickSortHandler(col.id)}>{col.headerName}</TableSortLabel>
                                </TableCell>
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortData(data.transactions, sortDirection, sortCol).map((row) => {
                            const isSelected = selectedRows.indexOf(row.id) >= 0;
                            return (
                                <TableRow
                                    hover
                                    key={row.id}
                                    sx={{"&:last-child td, &:last-child th": {border: 0}}}
                                    onClick={() => onClickTableRowClickHandler(row.id)}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            checked={isSelected}
                                        />
                                    </TableCell>
                                    {data.columnNames.map((col, idx) => {
                                        return <TableCell align={col.isCurrency && 'right'}
                                                          key={idx}>{col.isCurrency && col.currencySymbol}{row[col.id]}</TableCell>
                                    })}
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default WidgetLarge;
