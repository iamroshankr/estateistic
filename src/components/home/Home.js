import { useState } from 'react';
import { Grid, Box, styled } from "@mui/material";

import CustomCard from "./CustomCard";
import Filter from "./Filter";
import data from '../../constants/data';

const Component = styled(Box)`
    margin-top: 20px;
    padding: 120px;
`;

const Home = () => {

    const [filters, setFilters] = useState({
        location: 'select',
        moveDate: '',
        price: "select",
        pType: 'select'
    });

    // console.log(filters);
    const filteredData = data.filter( item => {

        const itemDate = new Date(item.moveDate);
        const filterDate = new Date(filters.moveDate);

        let locationCheck = filters.location === 'select' ? true : item.location === filters.location;
        let priceCheck = filters.price === 'select' ? true : item.priceRange === filters.price;
        let typeCheck = filters.pType === 'select' ? true : item.type === filters.pType;
        let dateCheck = filters.moveDate === '' ? true : itemDate.getTime() <= filterDate.getTime();

        return ( locationCheck && priceCheck && dateCheck && typeCheck );
     });
    // console.log(filteredData);

    return (
        <Component>

            <Filter filters={filters} setFilters={setFilters} />

            <Grid container spacing={5}>
                { filteredData.length ? 
                    filteredData.map( card => (

                    <Grid item key={card.id} xs={12} sm={6} md={4} lg={4} >
                        <CustomCard card={card} />
                    </Grid>

                    )) :
                    <Box style={{padding: 60}}>No Results Found</Box>
                }
            </Grid>

        </Component>
    );

};

export default Home;