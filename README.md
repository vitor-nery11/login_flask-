# Sistema de Autenticação React + Flask

## Sobre o projeto
Este é um sistema completo (Fullstack) de login e registro, apresentando uma **Landing Page Cinematográfica Premium**, fluxos robustos de autenticação, e um painel do usuário. O projeto serve como infraestrutura base para iniciar novos sistemas seguros utilizando JWT (JSON Web Tokens).

## Funcionalidades
- Landing Page minimalista, elegante e 100% responsiva (Dark Mode).
- Criação de novos usuários com dados salvos de forma permanente.
- Segurança no armazenamento de senhas utilizando hash (Werkzeug).
- Sistema de Autenticação baseado em Tokens (JWT).
- Rotas front-end protegidas (Dashboard e Perfil), acessíveis apenas por usuários logados.
- UI/UX polida utilizando efeito Glassmorphism e tipografia moderna (Manrope).

## Tecnologias
**Frontend:**
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM](https://reactrouter.com/) (Navegação)
- [Axios](https://axios-http.com/) (Integração de APIs)
- CSS Vanilla (CSS Variables, Flexbox, CSS Grid)

**Backend:**
- [Flask](https://flask.palletsprojects.com/)
- [Flask-SQLAlchemy](https://flask-sqlalchemy.palletsprojects.com/) (ORM)
- [Flask-JWT-Extended](https://flask-jwt-extended.readthedocs.io/) (Autenticação)
- [Flask-CORS](https://flask-cors.readthedocs.io/)
- SQLite (Banco de dados)
- [Werkzeug](https://werkzeug.palletsprojects.com/) (Segurança)

## Estrutura do projeto
```text
login_flask/
│
├── backend/                  # Servidor Flask e API
│   ├── app/
│   │   ├── models/           # user.py (Modelos do BD)
│   │   ├── routes/           # auth.py (Rotas da API)
│   │   └── __init__.py       # Application Factory
│   ├── run.py                # Ponto de entrada
│   ├── requirements.txt
│   └── .env                  # Variáveis de ambiente
│
├── frontend/                 # Interface React + Vite
│   ├── src/
│   │   ├── components/       # Botões, Inputs, etc.
│   │   ├── pages/            # Landing, Login, Register, Profile...
│   │   ├── services/         # api.js (Axios Instance)
│   │   ├── App.jsx           # Roteamento
│   │   └── index.css         # Design System global
│   └── package.json
│
└── README.md
```

## Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/en/) (v16 ou superior)
- [Python](https://www.python.org/downloads/) (v3.10 ou superior)

## Instalação

### 1. Clonando o repositório
```bash
git clone https://github.com/vitor-nery11/login_flask-.git
cd login_flask
```

### 2. Configurando o Backend (Flask)
```bash
cd backend
python -m venv venv

# Ative o ambiente virtual
# No Windows:
.\venv\Scripts\Activate
# No Linux/Mac:
source venv/bin/activate

# Instale as dependências
pip install -r requirements.txt
```

### 3. Configurando o Frontend (React)
```bash
# Abra um novo terminal na raiz do projeto
cd frontend
npm install
```

## Como executar

Você precisará rodar os dois servidores simultaneamente (em terminais separados).

**Executar Backend (API na porta 5000):**
```bash
cd backend
.\venv\Scripts\Activate
python run.py
```

**Executar Frontend (Vite na porta 5173):**
```bash
cd frontend
npm run dev
```

Acesse a aplicação no navegador através de: `http://localhost:5173`

## Rotas da API

### POST /api/auth/register
Registra um novo usuário no sistema.
- **Corpo da requisição**: `{"firstName": "John", "lastName": "Doe", "email": "john@example.com", "password": "123"}`

### POST /api/auth/login
Efetua o login e retorna o Token JWT.
- **Corpo da requisição**: `{"email": "john@example.com", "password": "123"}`

### GET /api/auth/profile
Retorna os dados do usuário logado (Requer Token no Header).
- **Header Opcional**: `Authorization: Bearer <seu-jwt-aqui>`

## Exemplos de requisições

Exemplo de requisição de **Login** via Fetch/Axios (No Javascript):
```javascript
const response = await axios.post('http://localhost:5000/api/auth/login', {
    email: 'john@example.com',
    password: '123'
});

// Acessando o Token
console.log(response.data.token);
```

## Testes
Os testes da interface podem ser feitos rodando o projeto manualmente. Para verificar o banco de dados do Backend:
1. Abra o arquivo `backend/app.db` usando um visualizador como o "DB Browser for SQLite".
2. Você poderá visualizar a tabela `users` com as senhas já protegidas (hasheadas).

## Autor
Vitor Nery
