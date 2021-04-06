import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FilterListIcon from '@material-ui/icons/FilterList';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12
  },
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
      height: 80,
  }
}));


export default function FilterMenu() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const handleClose = () => {
        setOpen(false);
    };

  
    return (
      <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                   
                    <Typography variant="h6" noWrap>
                        Service requests
                    </Typography>
                    <section className={classes.rightToolbar}>
                        <Button variant="outlined" onClick={handleClickOpen}>
                            NEW SERVICE REQUEST
                        </Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                            <DialogTitle id="form-dialog-title">
                                CREATE NEW SERVICE REQUEST
                            </DialogTitle>
                            <DialogContent>
            
                                <TextField
                                    id="outlined-full-width"
                                    label="Request name"
                                    style={{ margin: 8 }}
                                    placeholder="Type"
                                    helperText="Required"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Request type"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Required"
                                    variant="outlined"
                                    fullWidth
                                    style={{ margin: 8 }}
                                />
                                <TextField
                                    id="outlined-full-width"
                                    label="ID"
                                    style={{ margin: 8 }}
                                    placeholder="ID"
                                    helperText="Required"
                                    fullWidth
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-multiline-static"
                                    label="Description"
                                    style={{ margin: 8 }}
                                    placeholder="Type"
                                    multiline
                                    fullWidth
                                    rows={4}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    variant="outlined"
                                />
                                <TextField
                                    id="outlined-select-currency-native"
                                    select
                                    label="Priority"
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Required"
                                    variant="outlined"
                                    fullWidth
                                    style={{ margin: 8 }}
                                />
                                
                                                                
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                    Cancel
                                </Button>
                                <Button onClick={handleClose} color="primary">
                                    Send
                                </Button>
                            </DialogActions>
                        </Dialog>

                    </section>

                </Toolbar>
                

            </AppBar>
            <Drawer
               className={classes.drawer}
               variant="permanent"
               classes={{
                 paper: classes.drawerPaper,
               }}
               anchor="left"
            >
                <div className={classes.drawerHeader}>
                    <Button variant="outlined">
                        Filter
                    </Button>
                </div>
                <Divider />

                <TextField
                    id="outlined-full-width"
                    label="Search"
                    style={{ margin: 8 }}
                    placeholder="Search"
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                />

                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Request type"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />

                <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Priority"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />

            <TextField
                    id="outlined-select-currency-native"
                    select
                    label="Status"
                    SelectProps={{
                        native: true,
                    }}
                    variant="outlined"
                    style={{ margin: 8 }}
                />
                
            </Drawer>
      </div>
    );
}
