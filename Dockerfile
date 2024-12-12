# Use a imagem oficial do Node.js como a imagem base
FROM node:18

# Defina o diretório de trabalho dentro do contêiner
WORKDIR /app

# Instale o Angular CLI globalmente
RUN npm install -g @angular/cli

# Copie o package.json e o package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências do projeto
RUN npm install

# Copie todo o código-fonte do projeto para o diretório de trabalho
COPY . .

# Exponha a porta 4200 para o tráfego HTTP
EXPOSE 4200

# Comando para iniciar o servidor de desenvolvimento do Angular CLI
CMD ["ng", "serve", "--host", "0.0.0.0"]