#!/bin/bash

function killBS {
    ps -Af | grep browser-sync | grep -v grep | awk '{print $2}' | xargs kill
    echo killed...
}

killBS
npm run start > /tmp/out.log 2> /tmp/err.log &
sleep 5 && ./node_modules/.bin/chimp --browser=phantomjs
killBS

exit $?

