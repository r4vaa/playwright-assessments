# Playwright Assessments — NASA & Open Library

## 📌 Overview

This repository contains two Playwright-based test suites:

- **NASA Image & Video Library**
  - UI + API + Integration validation

- **Open Library**
  - UI + API + Integration + API filter validation

Both suites share a common framework:

- Page Object Model (POM)
- API abstraction layer
- Fixtures for dependency injection
- Shared helpers and constants
- GitHub Actions CI support

---

## How to get started

#### Git Clone

```bash
git https://github.com/r4vaa/playwright-assessments.git
```

## ⚙️ Setup

```bash
npm install
npx playwright install
```

---

## ▶️ Run Tests

Run all tests:

```bash
npx playwright test
```

Run specific project:

```bash
npx playwright test --project=NASA
npx playwright test --project=OpenLibrary
```

---

## 📊 Reports

```bash
npx playwright show-report
```

CI (GitHub Actions) uploads HTML report as artifact.

---

## 🧪 Coverage

### NASA

- UI: search, results count, open details, title + image validation
- API: search + asset validation
- Integration: API → UI consistency (title + nasa_id)

---

### Open Library

- UI: search results validation (≥5 results, titles, authors)
- API: search validation + negative test
- Integration: API title matched in UI results list
- Filter: API `limit` parameter validation

---

## 🏗️ Design

- **POM**: UI logic encapsulated in pages
- **API Layer**: reusable request helpers
- **Fixtures**: inject pages + APIs
- **Constants**: centralized test data
- **Helpers**: normalization for comparisons

---

## ⚠️ Notes / Assumptions

### NASA

- UI loads dynamically → handled via polling (`expect.poll`)
- Image validation uses `naturalWidth > 0`
- UI titles include branding → normalized before comparison

### Open Library

- Work vs Edition mismatch avoided by validating **search results list** (not details page)
- Optional fields handled gracefully (`author_name`)
- UI rendering is dynamic → avoided strict visibility waits

---

## 🛠️ Stability Strategy

- No hard waits (except minimal buffer where needed)
- Poll-based waits for dynamic UI
- Stable selectors (`getByRole`, semantic locators)
- Retry support (`retries: 1`)
- Deterministic integration (API-driven)

---

## 📷 Debugging

- HTML reports
- Trace on failure
- Screenshots on failure
- Step-level logs (`test.step`)

---

## 🚀 CI

GitHub Actions workflow:

- installs dependencies
- runs tests
- uploads report

---

## 📁 Structure

```
playwright-assessments/
│
├── nasa/
├── openlibrary/
├── fixtures/
├── utils/
├── playwright.config.js
├── package.json
└── .github/workflows/playwright.yml
```

---

## ✅ Result

- Fully automated UI + API validation
- Stable, maintainable, CI-ready framework
- Covers all assessment requirements
