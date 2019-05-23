import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '../app_bar/index.js';
import Button from '@material-ui/core/Button';
import './style.css';

function Page(props) {
    const {
        goTo,
        current_item,
    } = props;

    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {current_item ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {current_item.title}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${current_item.image})`,
                                }}
                            />

                            <Typography gutterBottom component="p" className="content">
                                {current_item.content}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Back
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;
