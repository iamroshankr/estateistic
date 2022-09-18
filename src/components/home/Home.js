import { Grid, Box, styled } from "@mui/material";

import CustomCard from "./CustomCard";
import Filter from "./Filter";

const Component = styled(Box)`
    margin-top: 20px;
    padding: 120px;
`;

const Home = () => {

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

    return (
        <Component>
            <Filter />
            <Grid container spacing={5}>
                {cards.map((card) => (

                    <Grid item key={card} xs={12} sm={6} md={4} lg={3} >
                        <CustomCard />
                    </Grid>

                ))}
            </Grid>
        </Component>
    );

};

export default Home;