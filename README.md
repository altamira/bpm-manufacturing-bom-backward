Altamira BPM Manufacturing Bill of Material
===========================================

Instructions to compile this project:

### This steps setup a web app

```sh
$ cd yo
$ npm install -g yo
$ npm install -g generator-angular
$ bower install
$ grunt build
$ grunt serve
```

### To setup a server

Download and expand the [JBoss AS 7 Application Server](http://camunda.org/release/camunda-bpm/jboss/7.1/camunda-bpm-jboss-7.1.0-Final.zip) at any folder you want.

To start the server:

```sh
$ JBOSS_HOME/camunda-bpm-jboss-7.1.0-Final/start-camunda.sh
```

To compile and generate war file without run the unit tests:

```sh
mvn clean install -DskipTests
```

To compile and run the unit tests:

```sh
mvn clean install -Parq-jbossas-remote
```

The Jboss AS need to be running in this case.

PS: Server setup required a folder /yo/dist, so setup web app before.

