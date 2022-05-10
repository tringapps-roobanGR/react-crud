import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from './AllDetails';


export default function PersonDetails(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const storedValue = useSelector(state => state.allDetail.value);
  const dispatch = useDispatch();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    console.log(e.target.innerText);
    console.log(storedValue.indexOf(props.user));
  };
  const handleEdit = (e) => {
    setAnchorEl(null);
    // location.href = "www.yoursite.com";
    console.log(e.target.innerText);
    console.log(storedValue.indexOf(props.user));
  };
  const handleDelete = (e) => {
    setAnchorEl(null);
    console.log(e.target.innerText);
    console.log(storedValue.indexOf(props.user));
    dispatch(removeUser(storedValue.indexOf(props.user)));
  };

  return (
    <div className='eachUser'>
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
        <div>
          <IconButton 
            aria-label="settings"
            id="long-button"
            aria-controls={open ? 'long-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MoreVertIcon />
          {/* </IconButton> */}
          
          </IconButton>
          <Menu
            id="long-menu"
            MenuListProps={{
            'aria-labelledby': 'long-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            PaperProps={{
            style: {
                width: '20ch',
            },
            }}
            >
            <MenuItem onClick={handleEdit}>
                Edit
            </MenuItem>
            <MenuItem onClick={handleDelete}>
                Delete
            </MenuItem>
          </Menu>
        </div>
        }
        title={props.user.name.name}
        subheader={props.user.dob.dob}
      />
      <CardMedia
        component="img"
        height="194"
        image={require('./image.jpg')}
        alt="nature"
        
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {props.user.about.about}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
}