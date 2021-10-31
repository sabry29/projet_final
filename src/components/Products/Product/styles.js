import { makeStyles} from '@material-ui/core/styles';

export default makeStyles(() =>({
    root: {
        maxwidth: '100%',
    },
    media:{
        hieght: 0,
        paddingTop: '56.25%',
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    
    cardContent:{
        display:'flex',
        justifyContent: 'space-between',
    },
}));