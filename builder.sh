#!/bin/bash

ng build 
docker build -t eaic/hassan-gpt . 
docker compose up -d --build 
npm run server 