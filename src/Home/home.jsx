import React, {Component} from "react";
import PluralKitFetcher from "../pkAPI/PluralKitFetcher";
import {Grid, Paper, Typography} from "@material-ui/core";
import MemberCards from "./MemberCards";
import './Home.css'

class Home extends Component {
    state = {
        is_asleep: true,
        pk_data: []
    }

    async componentDidMount() {
        let pk = new PluralKitFetcher()
        let res = await pk.getSystem()
        let is_asleep = res.current_switch.members.length === 0
        return this.setState({pk_data: res, is_asleep: is_asleep})
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
                            {this.state.pk_data.system ? this.state.pk_data.system.name : "Loading"}
                        </Typography>
                        <Typography component="h2" variant="h4" className={'mb-3'}>
                            is <b>{this.state.is_asleep ? "Asleep" : "Awake"}</b>
                        </Typography>
                        <div className={'member-cards mb-3'}>
                            <Grid container className="root" justifyContent="center">
                            {this.state.pk_data.members ?
                                Object.keys(this.state.pk_data.members).map((key, index) => {
                                    return <MemberCards member={this.state.pk_data.members[key]}/>
                                }) : null}
                            </Grid>
                        </div>
                    </Paper>
                </Grid>

            </React.Fragment>
        );
    }
}

export default Home;
