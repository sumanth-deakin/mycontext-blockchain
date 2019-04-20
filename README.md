# MyContext Blockchain


To run this project you need to have

  - Git installed in Windows
  - Ubuntu
  - macos

# Prerequisites (Environment for ubuntu)
  - Operating Systems: Ubuntu Linux 14.04 / 16.04 LTS (both 64-bit), or Mac OS 10.12
  - Docker Engine: Version 17.03 or higher
  - Docker-Compose: Version 1.8 or higher
  - Node: 8.9 or higher (note version 9 is not supported)
  - npm: v5.x
  - git: 2.9.x or higher
  - Python: 2.7.x
  - A code editor of your choice, we recommend VSCode.
 
### Installation

install the updates

```sh
$ sudo apt-get update
```

install curl if not available

```sh
$ sudo apt install curl
```

install prerequisites

```sh
$ chmod u+x prereqs-ubuntu.sh
```

install required tools

```sh
$ sudo apt-get install apt-transport-https ca-certificates gnupg-agent software-properties-common
```

Setup Docker

```sh
$  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
$ sudo apt-key fingerprint 0EBFCD88
$ sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu \$(lsb_release -cs) \stable"
$ sudo apt-get install docker-ce docker-ce-cli containerd.io
$ apt-cache madison docker-ce
```

Check if docker is installed using below command

```sh
$ docker --version
```

Install docker compose 

```sh
$ sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
$ sudo chmod +x /usr/local/bin/docker-compose
```

Check docker compose is installed or not

```sh
$ docker-compose --version
```

Download node version manager NVM

```sh
$ curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh
$ source ~/.nvm/nvm.sh
```

install node version 8.9.0

```sh
$ nvm install 8.9.0
```

Install and setup git if you haven't installed it

```sh
$ sudo apt install git
$ git config --global user.email "smeesala@deakin.edu.au"
$ git config --global user.name "Sumanth Kumar Meesala"
```

install python and software properties

```sh
$ sudo apt install python2.7 python-pip
$ sudo apt-get install -y software-properties-common
```

Setup hyperledger composer

```sh
$ sudo npm install -g composer-cli
$ sudo npm install -g composer-rest-server
$ sudo npm install -g generator-hyperledger-composer
$ sudo npm install -g yo
$ sudo npm install -g composer-playground
```

Check composer installed correctly using below code

```sh
$ composer -v
```

Setup fabric dev servers

```sh
$ cd $HOME
$ curl -O -k https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh
$ mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers
$ cd ~/fabric-dev-servers
$ export FABRIC_VERSION=hlfv12
$ sudo ./downloadFabric.sh
$ sudo ./startFabric.sh
$ sudo ./createPeerAdminCard.sh
$ sudo composer-playground
```

Hyperledger composer should be up and running in http://localhost:8080 

### Staring the project
### Clone mycontext-blockchain project and open it in vscode
### Open terminal in vscode (ctrl+`) and use below commands to start project


```sh 
$ sudo composer archive create -t dir -n .
$ sudo composer network install --card PeerAdmin@hlfv1 --archiveFile mycontext-blockchain@0.0.3.bna
$ sudo composer network start --networkName mycontext-blockchain --networkVersion 0.0.3 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
$ sudo composer card import --file networkadmin.card
$ sudo composer network ping --card admin@mycontext-blockchain
$ sudo composer-rest-server
```

### After starting the project some questions are asked select below options
```sh 
? Enter the name of the business network card to use: admin@mycontext-blockchain
? Specify if you want namespaces in the generated REST API: always use namespaces
? Specify if you want to use an API key to secure the REST API: No
? Specify if you want to enable authentication for the REST API using Passport: No
? Specify if you want to enable the explorer test interface: Yes
? Specify a key if you want to enable dynamic logging: 
? Specify if you want to enable event publication over WebSockets: No
? Specify if you want to enable TLS security for the REST API: No
```
mycontext-blockchain is up and running in http://localhost:3000/explorer/ 
