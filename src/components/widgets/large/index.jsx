import React, {useState} from 'react';
import {
    Checkbox,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TableSortLabel,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {Delete} from "@mui/icons-material";
import Log from "../../util/logging";

const WidgetLarge = ({data, checkbox}) => {

        const [selectedRows, setSelectedRows] = useState([]);
        const [sortDirection, setSortDirection] = useState('asc')
        const [sortCol, setSortCol] = useState('id')

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

        const onClickDeleteRowsHandler = () => {
            Log.info("WidgetLarge", "Selected rows delete", selectedRows.length)
        }

        const calculateStatusColor = (value) => {
            if (data.statusValues) {
                const grade = data.statusValues[value]
                if (grade === -1) {
                    return 'declined'
                } else if (grade === 1) {
                    return 'approved'
                } else {
                    return 'pending'
                }
            }
        }

        return (
            <div className='shadow-around p-5 pb-0 rounded-xl w-full h-full'>
                <span className='text-2xl font-semibold'>{data.title}</span>
                <TableContainer>
                    <Table sx={{minWidth: 650}} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    checkbox &&
                                    <TableCell padding="checkbox">

                                        <Checkbox
                                            color="primary"
                                            indeterminate={selectedRows.length > 0 && data.transactions.length > selectedRows.length}
                                            checked={data.transactions.length > 0 && data.transactions.length === selectedRows.length}
                                            onChange={onSelectAllStateChangeHandler}
                                        />

                                    </TableCell>
                                }
                                {data.columnNames.map((col, idx) => {
                                    return <TableCell key={idx}>
                                        <TableSortLabel
                                            direction={sortCol === col.id ? sortDirection : 'asc'}
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
                                        {
                                            checkbox &&
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isSelected}
                                                />
                                            </TableCell>
                                        }
                                        {data.columnNames.map((col, idx) => {
                                            return (
                                                <TableCell align={(col.isCurrency || col.isNumber) && 'right'} key={idx}>
                                                    {
                                                        col.isColoredStatus ?
                                                            <span
                                                                className={'rounded-xl p-2.5 ' + calculateStatusColor(row[col.id])}>{col.isCurrency && col.currencySymbol} {row[col.id]}</span> :
                                                            <span>{col.isCurrency && col.currencySymbol} {row[col.id]}</span>
                                                    }

                                                </TableCell>
                                            )
                                        })}
                                    </TableRow>
                                )
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Toolbar>
                    <Typography sx={{flex: '1 1 100%'}} color="inherit" variant="subtitle1" component="div">
                        {selectedRows.length} selected
                    </Typography>
                    <Tooltip title="Delete selected rows">
                        <IconButton onClick={onClickDeleteRowsHandler}>
                            <Delete/>
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </div>
        );
    }
;

export default WidgetLarge;
