import { Box, AppBar, Toolbar, Button, Link, styled } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';

const StyledHeader = styled(AppBar)`
    background: #3c0080;
    height: 70px;
`;

const Component = styled(Box)`
    display: flex;
    margin-left: 12%;
    line-height: 0;
    color: inherit;
    align-items: center;
`;

const HeaderText = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: inherit;
    margin-left: 15px;
    font-size: 22px;
    font-weight: 700;
`;

const ButtonBox = styled(Box)`
    display: flex;
    margin: 0 5% 0 auto;
`;

const StyledButton = styled(Button)`
    padding: 5px;
    border-radius: 3px;
    margin-left: 25px;
    width: 100px;
    background: #FFF;
    color: #3c0080;
    font-weight: 600;
`;

const Header = () => {

    return (
        <StyledHeader>
            <Toolbar style={{ minHeight: 70 }}>
                <Component>
                    <HomeIcon />
                    <HeaderText to='/' >
                        Rent Property
                    </HeaderText>
                </Component>
                <ButtonBox>
                    <StyledButton variant="contained" sx={{ ':hover': { background: '#F8F0E3' } }} >Login</StyledButton>
                    <StyledButton variant="contained" sx={{ ':hover': { background: '#F8F0E3' } }} >Signup</StyledButton>
                </ButtonBox>
            </Toolbar>
        </StyledHeader>
    );

};

export default Header;