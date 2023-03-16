## Learning Nginx

This repo was used by me to learn ngninx. 

I've added comments where required but you yourselves have to do some research too. Ignore web dev side if you don't know web development focus on `nginx.conf`.

### How to run this project

To lear from this project you will have to install some softwares which are:
1. nginx (duh)
2. Docker
3. Node

I would suggest researching by yourselves on how to install these  softwares. 

To install nginx on debian based linux distros, use:
```bash
sudo apt install nginx
```

For installing Docker, follow their official instructions [here](https://docs.docker.com/engine/install/).

To install node in debian based systems, follow [this](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04) tutorial from Digital Ocean

After required softwares are installed, copy paste you `nginx.conf` file to correct place depending on your distro. 

In Ubuntu (and maybe other debian based os, including WSL) it would be most probably `/etc/nginx` directory.

You would have to change some users too. In Ubuntu, you can change user on whole `/etc/nginx directory` to `'www-data'`. To do this, use:
```bash
sudo chown -R www-data /etc/nginx
```

After that, do `sudo nginx` to start nginx (this might differ according to OS). Whenever you make changes to your nginx conf file, restart server by `sudo nginx -s reload` for your changes to take place.

After nginx server is run, we have to fire up docker containers too for our load balacing simulator to run. If you know docker, you might know something know as `docker-compose` which could be used here, but I am lazy, go raise a PR if you want a docker compose support here.

To fire docker containers, first change directory to `server` (we are in this repos directories now, so this repo's server) and then execute:

```bash
docker build . -t yourtag
```

After this is done, run these 3 almost identical commands:

```bash
docker run -p7777:8888 -d yourtag
docker run -p8888:8888 -d yourtag
docker run -p9999:8888 -d yourtag
```

This will run docker containers with our server. To read logs which will make you believe that round robin load balancing is working, go to [this](https://www.papertrail.com/solution/tips/how-to-live-tail-docker-logs/) link.

By default this setup will run on port 80, so you can just write `localhost` or `127.0.0.1` in see your server.

I watched [this](https://www.youtube.com/watch?v=7VAI73roXaY) video to learn this stuff, it is a crash course so explore more after doing this.