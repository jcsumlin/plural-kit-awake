import React, {Component} from "react";
import {FiTwitter, FiFacebook, FiYoutube, FiInstagram, FiGithub, FiGlobe} from "react-icons/fi";
import {RiDiscordLine, RiPatreonLine} from "react-icons/ri";
import PluralKitFetcher from "../pkAPI/PluralKitFetcher";
import {Grid, Paper, Typography} from "@material-ui/core";
import MemberCards from "./MemberCards";
import Skeleton from "@material-ui/lab/Skeleton";

import "./Home.css";
import links from "../data/links.json"
import theme from "../data/theme.json"

class Home extends Component {
    state = {
        is_asleep: true,
        is_loading: true,
        pk_data: []
    };

    async componentDidMount() {
        let pk = new PluralKitFetcher();
        let res = await pk.getSystem();
        let is_asleep = res.current_switch.members.length === 0;
        return this.setState({pk_data: res, is_asleep: is_asleep, is_loading: false});
    }

    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Grid item xs={12} className="m-4">
                    <Paper elevation={3} style={{textAlign: "center"}} className="p-3 main-paper">
                        <Typography component="h1" variant="h3">
                            {this.state.is_loading ? <Skeleton variant="text" /> : this.state.pk_data.system.name}
                        </Typography>
                        <Typography component="h2" variant="h4">
                            {this.state.is_loading ? (
                                <Skeleton variant="text" />
                            ) : (
                                <>
                                    {" "}
                                    is <b>{this.state.is_asleep ? "Asleep" : "Awake"}</b>{" "}
                                </>
                            )}
                        </Typography>
                        <Typography component="h4" variant="h6" className={"mb-3"}>
                            {this.state.is_loading ? (
                                <Skeleton variant="text" />
                            ) : (
                                <>{process.env.REACT_APP_CUSTOM_MESSAGE}</>
                            )}
                        </Typography>
                        <div className={"member-cards mb-3"}>
                            <Grid container className="root" justifyContent="center">
                                {this.state.pk_data.members
                                    ? Object.keys(this.state.pk_data.members).map((key, index) => {
                                          return <MemberCards member={this.state.pk_data.members[key]} />;
                                      })
                                    : null}
                            </Grid>
                        </div>
                        <div className="socials">
                            {this.state.is_loading ? (
                                <Skeleton variant="text" />
                            ) : (
                                <>
                                    {links.map((link) => (
                                        <>
                                            <a href={link.url}>{renderIcon(link.name)}</a>{" "}
                                        </>
                                    ))}
                                </>
                            )}
                        </div>
                    </Paper>
                </Grid>
            </React.Fragment>
        );
    }
}

function renderIcon(name) {
    switch (name.toLowerCase()) {
        case "github":
            return <FiGithub color={theme.textColor}/>;
        case "twitter":
            return <FiTwitter color={theme.textColor}/>;
        case "facebook":
            return <FiFacebook color={theme.textColor}/>;
        case "youtube":
            return <FiYoutube color={theme.textColor}/>;
        case "instagram":
            return <FiInstagram color={theme.textColor}/>;
        case "discord":
            return <RiDiscordLine color={theme.textColor}/>;
        case "patreon":
            return <RiPatreonLine color={theme.textColor} />;
        case "website":
            return <FiGlobe color={theme.textColor} />;
        default:
            return;
    }
}

export default Home;
