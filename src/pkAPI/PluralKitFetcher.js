const axios = require('axios').default;


export default class PluralKitFetcher {
    baseURL = "https://api.pluralkit.me/v1/"
    headers = {
        headers: {
            'Authorization': `token ${process.env.REACT_APP_PK_TOKEN_AUTH}`
        }
    }

    async getSystem() {
        let results = {}

        let system_info = await axios.get(this.baseURL + 's/' + (process.env.REACT_APP_SYSTEM_ID), this.headers)
        results.system = {}
        results.system.id = system_info.data.id
        results.system.name = system_info.data.name
        results.system.avatar_url = system_info.data.avatar_url
        results.system.timezone = system_info.data.timezone

        let fronter_info_url = this.baseURL + `s/${process.env.REACT_APP_SYSTEM_ID}/fronters`;
        let fronter_info = await axios.get(fronter_info_url, this.headers)

        results.members = {}
        fronter_info.data.members.forEach((member) => {
            results.members[member.id] = {
                name: member.name,
                display_name: member.display_name,
                color: member.color,
                pronouns: member.pronouns,
                avatar_url: member.avatar_url,
            }
        })

        results.current_switch = {
            timestamp: fronter_info.data.timestamp,
            members: Object.keys(results.members)
        }

        let switch_url = this.baseURL + `s/${process.env.REACT_APP_SYSTEM_ID}/switches`;
        let switch_info = await axios.get(switch_url, this.headers)

        let switch_out_id = null
        for (let [key, value] of Object.entries(switch_info.data)) {
            if (!value) {
                switch_out_id = key
                break;
            }
        }
        results.awake_switch = null
        if (switch_out_id !== 0) {
            let awake_switch_id = parseInt(switch_out_id === null ? switch_info.data.length : switch_out_id) - 1
            let awake_switch = switch_info.data[awake_switch_id]
            if (awake_switch) {
                results.awake_switch = {
                    time_stamp: awake_switch.timestamp,
                    members: Object.values(awake_switch.members)
                }
            }
        }
        return results;

    }
}
