# 02 — Repository Structure

## Top-Level Folders

```
src/
  assets/         # Static assets (images, SVGs) ที่ import ใน TypeScript
  components/     # Shared/reusable UI components ใช้ข้าม feature
  configs/        # App-level configuration (theme, app constants, feature icons)
  constants/      # Domain constants (colors, routes, status codes) — pure data
  features/       # Feature-specific UI components (ไม่มี routing logic)
  hooks/          # Custom React hooks ที่ใช้ข้าม feature
  interfaces/     # TypeScript interfaces และ type definitions
  pages/          # Page-level components — entry point ของแต่ละ route
  routes/         # Router definition + route guards
  services/       # API service functions — 1 file ต่อ 1 domain
  stores/         # Redux slices — 1 folder ต่อ 1 domain
  utils/          # Pure utility functions (ไม่มี React dependency)

public/
  icons/          # SVG icons ที่ reference ผ่าน `/icons/<name>.svg` (public path)

docs/
  ai-context/     # AI reference documents (ไฟล์ชุดนี้)
```

---

## Feature Boundaries

Feature แต่ละอันประกอบด้วย:

| Layer | ที่อยู่ |
|---|---|
| Route entry point | `src/pages/<feature>/` |
| Feature-specific UI | `src/features/<feature>/` |
| API calls | `src/services/<feature>Service.ts` |
| Redux state | `src/stores/<feature>/` |
| TypeScript types | `src/interfaces/<feature>.ts` |
| Status constants | `src/constants/<feature>Constants/` |

**Feature ที่มีอยู่ปัจจุบัน:**

| Feature | pages/ | features/ | services/ | stores/ |
|---|---|---|---|---|
| Login | `login/` | `login/` | `authService.ts` | `auth/` |
| Order Tracking | `orderTracking/` | `jobManagement/orderTracking/` | `orderTrackingService.ts` | `orderTracking/` |
| Order History | `orderHistory/` | `jobManagement/orderHistory/` | `orderHistoryService.ts` | `orderHistory/` |
| Rider Profiles | `riderProfiles/` | `riderProfiles/` | `riderProfilesService.ts` | `riderProfiles/` |
| Rider Profile Detail | `riderProfiles/` | `riderProfilesDetail/` | `orderDetailService.ts` | `riderProfilesDetail/` |

---

## Shared vs Feature-Specific Code

### Shared (`src/components/`, `src/hooks/`, `src/utils/`)
ใช้ได้จากทุก feature — ต้องไม่มี feature-specific logic

- `components/layout/` — PageLayout, Drawer, AuthRoute, Dialog, Pagination
- `components/table/` — CommonTable, SearchAndFilter, DateInput
- `components/inputs/` — Selecter
- `components/popup/` — ErrorPopup, SuccessPopup, WarningPopup, ConfirmPopup
- `hooks/` — useAuth, useAutoRefresh, useDebounce, usePageActivity
- `utils/` — formatDate, formatNumber, formatPhoneNumber, formatString, exportFile, jwtDecode, permissionData, getDrawerMenu, deepParseJson, dataChecking

### Feature-Specific (`src/features/`)
Logic และ UI ที่ผูกกับ domain เฉพาะ — ห้ามนำไปใช้ข้าม feature โดยตรง

- `features/jobManagement/` — AssignRiderDialog, CustomerAndDriver, OrderDetails, Timeline และ sub-folders `orderHistory/`, `orderTracking/`
- `features/login/` — Login form + input components
- `features/riderProfiles/` — RiderProfilesTable, RiderProfilesHeader
- `features/riderProfilesDetail/` — detail-specific components

---

## File Naming Conventions

| ประเภท | Convention | ตัวอย่าง |
|---|---|---|
| React component | PascalCase + `.tsx` | `OrderHistoryListPage.tsx` |
| Custom hook | camelCase + `use` prefix + `.ts` | `useAutoRefresh.ts` |
| Service | camelCase + `Service` suffix + `.ts` | `orderHistoryService.ts` |
| Redux slice | camelCase + `Slice` suffix + `.ts` | `stateSlice.ts` |
| Interface/type file | camelCase + `.ts` | `orderHistory.ts` |
| Constant file | camelCase + `.constant.ts` | `status.constant.ts` |
| Config file | camelCase + `.config.ts` | `theme.config.ts` |
| Util function file | camelCase + `.ts` | `formatDate.ts` |

---

## Store Folder Convention

ทุก folder ใน `src/stores/<domain>/` ต้องมี:
```
<domain>/
  index.ts        # export reducers สำหรับ rootReducer
  stateSlice.ts   # createSlice definition
```

---

## Import / Path Alias Conventions

จากโค้ดที่เห็นจริง: ใช้ **relative path** ทั้งหมด เช่น:
```ts
import { COLORS } from "../../constants/color.constant"
import apiService from "../services/apiService"
```

ลำดับ import ที่พบในโค้ด (ไม่มี ESLint enforce):
1. External libraries
2. Internal interfaces/types
3. Components
4. Utils/hooks
5. Redux (dispatch, selector, actions)
6. Services

---

## Public Assets Convention

ไฟล์ใน `public/icons/` reference ผ่าน absolute path จาก root:
```tsx
<img src="/icons/shop.svg" alt="shop" width={16} />
```
ห้าม import ไฟล์จาก `public/` ผ่าน ES module import
