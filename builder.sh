#!/bin/bash

ng build 
docker build -t eaic/ensias-ai-bot . 
docker compose up -d --build 
npm run server 