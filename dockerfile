# Utilisation de l’image Node.js officielle
FROM node:20

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers dans le conteneur
COPY package*.json ./
RUN npm install

COPY . .

# Exposer le port
EXPOSE 3000

# Lancer l’application
CMD ["node", "server.js"]
