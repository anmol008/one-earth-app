<!-- first step 
(While creating a new image dont forget to change this name anmolbhargava007/sbi-ui to anmolbhargava007/new-name) --> 
docker build -t anmolbhargava007/oneearth-flowgenix-ui:latest .

<!-- second step -->
docker push anmolbhargava007/oneearth-flowgenix-ui:latest

<!-- Third step -->
docker buildx ls
 
<!-- Fourth step -->
 docker buildx build --platform linux/amd64,linux/arm64 -t anmolbhargava007/oneearth-flowgenix-ui:latest --push .

 <!-- If error comes (for ex : multi-platform issue, then run other command) -->
 docker buildx create --use

 <!-- Then again run  -->
docker buildx build --platform linux/amd64,linux/arm64 -t anmolbhargava007/oneearth-flowgenix-ui:latest --push .

<!-- run the docker app in local-->
docker run -p 9090:80 anmolbhargava007/oneearth-flowgenix-ui:latest 