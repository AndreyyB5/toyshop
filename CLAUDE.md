# ToyShop — интернет-магазин игрушек

## Стек
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS
- Данные пока из мок-файла src/data/products.ts (позже — Supabase)
- Деплой — Vercel (будет позже)

## Архитектура
- src/app/ — страницы (файловый роутинг Next.js)
- src/components/ — переиспользуемые компоненты
- src/data/ — мок-данные (временно, до подключения БД)
- src/lib/ — утилиты и хелперы
- src/types/ — TypeScript типы

## Правила кода
- Пиши на TypeScript, всегда типизируй пропсы
- Стили — только Tailwind, никаких CSS-файлов и styled-components
- Компоненты — Server Components по умолчанию, "use client" только когда нужен интерактив (useState, onClick и т.д.)
- Именование файлов: компоненты — PascalCase.tsx, утилиты — camelCase.ts
- Коммиты на русском, формат: "feat: описание" / "fix: описание" / "refactor: описание"
- Не ставь никакие внешние библиотеки без явного одобрения

## Связь с FastApp
- ToyShop — отдельный проект, НЕ часть FastApp
- Позже будет интеграция через API для получения данных о складских остатках
- API-роуты для связи с FastApp будут в src/app/api/

## Команда
- Два разработчика работают через Git + Pull Requests
- Каждая задача — отдельная ветка от main
- Мерж только через PR
