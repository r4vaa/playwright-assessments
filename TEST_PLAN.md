# Test Plan — NASA & Open Library

---

## 🎯 Objective

Validate functionality, data integrity, and consistency between UI and API for:

- NASA Image & Video Library
- Open Library

---

## 🧪 Scope

### NASA

- UI search and result validation
- API search and asset validation
- API → UI consistency

### Open Library

- UI search results validation
- API search validation
- Negative testing
- API → UI consistency (results list)
- API filter validation

---

## ✅ Test Scenarios

### NASA

#### UI

- Search for media (fixed term)
- Validate ≥ 5 results
- Open first result
- Validate title
- Validate image loads

#### API

- Validate search endpoint (200 + data)
- Extract `title`, `nasa_id`
- Validate asset endpoint URLs

#### Integration

- Fetch data from API
- Navigate to UI details page
- Validate:
  - title consistency (normalized)
  - nasa_id present
  - URL contains nasa_id

---

### Open Library

#### UI

- Search fixed term ("The Hobbit")
- Validate results load
- Validate ≥ 5 results
- Validate first 5:
  - title non-empty
  - author non-empty (if present)

#### API

- Validate:
  - status = 200
  - `numFound > 0`
  - `docs` array not empty

- Validate first 5 docs:
  - title exists
  - optional fields handled

- Negative test:
  - invalid query returns 0 results

#### Integration

- Get title from API
- Search in UI
- Verify title exists in UI results list (top N)

#### Filter (API)

- Validate `limit` parameter restricts results

---

## ❌ Out of Scope

- Performance testing
- Cross-browser testing
- Visual regression testing
- Accessibility testing

---

## ⚠️ Risks

- Dynamic UI rendering (lazy loading)
- External API variability
- Data inconsistency (OpenLibrary editions)
- Network latency in CI

---

## 🛠️ Mitigation

- Poll-based waits (`expect.poll`)
- Avoided strict visibility dependencies
- Normalized text before comparison
- Used deterministic API-driven flows
- Handled optional fields safely

---

## 📈 Success Criteria

- All tests pass consistently
- API and UI data align correctly
- Tests are readable, maintainable, and reusable

---

## 🧠 Notes

- Open Library integration validates against **search results list** instead of details page to avoid edition mismatch.
- NASA validation uses **details page** since API provides stable identifiers.

---

## 🏆 Outcome

- Full coverage of required scenarios
- Stable execution across repeated runs
- Clear separation of concerns (UI / API / Integration)
