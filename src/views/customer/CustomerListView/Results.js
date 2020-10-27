import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';

import PerfectScrollbar from 'react-perfect-scrollbar';
import {
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  makeStyles
} from '@material-ui/core';
import getInitials from 'src/utils/getInitials';
import { useParams } from 'react-router-dom';
import UserDetailModal from './UserDetailModal';

const useStyles = makeStyles(theme => ({
  root: {},
  avatar: {
    marginRight: theme.spacing(2)
  }
}));

const Results = ({ className, customers, users, ...rest }) => {
  let { id } = useParams();
  const classes = useStyles();
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  // const [users, setUsers] = useState({ data: [] });

  // useEffect(() => {
  //   let token = localStorage.getItem('logen-authorization');
  //   Axios.get({
  //     url: 'http://195.158.2.207/api/v1/users?page=1',
  //     headers: {
  //       Authorization: 'Bearer ' + token
  //     }
  //   })
  //     .then(result => {
  //       setUsers('wefwef this is table data' + result.data);

  //       console.log(users);
  //     })
  //     .catch(err => console.log(err));
  // }, []);

  // useEffect(() => {
  //   let token = localStorage.getItem('logen-authorization');
  //   Axios.get(`http://195.158.2.207/api/v1/language`)
  //     .then(res => {
  //       // setUsers(res.data);
  //       console.log('====================================');
  //       console.log('this is table data = ' + res);
  //       console.log('====================================');
  //     })
  //     .catch(err => {
  //       console.log('====================================');
  //       console.log(err);
  //       console.log('====================================');
  //     });
  // }, []);

  const handleSelectAll = event => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map(customer => customer.id);
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = event => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };
  console.log(
    'props in users ===== wefcwef============== wefewf======== wefwef========='
  );
  console.log(users);
  console.log('====================================');

  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <PerfectScrollbar>
        <Box minWidth={1050}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0 &&
                      selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>Full name</TableCell>
                <TableCell>PhoneNumber</TableCell>
                <TableCell>Location</TableCell>
                <TableCell>Status</TableCell>
                <TableCell> Transport Type </TableCell>
                <TableCell> Transport Nomer </TableCell>
                <TableCell> B_Value </TableCell>
                <TableCell>B_Mass</TableCell>
                <TableCell>Time of Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(0, limit).map(customer => (
                <TableRow
                  hover
                  key={customer.id}
                  selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={event => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell>

                  <TableCell>
                    <UserDetailModal
                      customClassName={classes.avatar}
                      srcImg={customer.avatarUrl}
                      getInitials={getInitials(customer.name)}
                      customerName={customer.name}
                    />
                  </TableCell>

                  <TableCell>{customer.email}</TableCell>

                  <TableCell>
                    {`${customer.address.city}, ${customer.address.state}, ${customer.address.country}`}
                  </TableCell>

                  <TableCell>{customer.phone}</TableCell>

                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={customers.length}
        onChangePage={handlePageChange}
        onChangeRowsPerPage={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

Results.propTypes = {
  className: PropTypes.string,
  customers: PropTypes.array.isRequired
};

export default Results;
