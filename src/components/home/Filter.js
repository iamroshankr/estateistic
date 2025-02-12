import { useState } from "react";
import { Box, Grid, Typography, InputBase, IconButton, Button, TextField, Divider, MenuItem, styled, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
    margin-bottom: 40px;
    background: #fff;
`;

const TopBox = styled(Grid)`
    display: flex;
    padding: 20px;
`;

const SearchBox = styled(Grid)`
    display: flex;
    background: #fff;
    margin-left: auto;
    border: 1px solid #f0f0f0;
    border-radius: 3px;
    width: 50%;
`;

const BottomBox = styled(Grid)`
    padding: 15px 25px 15px 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    border-radius: 3px;

`;

const FieldBox = styled(Grid)`
    padding-bottom: 5px;
    display: flex;
    flex-direction: column;

    & > .MuiTextField-root {
        width: 90%;
    }
`;

const Filter = ({ filters, setFilters }) => {

    const [tempState, setTempState] = useState({ ...filters }); //temporary state built so that filters are applied only on clicking the search button

    const date = new Date().toISOString().split('T')[0];

    const handleFilterChange = (evt) => {
        setTempState({
            ...tempState,
            [evt.target.name]: evt.target.value
        });
        // console.log(filters);
    };

    const applyFilters = () => {
        setFilters({ ...tempState });
    };

    return (
        <Component>

            <TopBox container>

                <Grid item lg={6} md={6} sm={12} xs={12} style={{marginBottom: 10}} >
                    <Typography variant="h4" >Search Properties to Rent</Typography>
                </Grid>

                <SearchBox item lg={6} md={6} sm={12} xs={12} >
                    <InputBase
                        sx={{ ml: '1vw', flex: 1, width: '100%' }}
                        placeholder="Search With SearchBar"
                    />
                    <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                        <SearchIcon />
                    </IconButton>
                </SearchBox>

            </TopBox>

            <Divider variant="middle" />

            <BottomBox container >

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Location</Typography>
                    <Select
                        id="location"
                        name="location"
                        variant="standard"
                        value={tempState.location}
                        onChange={handleFilterChange}
                    >
                        <MenuItem style={{ fontSize: 14 }} key="all" value="select" >-- Select --</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="delhi" value="New Delhi" >New Delhi</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="gurgaon" value="Gurgaon" >Gurgaon, Haryana</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="noida" value="Noida" >Noida, UP</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="alwar" value="Alwar" >Alwar, Rajasthan</MenuItem>
                    </Select>

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Move-in Date</Typography>
                    <TextField
                        type="date"
                        id="moveDate"
                        name="moveDate"
                        inputProps={{ min: date }}
                        variant="standard"
                        value={tempState.moveDate}
                        onChange={handleFilterChange}
                    />

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Price (₹)</Typography>
                    <Select
                        id="price"
                        name="price"
                        variant="standard"
                        value={tempState.price}
                        onChange={handleFilterChange}
                    >
                        <MenuItem style={{ fontSize: 14 }} key="op0" value="select" >-- Select --</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op1" value="0L-3L" >Less than 3 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op2" value="3L-6L" >3 Lakhs - 6 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op3" value="6L-10L" >6 Lakhs - 10 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op4" value=">10L" >More than 10 Lakhs</MenuItem>
                    </Select>

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Property Type</Typography>
                    <Select
                        id="pType"
                        name="pType"
                        variant="standard"
                        value={tempState.pType}
                        onChange={handleFilterChange}
                    >
                        <MenuItem style={{ fontSize: 14 }} key="all" value="select" >-- Select --</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="house" value="house" >House</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="land" value="land" >Vacant Land</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="ind/comm" value="ind/comm" >Industrial/Commercial</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="agricultural" value="agricultural" >Agricultural</MenuItem>
                    </Select>

                </FieldBox>

                <Button variant='contained' style={{ height: 35, background: '#3c0080' }} onClick={applyFilters} >Search</Button>

            </BottomBox>
            <Typography style={{marginLeft: 10, padding: 10, fontSize: 14, color: '#7f7f7f' }}>*Click on the search button to apply the filters.</Typography>

        </Component>
    );

};

export default Filter;