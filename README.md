# Rockstar Playground

## Purpose
To make it easy to develop Rockstar solutions to Advent of Code style problems (with an input file and no interactivity).

## Setup
`npm install`

## Usage
`node start <trackname>`
Rock source code named `<trackname>.rock` will be used first from the `lyrics` folder, or else from the `contracts` folder (intended for un-poetic works in progress). File input is expected as `<trackname>.txt` in the `music` folder.

### Development
`npx nodemon start <trackname>` will re-run the program whenever it is altered.
