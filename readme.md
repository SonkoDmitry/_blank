# _blank html/js/css framework
Hello there! If You want to use this shit, you should make next steps:

####note 
This shit using [Yeoman](http://yeoman.io/) engine

## Preparing instalation

 - install node.js and npm package manager
 - *npm install -g yo*
 - *git clone "this repository" webapp*
 - *cd webapp*
 - *npm install*
 - *bower install*
 - *grunt serve*

 - for build application type: *grunt build*

### Includes
 - package.json

```json
{
    "name": "_blank",
    "version": "0.0.1",
    "dependencies": {},
    "devDependencies": {
        "grunt": "~0.4.1",
        "grunt-contrib-copy": "~0.5.0",
        "grunt-contrib-concat": "~0.3.0",
        "grunt-contrib-coffee": "~0.10.0",
        "grunt-contrib-jst": "~0.6.0",
        "grunt-contrib-uglify": "~0.4.0",
        "grunt-contrib-jshint": "~0.9.0",
        "grunt-contrib-cssmin": "~0.9.0",
        "grunt-contrib-connect": "~0.7.0",
        "grunt-contrib-clean": "~0.5.0",
        "grunt-contrib-htmlmin": "~0.2.0",
        "grunt-contrib-imagemin": "~0.6.0",
        "grunt-contrib-watch": "~0.6.0",
        "grunt-contrib-less" : "~0.11.0",
        "grunt-mocha": "~0.4.1",
        "grunt-usemin": "~0.1.10",
        "grunt-bower-requirejs": "~0.7.0",
        "grunt-requirejs": "~0.4.0",
        "grunt-rev": "~0.1.0",
        "optipng-bin": "0.3.1",
        "jpegtran-bin": "0.2.3",
        "gifsicle": "0.1.4",
        "grunt-open": "~0.2.0",
        "load-grunt-tasks": "~0.1.0",
        "connect-livereload": "~0.2.0",
        "time-grunt": "~0.2.1",
        "jshint-stylish": "~0.1.3",
        "grunt-sftp-deploy" : "~0.0.11"
    },
    "engines": {
        "node": ">=0.8.0"
    }
}
```
 - bower.json

 ```json
 {
    "name": "_blank",
    "version": "0.0.1",
    "directory" : "app/bower_components",
    "dependencies": {
        "jquery": "~1.9.1",
        "underscore": "~1.4.3",
        "backbone": "~1.0.0",
        "requirejs": "~2.1.5",
        "requirejs-text": "~2.0.5",
        "modernizr": "~2.6.2",
        "jquery.validation" : "~1.12.0"
    },
    "devDependencies": {}
}
 ```

