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
              {users.data.slice(0, limit).map((user, index) => (
                <TableRow hover>
                  <TableCell>
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(index) !== -1}
                      onChange={event => handleSelectOne(event, index)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <UserDetailModal
                      getInitials={getInitials(user.fullname)}
                      customerName={user.fullname}
                      customerPhonenumber={user.phonenumber}
                      customerLocation={user.location}
                      customerStatus={user.status}
                      customerTransportType={user.transportType}
                      customerTransportGovNumber={user.transportGovNumber}
                      customerBaggageVolume={user.baggageVolume}
                      customerBaggageMass={user.baggageMass}
                      customerTimeOfStatus={user.timeOfStatus}
                      customerPassportPhoto={user.passportPhoto}
                      customerTechPassportPhoto={user.techPassportPhoto}
                    />
                  </TableCell>
                  <TableCell>{user.phonenumber}</TableCell>
                  <TableCell>{user.location}</TableCell>
                  <TableCell>{user.status}</TableCell>
                  <TableCell>{user.transportType}</TableCell>
                  <TableCell>{user.transportGovNumber}</TableCell>
                  <TableCell>{user.baggageVolume}</TableCell>
                  <TableCell>{user.baggageMass}</TableCell>
                  <TableCell>{user.timeOfStatus}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={users.data.length}
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
  customers: PropTypes.array.isRequired,
  userPage: PropTypes.number
};

export default Results;
