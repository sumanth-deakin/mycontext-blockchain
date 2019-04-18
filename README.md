# mycontext-blockchain

 sudo apt-get update

 sudo apt install curl

chmod u+x prereqs-ubuntu.sh

sudo apt-get install -y software-properties-common

 sudo apt-get install     apt-transport-https     ca-certificates     curl     gnupg-agent     software-properties-common

 curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

sudo apt-key fingerprint 0EBFCD88

sudo add-apt-repository    "deb [arch=amd64] https://download.docker.com/linux/ubuntu \$(lsb_release -cs) \stable"

sudo apt-get install docker-ce docker-ce-cli containerd.io

apt-cache madison docker-ce

docker --version

docker-compose --version

sudo curl -L "https://github.com/docker/compose/releases/download/1.23.1/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

sudo chmod +x /usr/local/bin/docker-compose

 docker-compose --version

 curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | sh

source ~/.nvm/nvm.sh

nvm install 8.9.0

sudo apt install git

git config --global user.email "smeesala@deakin.edu.au"

git config --global user.name "Sumanth Kumar Meesala"

sudo apt install python2.7 python-pip

sudo apt-get install -y software-properties-common

npm install -g composer-cli

npm install -g composer-rest-server

npm install -g generator-hyperledger-composer

npm install -g yo

npm install -g composer-playground

 composer -v




cd $HOME

curl -O -k https://hyperledger.github.io/composer/latest/prereqs-ubuntu.sh



mkdir ~/fabric-dev-servers && cd ~/fabric-dev-servers

cd ~/fabric-dev-servers

export FABRIC_VERSION=hlfv12

sudo ./downloadFabric.sh

sudo ./startFabric.sh

sudo ./createPeerAdminCard.sh

sudo composer-playground

yo hyperledger-composer:businessnetwork

 sudo composer archive create -t dir -n .

 sudo composer network install --card PeerAdmin@hlfv1 --archiveFile mycontext-blockchain@0.0.2.bna

 sudo composer network start --networkName mycontext-blockchain --networkVersion 0.0.2 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card

 sudo composer card import --file networkadmin.card
 
 sudo composer network ping --card admin@mycontext-blockchain

 sudo composer-rest-server