import * as React from 'react';
import SkeletonMui from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Grid } from '@mui/material';

export default function Skeleton() {
    const usersSkeleton = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    return (
        <Stack sx={{margin: '20px 15px 20px 15px'}} data-testid='skeleton'>
            <Grid container sx={{mb: 3}}>
                <Grid item md={8} sm={8} xs={8}>
                    <SkeletonMui variant="rounded" width="99%" height={60} />
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                    <SkeletonMui variant="rounded" width="99%" height={60} />
                </Grid>
            </Grid>

            <Grid container alignItems='center' spacing={2}>
                {
                    usersSkeleton.map((users) => (
                        <Grid item md={3} sm={4} xs={6} key={users}>
                            <SkeletonMui key={users} variant="rounded" width="100%" height={250} />
                        </Grid>
                    ))
                }
            </Grid>
        </Stack>
    );
}