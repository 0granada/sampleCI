#!/bin/bash

# This file run tests using bash,
# Try to kill the bs instance

# function to kill browser sync instances.
function killBS {
    ps -Af | grep browser-sync | grep -v grep | awk '{print $2}' | xargs kill
}

# Call kill method
killBS
npm run start > /tmp/out.log 2> /tmp/err.log &
# run chimp
sleep 5 && ./node_modules/.bin/chimp --browser=phantomjs --jsonOutput=project_output.json
status=$?
# Call kill method
killBS

# Change return status code.
exit $status

