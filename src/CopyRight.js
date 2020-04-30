import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const Copyright = () =>  {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="http://k-mit.jp/">
          MIT inc. 2020
        </Link>{' '}
      </Typography>
    );
};

export default Copyright;