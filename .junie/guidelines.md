# Project Guidelines - Angular Basics

This project is a basic Angular application focused on managing a donut shop (Ultimate Donuts). It uses Angular 19 and is structured using traditional Angular Modules (`NgModule`).

## 1. Build/Configuration Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js installed (LTS recommended).
- **Angular CLI**: Install globally via `npm install -g @angular/cli`.

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application
The project uses `json-server` to mock a backend API.
1. **Start the Mock Server**:
   ```bash
   npm run db
   ```
2. **Start the Angular Development Server**:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:4200`.

### Configuration Notes
- **Proxy**: The project is configured with a `proxy.conf.json` to forward API requests to the `json-server` (typically on port 3000).
- **Styles**: SCSS is used for styling. Global styles are in `src/styles.scss`.

## 2. Testing Information

### Configuration
The project uses **Karma** and **Jasmine** for unit testing. The configuration is found in `karma.conf.js`. 
Note: `src/test.ts` has been modernized to work with the `@angular-devkit/build-angular:application` builder (Esbuild), removing the deprecated `require.context` which is not supported in the new build pipeline.

### Running Tests
To execute the unit tests:
```bash
npm test
```
To run tests in headless mode (useful for CI):
```bash
npm test -- --watch=false --browsers=ChromeHeadless
```

### Guidelines for Adding Tests
- Place `.spec.ts` files alongside the component/service they test.
- Use `TestBed` for configuring the testing module.
- Since the project uses `NgModule` but also has `standalone: false` on components, ensure you declare components in `TestBed` or import their respective modules.

### Simple Test Example
Below is a basic test for `AppComponent`:
```typescript
import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
```

## 3. Additional Development Information

### Code Style & Patterns
- **Inline Templates/Styles**: Components in this project often use inline `template` and `styles` within the `@Component` decorator instead of separate files.
- **Standalone vs Modules**: 
  - Components are explicitly marked with `standalone: false`.
  - Feature areas are organized into modules (e.g., `AdminModule` in `src/app/admin/`).
- **SCSS Nesting**: Components use SCSS nesting within their inline styles.
- **Models**: Interfaces/Models are stored in `models/` directories (e.g., `donut.model.ts`).

### Data Fetching
- The application is designed to work with a REST API. Ensure `json-server` is running when developing features that interact with data.
