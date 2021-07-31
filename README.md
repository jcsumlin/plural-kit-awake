# PluralKit "Are we awake?" frontend
This project is a clone of [u1f408/PKAwake](https://github.com/u1f408/PKAwake) written in react with a few changes

###### [DEMO](https://flamboyant-pasteur-7b73bd.netlify.app/)

A simple web client for the PluralKit API, displaying
whether your system has at least one current fronter.

Displays:

- Member cards for the current fronter(s)
- A custom message under "is Awake/Asleep" to say whatever you'd like

Difference between this project and [u1f408/PKAwake](https://github.com/u1f408/PKAwake)

- Dark Mode
- Can be deployed on Netlify for FREE!
- Allows for a custom message to visitors
- Written in ReactJS with easily expandable codebase

##### TODO:
 - [ ] Need to add "Awake time" hour minute counter
 - [ ] Look into API response caching
 - [ ] Add custom color pallet support 
 - [ ] Ability to add custom social links
 - [x] Better mobile support

## Installation

The simple version:

#### Netlify Instructions 
[![](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/jcsumlin/plural-kit-awake)


#### Run on your own server

0. Clone this repository somewhere your web server can access
0. Run `yarn install`
0. Copy `.env.dist` to `.env`
0. Edit `.env` to configure the site
0. Run `yarn build`
0. Point your web server to the `build/` directory of this repository
