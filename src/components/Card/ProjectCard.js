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
import {Link} from "react-router-dom";

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
    [theme.breakpoints.down("xl")]: {
        content: {
            height: 100,
        },
        root: {
            maxWidth: 350,
            marginBottom: "3rem",
        },},

    [theme.breakpoints.down("md")]: {
    content: {
        height: 110,
    }},
    tag: {
        height:50,
    },
    languages: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height:30,
    },
    language: {
        padding: "0.5rem",
        marginRight: "1rem",
        borderRadius: "7px"
    }
}));


const ProjectCard = (props) => {
    const {title, description, tag, datore, internal, external, github, img, languages, projectName, onClick} = props;
    let url = require('../../data/img/projects/' + img);
    const background = ["#AED9E0", "#D8E4FF"]

    const classes = useStyles();
    return (
        <>
            <Card className={classes.root} >
                <Link to={`/project/${projectName}`} onClick={onClick}>
                    <CardActionArea>

                        <CardMedia
                            className={classes.media}
                            component="img"
                            alt={img}
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
                </Link>
                <CardContent className={classes.tag}>
                    <h4>{datore}</h4>
                    <p>{tag}</p>
                </CardContent>
                <CardContent className={classes.languages}>
                    {languages.map((x, i) => {
                        return <div className={classes.language} style={{backgroundColor: background[i]}}>{x}</div>
                    })}
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