FROM fusuf/whatsasena:latest

RUN git clone https://github.com/Ge3cHxc/test1 /root/test1
WORKDIR /root/test1/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
