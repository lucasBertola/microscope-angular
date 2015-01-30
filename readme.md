microscope-angular
==================

	AngularJS (CommonJS/ browserify) project template for microscopejs cli generator with browserify and complete grunt build system

Requirements
------------

* node
* npm
* grunt-cli

Node.js installation
--------------------

#### Install on OSX

Using homebrew:

	brew install node

#### Install on Linux (Ubuntu/Mint)

	sudo apt-get install python-software-properties python g++ make
	sudo add-apt-repository ppa:chris-lea/node.js
	sudo apt-get update
	sudo apt-get install nodejs

#### Install on Windows

[Download Node.js MSI](http://nodejs.org/download/)

Installation
------------

#### install grunt-cli (sudo on linux/OSX) :

	npm install grunt-cli

#### install dependencies (sudo on linux/OSX) :

	npm install

Commands
--------

#### start (run grunt serve):

	npm start

#### test (run grunt test):

	npm test

#### build:

	grunt build
	
* validate source code (jsHint).
* copy assets & templates in build directory.
* compile scripts source files to bundle.

#### release:

	grunt release
	
* validate source code (jsHint).
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* uglify bundle.

#### test:

	grunt test
	
* validate source code (jsHint).

#### serve:

	grunt serve
	
* validate source code (jsHint).
* copy assets & templates in build directory.
* compile scripts source files to bundle.
* run local server with build directory as root .
* open default browser.