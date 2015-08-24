welcome:
	@echo "Please have a look at the Makefile for a list of possible commands."

build: 
	docker build -t jclarkin/roshambo-hapi .	

run:
	docker run --name server1 -p 80:3000 jclarkin/roshambo-hapi	
	
stop:
	docker stop server1
	
push:
	docker push jclarkin/roshambo-hapi
