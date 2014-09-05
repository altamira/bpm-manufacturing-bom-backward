Altamira BPM Manufacturing Bill of Material
===========================================

Instructions to compile this project:

### This steps setup a web app

1. Download and install [Node JS](http://nodejs.org/)

2. Clone this repository at your git home

```sh
$ cd GIT_HOME/bpm-manufacturing-bom/yo
$ npm install -g yo
$ npm install -g generator-angular
$ npm install grunt-connect-proxy --save-dev
$ bower install
$ cd bower_components/overthrow
$ npm install
$ grunt
$ cd ../..
$ grunt build
$ grunt serve
```

Webapp uses [Mobile Angular UI](http://mobileangularui.com/docs/) as a responsive framework what requires setup too.

### To setup a server

Download and expand the [JBoss AS 7 Application Server](http://camunda.org/release/camunda-bpm/jboss/7.1/camunda-bpm-jboss-7.1.0-Final.zip) at any folder you want.

To start the server:

```sh
$ cd JBOSS_HOME/camunda-bpm-jboss-7.1.0-Final
$ start-camunda.sh
```

To compile and generate war file without run the unit tests:

```sh
$ cd GIT_HOME/bpm-manufacturing-bom
mvn clean install -DskipTests
```

To compile and run the unit tests:

```sh
$ cd GIT_HOME/bpm-manufacturing-bom
mvn clean install -Parq-jbossas-remote
```

The JBoss AS need to be running before in this case.

To check if JBoss is running you can access the [admistrative console](http://localhost:9990) of JBoss AS 7 and manually install war package if you want. At first time, it request that you create an administrative user, follow the instructions to do that.

PS: Server setup required a folder /yo/dist, so setup web app before.

