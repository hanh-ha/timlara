import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

function createData(name, calories, fat, carbs, protein, datebuy,enddate,price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    datebuy,
    enddate,
    price,
    history: [
      { order:1 ,code:'MT_01',img:'link',title:'Đồng hồ đeo tay thông minh...', customerId: '11091700',date: '2020-01-05',amount:'Đã duyệt'},
      { order:2 ,code:'MT_01',img:'link',title:'Đồng hồ đeo tay thông minh...', customerId: 'Anonymous',date: '2020-01-02', amount: 'Chưa duyệt' },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell align="right">
         {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.datebuy}</TableCell>
        <TableCell align="right">{row.enddate}</TableCell>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <VisibilityIcon/> : <VisibilityOffIcon/>}
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Danh sách tin đăng theo gói
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Số thứ tự</TableCell>
                    <TableCell>Mã tin</TableCell>
                    <TableCell align="right">Hình ảnh</TableCell>
                    <TableCell>Tiêu đề tin đăng</TableCell>
                    <TableCell>Danh mục</TableCell>
                    <TableCell>Ngày tạo</TableCell>
                    <TableCell align="right">Tình trạng duyệt</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell component="th" scope="row">
                        {historyRow.order}
                      </TableCell>
                      <TableCell>{historyRow.code}</TableCell>
                      <TableCell align="right">{historyRow.img}</TableCell>
                      <TableCell align="right">{historyRow.title}</TableCell>
                      <TableCell align="right">{historyRow.customerId}</TableCell>
                      <TableCell align="right">{historyRow.date}</TableCell>
                      <TableCell align="right">
                         {historyRow.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.string.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.string.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.string.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        order:PropTypes.number.isRequired,
        code:PropTypes.string.isRequired,
        img:PropTypes.string.isRequired,
        title:PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
    datebuy:PropTypes.string.isRequired,
    enddate:PropTypes.string.isRequired,

  }).isRequired,
};

const rows = [
  createData(1, 'TV01', 'ha minh hanh', 24, 4.0,'6/8/2020','6/2/2021',''),
  createData(2, 'TV01', 'ha minh hanh', 37, 4.3,'6/8/2020','6/2/2021',''),
  createData(3, 'TV01', 'ha minh hanh', 24, 6.0,'6/8/2020','6/2/2021',''),
  createData(4, 'TV01', 'ha minh hanh', 67, 4.3,'6/8/2020','6/2/2021',''),
  createData(5, 'TV01', 'ha minh hanh', 49, 3.9,'6/8/2020','6/2/2021',''),
];

export const RegistrationList = () => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>STT</TableCell>
            <TableCell align="right">Mã thành viên</TableCell>
            <TableCell align="right">Tên thành viên</TableCell>
            <TableCell align="right">Số lượng ban đầu</TableCell>
            <TableCell align="right">Số lượng tin còn lại</TableCell>
            <TableCell align="right">Thời gian mua</TableCell>
            <TableCell align="right">Hạn sử dụng</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}