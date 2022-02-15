import { createMuiTheme} from '@material-ui/core/styles';
import { green, pink, purple } from '@mui/material/colors';

const theme = createMuiTheme({
    palette: {
        primary: pink, 
        secondary: green,
    },

status: {
    danger: 'orange',
},
});

export default theme;