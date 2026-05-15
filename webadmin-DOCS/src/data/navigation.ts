export type PageId =
  | 'foundation'
  | 'overview'
  | 'naming'
  | 'formatting'
  | 'design-pattern'
  | 'repo-structure'

export type NavPageItem = {
  id: PageId
  label: string
  badge?: string
  description?: string
}

export type NavSection = {
  id: PageId
  label: string
  items: NavPageItem[]
}

export const sections: NavSection[] = [
  {
    id: 'foundation',
    label: 'พื้นฐานโปรเจกต์',
    items: [
    //   {
    //     id: 'overview',
    //     label: 'Overview',
    //     description: 'ภาพรวม theme, layout และ tech stack ของ webadmin-DOCS',
    //   },
    {
        id: 'repo-structure',
        label: 'Repository Structure',
        description: 'โครงสร้าง folder และ file — แต่ละ layer อยู่ที่ไหน มีหน้าที่อะไร',
      },
      {
        id: 'naming',
        label: 'Naming Convention',
        // badge: 'สำคัญ',
        description: 'มาตรฐานการตั้งชื่อ file, component, hook, service ทั้งโปรเจกต์',
      },
      {
        id: 'formatting',
        label: 'Formatting',
        description: 'ESLint, TypeScript strict mode, indentation, quotes, import order',
      },
      {
        id: 'design-pattern',
        label: 'Design Pattern',
        description: 'Design pattern หลักที่ใช้ซ้ำทั่วทั้งโปรเจกต์',
      },
    ],
  },
]

export const orderedPages: Pick<NavPageItem, 'id' | 'label'>[] = [
  { id: 'repo-structure', label: 'Repository Structure' },
  { id: 'naming', label: 'Naming Convention' },
  { id: 'formatting', label: 'Formatting' },
  { id: 'design-pattern', label: 'Design Pattern' },
]

export type SearchItemKind = 'page' | 'heading' | 'text'

export type SearchItem = {
  kind: SearchItemKind
  pageId: PageId
  anchor?: string
  label: string
  context: string
}

export const searchIndex: SearchItem[] = [
  // ── Pages ─────────────────────────────────────────────────────────
  { kind: 'page', pageId: 'foundation', label: 'พื้นฐานโปรเจกต์', context: 'หน้าหลัก' },
  { kind: 'page', pageId: 'naming', label: 'Naming Convention', context: 'พื้นฐานโปรเจกต์' },
  { kind: 'page', pageId: 'formatting', label: 'Formatting', context: 'พื้นฐานโปรเจกต์' },
  { kind: 'page', pageId: 'design-pattern', label: 'Design Pattern', context: 'พื้นฐานโปรเจกต์' },

  // ── Naming Convention ─────────────────────────────────────────────
  { kind: 'heading', pageId: 'naming', anchor: 'case-styles', label: 'Naming Case Styles', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'file-naming', label: 'File Naming', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'page-components', label: 'Page Components', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'feature-components', label: 'Feature Components', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'shared-ui', label: 'Shared UI Components', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'hooks', label: 'Custom Hooks', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'services', label: 'Services', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'utilities', label: 'Utilities & Types', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'folder-naming', label: 'Folder Naming', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'component-naming', label: 'Component Naming', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'hook-naming', label: 'Hook Naming', context: 'Naming Convention' },
  { kind: 'heading', pageId: 'naming', anchor: 'service-naming', label: 'Service & API Naming', context: 'Naming Convention' },

  // ── Formatting ────────────────────────────────────────────────────
  { kind: 'heading', pageId: 'formatting', anchor: 'tooling', label: 'Tooling Overview', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'eslint', label: 'ESLint', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'typescript', label: 'TypeScript Strict Config', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'quotes', label: 'Quotes', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'semicolons', label: 'Semicolons', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'trailing-commas', label: 'Trailing Commas', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'import-order', label: 'Import Order', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'function-style', label: 'Function Style', context: 'Formatting' },
  { kind: 'heading', pageId: 'formatting', anchor: 'type-annotation', label: 'Type Annotation Style', context: 'Formatting' },

  // ── Design Pattern ─────────────────────────────────────────
  { kind: 'heading', pageId: 'design-pattern', anchor: 'component-pattern', label: 'Component Pattern', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'page-layout', label: 'PageLayout', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'common-table', label: 'CommonTable', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'search-filter', label: 'SearchAndFilter', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'popup', label: 'Popup Components', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'service-pattern', label: 'Service Pattern', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'http-stack', label: 'HTTP Stack', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'domain-service', label: 'Domain Service', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'hook-pattern', label: 'Hook Pattern', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'redux-hooks', label: 'useAppDispatch / useAppSelector', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'use-debounce', label: 'useDebounce', context: 'Design Pattern' },
  { kind: 'heading', pageId: 'design-pattern', anchor: 'use-auto-refresh', label: 'useAutoRefresh', context: 'Design Pattern' },

  // ── Text snippets — Naming Convention ───────────────────────────
  { kind: 'text', pageId: 'naming', anchor: 'case-styles', label: 'PascalCase ทุกคำขึ้นต้นด้วยตัวพิมพ์ใหญ่ ไม่มีตัวคั่น เช่น OrderHistoryListPage, RiderProfilesTable', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'case-styles', label: 'camelCase คำแรกพิมพ์เล็ก คำถัดไปขึ้นต้นด้วยพิมพ์ใหญ่ เช่น orderHistory, handleSearchChange', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'case-styles', label: 'SCREAMING_SNAKE_CASE ทุกตัวพิมพ์ใหญ่ คั่นด้วย underscore เช่น COLORS, ORDER_STATUS, SEARCH_DEBOUNCE_MS', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'case-styles', label: 'kebab-case ทุกตัวพิมพ์เล็ก คั่นด้วย hyphen เช่น /app/order-history, order-history/data', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'page-components', label: 'Page component ให้เติม Page ต่อท้ายชื่อเสมอ เพื่อบ่งบอกว่าเป็น top-level route component', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'page-components', label: 'ตัวอย่าง Page: OrderHistoryListPage.tsx, OrderHistoryDetailPage.tsx, RiderProfilesPage.tsx, LoginPage.tsx', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'feature-components', label: 'Feature component มี business logic เฉพาะ domain ใช้ PascalCase ตั้งชื่อให้สื่อว่าเป็นส่วนใดของ feature', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'feature-components', label: 'ตัวอย่าง Feature: RiderProfilesTable.tsx, RiderProfilesHeader.tsx, AssignRiderDialog.tsx', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'shared-ui', label: 'Shared component กลางใช้ได้หลาย domain ไม่มี business logic ตั้งชื่อตาม UI role', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'shared-ui', label: 'ตัวอย่าง Shared: CommonTable.tsx, SearchAndFilter.tsx, PageLayout.tsx, ErrorPopup.tsx, Pagination.tsx', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'hooks', label: 'Hook ทุกตัวต้องขึ้นต้นด้วย use ตามด้วยชื่อใน camelCase — use{Description}.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'hooks', label: 'ตัวอย่าง hooks: useAutoRefresh.ts, useAuth.ts, useDebounce.ts, usePageActivity.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'services', label: 'Service file รวม API call function ของแต่ละ domain ใช้ camelCase เติม Service ต่อท้าย', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'services', label: 'ตัวอย่าง services: apiService.ts, authService.ts, orderHistoryService.ts, riderProfilesService.ts, httpClientService.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'utilities', label: 'Utility pure function ทั่วไป ตั้งชื่อตาม action เช่น formatDate.ts, formatNumber.ts, exportFile.ts, jwtDecode.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'utilities', label: 'Interface/Type file camelCase เช่น orderHistory.ts, riderProfiles.ts, user.ts, responseHandler.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'utilities', label: 'Constant file camelCase + .constant.ts เช่น color.constant.ts, routes.constant.ts, status.constant.ts', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'utilities', label: 'Redux Slice fixed name: stateSlice.ts + index.ts ใน stores/{domain}/', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'folder-naming', label: 'Top-level src/ folders ใช้ตัวพิมพ์เล็กทั้งหมด: assets, components, configs, constants, features, hooks, interfaces, pages, routes, services, stores, utils', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'folder-naming', label: 'Sub-folder domain/feature ใช้ camelCase เช่น orderHistory, riderProfiles, orderTracking', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'folder-naming', label: 'Sub-folder ใน components/ ใช้ตัวพิมพ์เล็ก (UI category ไม่ใช่ domain) เช่น layout, popup, inputs, table', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'component-naming', label: 'Component function ทุกตัวใช้ PascalCase และต้องตรงกับชื่อไฟล์เสมอ', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'component-naming', label: 'Props type ตั้งชื่อตาม {ComponentName}Props ประกาศเป็น named type หรือ interface ห้าม inline prop type', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'hook-naming', label: 'ทุก custom hook ต้องขึ้นต้นด้วย use เช่น useDebounce, useAutoRefresh', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'hook-naming', label: 'Hook ที่รับ props หลายตัวให้ destructure จาก props object เดียว ไม่รับเป็น positional argument แยก', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'hook-naming', label: 'UseAutoRefreshProps type pattern สำหรับ hook props: fetchFn, interval, shouldRefresh', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'service-naming', label: 'api prefix เรียก API โดยตรง คืน SuccessResponse<T> ที่ยังไม่ผ่านการแปลง เช่น apiGetOrderHistoryList, apiUserLogin', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'service-naming', label: 'get prefix ดึงข้อมูลและ return ข้อมูลที่ unwrap/transform แล้ว เช่น getRiderList, getJobTypeOptions', context: 'Naming Convention' },
  { kind: 'text', pageId: 'naming', anchor: 'service-naming', label: 'export prefix ดาวน์โหลดไฟล์ blob operation เช่น exportOrderHistoryList, exportRiderOrderList', context: 'Naming Convention' },

  // ── Text snippets — Formatting ────────────────────────────────────
  { kind: 'text', pageId: 'formatting', anchor: 'tooling', label: 'ESLint Static Analysis Tool ตรวจ code quality — จับ bug, บังคับ style, ตรวจ React hooks rules', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'tooling', label: 'TypeScript ตรวจ type safety ทั้งสองทำงานเสริมกัน ต้องผ่านทั้งคู่ก่อน commit', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'tooling', label: 'Vite Build Tool Dev Server เร็วกว่า Webpack SWC Speedy Web Compiler เขียนด้วย Rust แทน Babel', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'tooling', label: 'npm run dev เปิด dev server HMR Hot Module Replacement แก้โค้ดแล้วเห็นผลทันที', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'eslint', label: 'ใช้ Flat Config eslint.config.js ซึ่งเป็น format ใหม่ของ ESLint v9+ ไม่ใช่ .eslintrc', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'eslint', label: 'Plugin @eslint/js recommended JavaScript best practices พื้นฐาน', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'eslint', label: 'Plugin typescript-eslint recommended TypeScript rules no-explicit-any consistent-type-imports', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'eslint', label: 'Plugin eslint-plugin-react-hooks ตรวจ rules of hooks exhaustive-deps', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'eslint', label: 'Plugin eslint-plugin-react-refresh ป้องกัน pattern ที่ทำให้ HMR พัง', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'typescript', label: 'strict: true ห้ามใช้ any โดยไม่ตั้งใจ ต้อง narrow type null check เสมอ', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'typescript', label: 'noUnusedLocals ลบ variable ที่ไม่ใช้ออก ไม่งั้น compile error', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'typescript', label: 'noUnusedParameters ถ้า parameter ไม่ใช้ ให้ prefix ด้วย _ หรือลบออก', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'typescript', label: 'verbatimModuleSyntax บังคับใช้ import type { Foo } สำหรับ type', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'typescript', label: 'erasableSyntaxOnly ห้ามใช้ enum ที่มี runtime value ให้ใช้ as const object แทนเสมอ', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'quotes', label: 'ใช้ Double quotes " สำหรับ string ทั่วไป — Template literals ใช้ได้เมื่อต้องการ interpolation', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'semicolons', label: 'ใช้ semicolon ; ต่อท้ายทุก statement', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'trailing-commas', label: 'ใส่ trailing comma ใน multiline object, array และ function parameter', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'import-order', label: 'เรียง import เป็น 4 กลุ่ม: 1.React ecosystem 2.Third-party libraries 3.Interface type-only 4.Components Redux Service', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'import-order', label: 'ใช้ import type { Foo } สำหรับ type-only import เสมอ — verbatimModuleSyntax บังคับ', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'function-style', label: 'Function declaration สำหรับ page/feature components เช่น export default function OrderHistoryListPage()', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'function-style', label: 'Arrow function สำหรับ shared/utility components เช่น export const Selecter = (props) => { ... }', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'function-style', label: 'async/await + try/catch + finally เพื่อจัดการ loading error cleanup ห้ามใช้ .then().catch()', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'type-annotation', label: 'interface สำหรับ object shape ที่อาจ extend ในอนาคต — type สำหรับ union alias primitive mapped type', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'type-annotation', label: 'ห้ามใช้ any ใช้ unknown + narrow type แทน เช่น const error = err as ErrorResponseProps', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'mui-styling', label: 'ใช้ @mui/joy สำหรับ render component โปรเจกต์ใช้ Joy theme เป็นหลัก ห้าม mix กับ @mui/material', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'mui-styling', label: 'ใช้ sx prop แทน inline style object เพราะ sx เข้าถึง theme รองรับ responsive shorthand pseudo-class &:hover', context: 'Formatting' },
  { kind: 'text', pageId: 'formatting', anchor: 'mui-styling', label: 'ยกเว้น useMediaQuery hook ที่ยังไม่มีใน Joy — import จาก @mui/material ได้เฉพาะ hook นี้', context: 'Formatting' },

  // ── Text snippets — Design Pattern ───────────────────────────────
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-pattern', label: 'โปรเจกต์แบ่ง component เป็น 3 layer: Page, Feature, Shared ก่อนสร้างควรถามว่า component นี้ควรอยู่ layer ไหน', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-layers', label: 'Page layer (src/pages/) รู้จัก Redux, routing, API call, business logic ทั้งหมด เช่น OrderHistoryListPage', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-layers', label: 'Feature layer (src/features/) รู้จัก domain type และ business rule เช่น RiderProfilesTable, AssignRiderDialog', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-layers', label: 'Shared layer (src/components/) ไม่รู้จัก domain รับแค่ data และ callback ผ่าน props เช่น CommonTable, GlobalPagination, PageLayout', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-layers', label: 'กฎเหล็ก Shared component ห้ามรู้จัก feature-specific type ถ้า CommonTable รู้จัก RiderListItem แปลว่า design ผิดแล้ว', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-design-principles', label: 'Single Responsibility component ทำหน้าที่เดียว เช่น GlobalPagination รู้แค่ page index/size นำกลับมาใช้ใหม่ได้โดยไม่ต้องแก้', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-design-principles', label: 'Prop-driven state ทั้งหมดอยู่ที่ parent รับผ่าน props คืน event ผ่าน callback ไม่ fetch data เอง ทดสอบง่าย ไม่มี side effect ซ่อน', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-design-principles', label: 'Generic over Specific ใช้ generic type เช่น CommonTable<T> แทน RiderTable OrderTable แยกกัน แก้ bug ที่เดียว fix ทุก feature', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'component-design-principles', label: 'Composition over Config รับ ReactNode ผ่าน props เช่น options prop ของ PageLayout ไม่ต้องแก้ shared component เมื่อ feature ใหม่', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'page-layout', label: 'ทุก page ต้อง wrap ด้วย PageLayout เสมอ ห้ามสร้าง header หรือ breadcrumb เอง', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'page-layout', label: 'PageLayout props: paths (breadcrumb), title (h1), options (ReactNode ขวาบน), openarrowback (ปุ่ม Back)', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'global-pagination', label: 'GlobalPagination props: totalItems, pageIndex (0-based), pageSize (null=แสดงทั้งหมด), onPageChange, onPageSizeChange, hideRowsPerPage, disabled', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'global-pagination', label: 'pageIndex เป็น 0-based — หน้าแรกคือ 0 ไม่ใช่ 1', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'common-table', label: 'CommonTable<T> generic component ไม่รู้จัก domain — caller กำหนด columns definition เอง', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'common-table', label: 'ColumnDef<T> มี id, label, accessor, renderCell, sortable, onSort — accessor ดึง value ตรง renderCell custom render', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'common-table', label: 'ถ้าไม่ส่ง pagination prop ไม่แสดง pagination ใช้ได้กับ list ที่ไม่ต้อง paginate', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'feature-component-example', label: 'Feature component ไม่ render header breadcrumb layout wrapper เอง ปล่อยให้ page component ทำ', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'feature-component-example', label: 'RiderProfilesTable ตัวอย่าง feature component ใช้ CommonTable GlobalPagination state เก็บ Redux เท่านั้น', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'service-pattern', label: 'ทุก API call ต้องผ่าน layer — ห้าม call ตรงจาก component เพื่อให้ logic อยู่ที่เดียว แก้ไขง่าย testable', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'http-stack', label: 'HTTP Stack 4 ชั้น: Component/Page → Domain Service → apiService.fetchData → httpClientService → API Server', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'http-stack', label: 'ห้าม import httpClientService นอก src/services/ ห้ามเรียก axios โดยตรงจาก component', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'domain-service', label: 'แต่ละ domain มี service file ของตัวเอง เช่น riderProfilesService.ts ชื่อ function บอก intent ด้วย prefix', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'domain-service', label: 'api prefix คืน SuccessResponse<T> ยังไม่ผ่านการแปลง เช่น apiGetRiderList', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'domain-service', label: 'get prefix unwrap แล้วคืน data ตรง ๆ เช่น getRiderList', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'domain-service', label: 'export prefix file download blob เช่น exportRiderOrderList responseType: blob', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'domain-service', label: 'SuccessResponse<T>: data, status, message, headers. ErrorResponseProps: status, code, message, title', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'hook-pattern', label: 'Custom hook มีหน้าที่เดียวและไม่ผูกกับ domain ช่วยลด boilerplate ทำให้ component อ่านง่ายขึ้น', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'redux-hooks', label: 'ห้ามใช้ useDispatch/useSelector แบบ untyped ใช้ typed version useAppDispatch useAppSelector จาก src/stores/hooks.ts', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'use-debounce', label: 'useDebounce ป้องกัน API call ถี่เกินไปเมื่อ user พิมพ์ใน search box ใช้ useRef ไม่ให้ debounced function สร้างใหม่ทุก render', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'use-debounce', label: 'SEARCH_DEBOUNCE_MS = 1000 debounce search 1 วินาที ใช้ useCallback + useRef สำหรับ debouncedSearch', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'use-auto-refresh', label: 'useAutoRefresh ใช้ใน real-time page เช่น Order Tracking polling setInterval หยุดเมื่อ shouldRefresh เป็น false หรือ user idle', context: 'Design Pattern' },
  { kind: 'text', pageId: 'design-pattern', anchor: 'use-auto-refresh', label: 'UseAutoRefreshProps: fetchFn, interval, shouldRefresh, idle — cleanup ด้วย clearInterval', context: 'Design Pattern' },

  // ── Text snippets — Repository Structure ─────────────────────────
  { kind: 'text', pageId: 'repo-structure', anchor: 'top-level', label: 'src/ structure: assets, components, configs, constants, features, hooks, interfaces, pages, routes, services, stores, utils', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'top-level', label: 'assets static images SVGs ที่ import ใน TypeScript — public/icons SVG icons reference ผ่าน /icons/<name>.svg', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'top-level', label: 'components Shared/reusable UI ใช้ข้าม feature — features Feature-specific UI ไม่มี routing logic', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'top-level', label: 'services API service functions 1 file ต่อ 1 domain — stores Redux slices 1 folder ต่อ 1 domain', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'top-level', label: 'routes Router definition + route guards — configs App-level configuration theme constants icons', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'feature-boundaries', label: 'Feature ผูกกันด้วยชื่อ domain เดียวกัน: pages/<feature>/, features/<feature>/, services/<feature>Service.ts, stores/<feature>/', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'feature-boundaries', label: 'Layer ของ feature: Route entry point, Feature-specific UI, API calls, Redux state, TypeScript types, Status constants', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'Shared ใช้ได้จากทุก feature ต้องไม่มี feature-specific logic', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'components/layout: PageLayout, Drawer, AuthRoute, Dialog, Pagination', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'components/table: CommonTable, SearchAndFilter, DateInput — components/inputs: Selecter', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'components/popup: ErrorPopup, SuccessPopup, WarningPopup, ConfirmPopup', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'hooks: useAuth, useAutoRefresh, useDebounce, usePageActivity', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'utils: formatDate, formatNumber, formatPhoneNumber, exportFile, jwtDecode, deepParseJson, dataChecking', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'shared-vs-feature', label: 'Feature-Specific src/features/ ไม่ควรนำไปใช้ข้าม feature: jobManagement, login, riderProfiles, riderProfilesDetail', context: 'Repository Structure' },
  { kind: 'text', pageId: 'repo-structure', anchor: 'public-assets', label: 'ไฟล์ใน public/icons/ reference ผ่าน absolute path จาก root เช่น <img src="/icons/shop.svg"> ห้าม import ผ่าน ES module', context: 'Repository Structure' },
]

export const allSearchItems: NavPageItem[] = [
  {
    id: 'foundation',
    label: 'พื้นฐานโปรเจกต์',
    description: 'หมวดหลักของ webadmin-DOCS — 4 หน้าในหมวดนี้',
  },
  ...sections.flatMap((s) => s.items),
]
