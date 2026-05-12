FROM node:18  #Επιλέγει το base image δηλαδή Node.js image από Docker Hub
WORKDIR /app  #Ορίζω τον φάκελο εργασίας(app) μέσα στο container
COPY package*.json ./   #Αντιγράφει μόνο package.json
RUN npm install        #Εγκαθιστά τα dependencies της εφαρμογής,τρέχει μέσα στο container
COPY . .      #Αντιγράφει όλο το project μέσα στο container (server.js κλπ)
EXPOSE 8080   #Δηλώνει ότι το container ακούει στη θύρα 8080
CMD ["npm", "start"] #Αυτή η εντολή τρέχει όταν ξεκινάει το container,τρέχει το script start από το package.json
