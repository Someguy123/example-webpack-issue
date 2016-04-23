Example
=======
This is an example project to display an issue
with webpack in production mode.

Setup
=====

    git clone https://github.com/Someguy123/example-webpack-issue.git
    cd example-webpack-issue
    npm install
    webpack

Open index.html in your browser, press "Click Me"; it should now display
a long hex string under "RAW TX".

Now change to production mode:

    webpack -p

Refresh index.html, and press Click Me. You will now get the following error in the console,
showing that the minifier has mangled the objects.

    production.js:8 Uncaught Error: Expected BigInteger, got r
     
