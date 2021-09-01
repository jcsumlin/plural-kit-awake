# PluralKit "Are we awake?" frontend

This project is a clone of [u1f408/PKAwake](https://github.com/u1f408/PKAwake) written in react with a few changes

###### [DEMO](https://flamboyant-pasteur-7b73bd.netlify.app/)

###### [Support Discord Server](https://discord.gg/UA4uUvH)

A simple web client for the PluralKit API, displaying
whether your system has at least one current fronter.

Displays:

-   Member cards for the current fronter(s)
-   A custom message under "is Awake/Asleep" to say whatever you'd like

Difference between this project and [u1f408/PKAwake](https://github.com/u1f408/PKAwake)

-   Dark Mode
-   Can be deployed on Netlify for FREE!
-   Allows for a custom message to visitors
-   Written in ReactJS with easily expandable codebase
-   Support for social media accounts

##### TODO:

-   [ ] Need to add "Awake time" hour minute counter
-   [ ] Look into API response caching
-   [ ] Add custom color pallet support
-   [ ] Support PluralKit system ID in the URL to display that system instead
-   [x] Ability to add custom social links
-   [x] Better mobile support

## Installation

The simple version:

#### Netlify Instructions

[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jcsumlin/plural-kit-awake)

This will clone my repository and ask you a few questions before deploying your new website.

| Environment Variable | Description | Optional? |
|---|---|---|
| SYSTEM_ID | Your System ID | No |
| PK_TOKEN_AUTH | API token for the plural kit API. Use pk;token to get your API Token | No |
| REACT_APP_CUSTOM_MESSAGE | A short message you want to display under your system's status | Yes |

As mentioned above this project supports the use of social links. To edit these you'll want to edit the `src/data/links.json` file from Github (or you're choice of IDE if you know what you're doing). Make sure to delete any entry that you don't want to appear on your page. After you're done editing the file click the green "Commit changes" button and Netlify will pick up your changes and start a new deployment to propagate your changes. If you don't see the social media platform that you want to include please feel free to open a ticket on my repository to request it to be added!

#### Run on your own server

1. Clone this repository somewhere your web server can access
2. Run `yarn install`
3. Copy `.env.dist` to `.env`
4. Edit `.env` to configure the site
5. Edit `src/data/links.json` and add your social links, make sure to remove any you don't have
6. Run `yarn build`
7. Point your web server to the `build/` directory of this repository
