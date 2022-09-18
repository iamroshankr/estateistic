import { Box, Grid, Typography, InputBase, IconButton, Button, TextField, Divider, MenuItem, styled, Select } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Component = styled(Box)`
    margin-bottom: 20px;
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

const Filter = () => {

    const date = new Date().toISOString().split('T')[0];

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
                    <TextField
                        type='text'
                        id="standard-text"
                        defaultValue="New Delhi"
                        variant="standard"
                    />

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Move-in Date</Typography>
                    <TextField
                        type="date"
                        id="standard-date"
                        defaultValue={date}
                        inputProps={{ min: date }}
                        variant="standard"
                    />

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Price (₹)</Typography>
                    <Select
                        id="standard-price"
                        defaultValue="select"
                        variant="standard"
                    >
                        <MenuItem style={{ fontSize: 14 }} key="op1" value="300000" >Less than 3 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op2" value="600000" >3 Lakhs - 6 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op3" value="1000000" >6 Lakhs - 10 Lakhs</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="op4" value="1000001" >More than 10 Lakhs</MenuItem>
                    </Select>

                </FieldBox>

                <FieldBox item lg={2} md={2} sm={6} xs={12}>

                    <Typography style={{ fontSize: 14, fontWeight: 600, color: '#7f7f7f' }} >Property Type</Typography>
                    <Select
                        id="standard-ptype"
                        defaultValue="select"
                        variant="standard"
                    >
                        <MenuItem style={{ fontSize: 14 }} key="house" value="house" >House</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="land" value="land" >Vacant Land</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="ind/comm" value="ind/comm" >Industrial/Commercial</MenuItem>
                        <MenuItem style={{ fontSize: 14 }} key="agricultural" value="agricultural" >Agricultural</MenuItem>
                    </Select>

                </FieldBox>

                <Button variant='contained' style={{ height: 35, background: '#3c0080' }} >Search</Button>

            </BottomBox>

        </Component>
    );

};

export default Filter;