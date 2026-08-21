# 🎬 Movie App

<p align="center">
  <img src="./src/assets/logo.png" alt="Movie App Logo" width="120" />
</p>

<h3 align="center">Discover. Search. Explore Movies.</h3>

<p align="center">
  A modern and responsive movie discovery application built with React JS.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-JS-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React JS" />
  <img src="https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/API-Integration-4CAF50?style=for-the-badge" alt="API Integration" />
</p>

---

## 📸 Preview

<p align="center">
  <a href="https://github.com/abhishekkjaiml/React-JS/blob/main/react-movie-app/screenshot/Homepage.png">
    <img
      src="https://raw.githubusercontent.com/abhishekkjaiml/React-JS/main/react-movie-app/screenshot/Homepage.png"
      alt="Movie App Preview"
      width="900"
    />
  </a>
</p>

<p align="center">
  <a href="https://github.com/abhishekkjaiml/React-JS/blob/main/react-movie-app/screenshot/Homepage.png">
    <img
      src="https://raw.githubusercontent.com/abhishekkjaiml/React-JS/main/react-movie-app/screenshot/Homepage2.png"
      alt="Movie App Preview"
      width="900"
    />
  </a>
</p>

---

## ✨ Features

- 🎬 Browse movies
- 🔍 Search movies
- 📄 View detailed movie information
- ⭐ Display movie ratings
- 🖼️ Movie posters
- 🎭 Movie cast and genre information
- 📅 Release year information
- ⚡ API-powered movie data
- 📱 Fully responsive design
- 🎨 Clean and modern user interface

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| **React JS** | Frontend Development |
| **JavaScript** | Application Logic |
| **HTML5** | Page Structure |
| **CSS3** | Styling & Responsive Design |
| **Vite** | Development & Build Tool |
| **REST API** | Movie Data |

---

## 📂 Project Structure

```text
movie-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │   ├── logo.png
│   │   └── preview.png
│   │
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── MovieCard.jsx
│   │   └── SearchBar.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── MovieDetails.jsx
│   │
│   ├── services/
│   │   └── movieApi.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env.example
├── .gitignore
├── package.json
├── index.html
└── README.md
```

---

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/movie-app.git
```

### 2. Navigate to the Project

```bash
cd movie-app
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_KEY=your_api_key
```

### 5. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `VITE_API_KEY` | API key used to fetch movie data |

> ⚠️ Never commit your `.env` file or expose your API keys publicly.

---

## 📡 Movie API

The application uses a movie API to retrieve movie-related information such as:

- Movie title
- Movie poster
- Release year
- Genre
- Rating
- Plot
- Director
- Actors

---

## 🎯 Future Improvements

- [ ] Add movie categories
- [ ] Add favorites
- [ ] Add watchlist
- [ ] Add pagination
- [ ] Add advanced movie filtering
- [ ] Add movie trailers
- [ ] Add dark/light theme
- [ ] Add authentication
- [ ] Add personalized recommendations

---

## 🚀 Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 👨‍💻 Author

### Abhishek Kumar Jaiswar

Frontend Developer passionate about building modern and responsive web applications using React JS.

<p>
  <a href="https://github.com/your-username">GitHub</a>
  &nbsp;•&nbsp;
  <a href="https://www.linkedin.com/in/abhishek-kumar-jaiswar-aiml/">LinkedIn</a>
</p>

---

<p align="center">
  Made with ❤️ using React JS
</p>