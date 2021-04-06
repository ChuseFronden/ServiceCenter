import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';




function createData(created, request_name, request_type, id, description, priority, status) {
    return { created, request_name, request_type, id, description, priority, status };
}


const rows = [
    createData("11.3.2021 10:00", "Luca Kim", "Maintenance", 1234567, "Planned Maintenance", "High", "Open"),
    createData("12.3.2021 10:00", "Luca Kim", "Break/Fix Repair", 1234567, "Cloth Breakage", "Medium", "Open"),
    createData("13.3.2021 10:00", "Luca Kim", "Audit", 1234567, "Audit Equipment", "High", "Open"),
    createData("14.3.2021 10:00", "Luca Kim", "Audit", 1234567, "Filter Audit", "Medium", "Open"),
    createData("15.3.2021 10:00", "Luca Kim", "Maintenance", 1234567, "Planned Maintenance", "Medium", "Open"),
];    

function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
      ? (a, b) => descendingComparator(a, b, orderBy)
      : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = comparator(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    { id: 'created', numeric: false, disablePadding: true, label: 'Created' },
    { id: 'reqeust_name', numeric: false, disablePadding: true, label: 'Request name' },
    { id: 'request_type', numeric: false, disablePadding: true, label: 'Request type' },
    { id: 'id', numeric: true, disablePadding: false, label: 'ID' },
    { id: 'description', numeric: false, disablePadding: true, label: 'Description' },
    { id: 'priority', numeric: false, disablePadding: true, label: 'Priority' },
    { id: 'status', numeric: false, disablePadding: true, label: 'Status' },
    
];

function EnhancedTableHead(props) {
    const { classes, order, orderBy, onRequestSort } = props;
    const createSortHandler = (property) => (event) => {
      onRequestSort(event, property);
    };

    return (
        <TableHead>
          <TableRow>
            {headCells.map((headCell) => (
              <TableCell
                key={headCell.id}
                sortDirection={orderBy === headCell.id ? order : false}
              >
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={createSortHandler(headCell.id)}
                >
                  {headCell.label}
                  {orderBy === headCell.id ? (
                    <span className={classes.visuallyHidden}>
                      {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                    </span>
                  ) : null}
                </TableSortLabel>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    classes: PropTypes.object.isRequired,
    
    onRequestSort: PropTypes.func.isRequired,
    
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    
};


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '80%', 
        margin: '30px auto',
        borderRadius: '8px'
    },
    table: {
        width: '70%', 
        margin: '30px auto',
        borderRadius: '8px'
    },
    visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
    },
}));

export default function EnhancedTable() {
    const classes = useStyles();
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('created');
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    };
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
  
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer>
                <Table>
                    <EnhancedTableHead
                        classes={classes}
                        order={order}
                        orderBy={orderBy}
                        onRequestSort={handleRequestSort}
                        rowCount={rows.length}
                    />
                        <TableBody>
                            {stableSort(rows, getComparator(order, orderBy))
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row, index) => {
                                const labelId = `enhanced-table-checkbox-${index}`;
            
                             return (
                                    <TableRow>
                                        <TableCell component="th" id={labelId} scope="row"        padding="none">
                                            {row.created}
                                        </TableCell>
                                        <TableCell>{row.request_name}</TableCell>
                                        <TableCell>{row.request_type}</TableCell>
                                        <TableCell>{row.id}</TableCell>
                                        <TableCell>{row.description}</TableCell>
                                        <TableCell>{row.priority}</TableCell>
                                        <TableCell>{row.status}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                </Table>
          </TableContainer>
          <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
          />
        </Paper>
      </div>
    );
}






























