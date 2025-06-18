# ♟️ Checkers Game (React + TypeScript)

Это приложение реализует классическую игру в шашки на платформе React с использованием TypeScript. Логика игры написана с нуля, без сторонних движков.

---

## 🕹️ Потыкать можно тут 👇

https://modern-checkers.netlify.app/

---

## 📦 Стек технологий

- ⚛️ React
- 🔵 TypeScript
- 🎯 Context API (для управления состоянием)
- 🧪 Jest + React Testing Library (для тестов)
- 🐳 Docker
- 🧠 Собственная игровая логика (`Board`, `Checker`, `getAvailableCaptures`, `getAvailableMoves`, `initializeBoard`)

---

## 🚀 Возможности

- Ходы по правилам шашек
- Подсветка возможных ходов
- Поддержка игры между двумя игроками локально
- Проверка победителя
- История ходов
- Подсчёт очков
- Сброс игры

---

## 🖥️ Локальный запуск

```bash
npm install
npm run dev
```

---

## 🐳 Запуск через Docker

```bash
docker build -t checkers-app .
docker run -d -p 3000:80 --name checkers-container checkers-app
```

---

## 🔜 Будущие улучшения

- Добавить тесты + CI/CD

- Возможность играть с компьютером

- Авторизация

- Таблица лидеров

- Поддержка онлайн-игры через WebSocket

- Добавить PWA

- Создать десктоп версию
