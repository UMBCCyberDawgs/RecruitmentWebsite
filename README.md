# Recruitment Website
Repository of Files to Run the Website Displayed at CyberDawgs Recruitment Events

# Build Website
docker build -t cyberdawgs-recruitment:latest .

# Run the Website
docker run -d -v $(pwd)/assets:/usr/share/nginx/html -p 80:80 --name cyberdawgs-recruitment cyberdawgs-recruitment:latest

# Stop and Remove Website
docker stop cyberdawgs-recruitment \
docker rm -f cyberdawgs-recruitment
