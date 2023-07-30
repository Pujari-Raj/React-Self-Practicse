import React, { useState, useEffect, } from 'react';
import Box from "@mui/material/Box";
import { alpha, styled } from '@mui/material/styles';
import { DataGrid, gridClasses } from '@mui/x-data-grid';
import { useDemoData } from '@mui/x-data-grid-generator';

// const ODD_OPACITY = 0.9;

const StripedDataGrid = styled(DataGrid)(({ theme }) => ({
    [`& .${gridClasses.row}.odd`]: {
        backgroundColor: theme.palette.grey[200],

        /* bgcolor on hover */
        // '&:hover, &.Mui-hovered': {
        //     backgroundColor: alpha(theme.palette.primary.main, ODD_OPACITY),
        //     '@media (hover: none)': {
        //         backgroundColor: 'transparent',
        //     },
        // },
        '&.Mui-selected': {
            '&:hover, &.Mui-hovered': {
                // Reset on touch devices, it doesn't add specificity
                '@media (hover: none)': {
                    backgroundColor: alpha(
                        theme.palette.primary.main,
                        theme.palette.action.selectedOpacity,
                    ),
                },
            },
        },
    },
}));

const ProductList = () => {

    const { data, loading } = useDemoData({
        dataSet: 'Employee',
        rowLength: 200,
    });

    return (
        <>
            <div style={{ height: '100vh', width: '100%' }}>
                <StripedDataGrid
                    loading={loading}
                    {...data}
                    getRowClassName={(params) =>
                        params.indexRelativeToCurrentPage % 2 === 0 ? 'even' : 'odd'
                    }
                    checkboxSelection
                />
            </div>
        </>
    )
}

export default ProductList