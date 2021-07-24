import React from 'react';
import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    makeStyles,
    Typography
} from "@material-ui/core";
import {VscGithubInverted, VscGlobe} from "react-icons/all";

const useStyles = makeStyles( theme => ({
    root: {
        maxWidth: 400,
        marginBottom: "3rem",
    },
    media: {
        height: 140,
    },
        content: {
            height: 80,
        },
    [theme.breakpoints.down("md")]: {
    content: {
        height: 150,
    }},
    tag: {
        height:50,
    }
}));


const ProjectCard = (props) => {
    const {title, description, tag, datore, internal, external, github, img} = props;
    let url = require('../../img/logo/' + img);

    const classes = useStyles();
    return (
        <>
            <Card className={classes.root}>
                <CardActionArea>

                    <CardMedia
                        className={classes.media}
                        component="img"
                        alt={"questa era l'immagine" + img}
                        height="140"
                        image={url.default}
                        title={title}
                    />
                    <CardContent className={classes.content}>
                        <Typography gutterBottom variant="h5" component="h2">
                            {title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent className={classes.tag}>
                    <h4>{datore}</h4>
                    <p>{tag}</p>
                </CardContent>
                <CardActions>
                    {internal !== "" ? <a href={internal} >
                        <Button size="small" color="primary">
                            Scopri di più
                        </Button>
                    </a> : null}
                    {external !== "" ?  <a href={external}>
                        <Button size="small" color="primary">
                            <VscGlobe size={25}/>
                        </Button>
                    </a> : null }
                    {github !== "" ? <a href={github}>
                        <Button size="small" color="primary">
                            <VscGithubInverted size={25}/>
                        </Button>
                    </a> : null}

                </CardActions>
            </Card>
        </>
    );
}

export default ProjectCard;