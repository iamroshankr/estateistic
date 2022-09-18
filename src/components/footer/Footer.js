import { Typography, Box } from "@mui/material";

const Footer = () => {

    return (
        <Box style={{padding: 20}}>
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </Box>
    );

};

export default Footer;