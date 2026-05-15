import type { FC } from 'react'
import DocLayout from '../components/DocLayout'
import type { TocItem } from '../components/Toc'
import type { PageId } from '../data/navigation'

type Props = { navigate: (page: PageId) => void }

const toc: TocItem[] = [
  { id: 'top-level', label: 'Top-Level Folders', level: 2 },
  { id: 'feature-boundaries', label: 'Feature Boundaries', level: 2 },
  { id: 'shared-vs-feature', label: 'Shared vs Feature-Specific', level: 2 },
  { id: 'public-assets', label: 'Public Assets', level: 2 },
//   { id: 'store-convention', label: 'Store Folder Convention', level: 2 },
]

const RepoStructurePage: FC<Props> = ({ navigate }) => (
  <DocLayout
    title="Repository Structure"
    description="โครงสร้าง folder และ file ของโปรเจกต์ — แต่ละ layer อยู่ที่ไหน และมีหน้าที่อะไร"
    breadcrumb={['🏠', 'พื้นฐานโปรเจกต์', 'Repository Structure']}
    toc={toc}
    next="naming"
    navigate={navigate}
  >
    <h2 id="top-level">Top-Level Folders</h2>
    <pre>
      <code>{`src/
  assets/         ← Static assets (images, SVGs) ที่ import ใน TypeScript
  components/     ← Shared/reusable UI components ใช้ข้าม feature
  configs/        ← App-level configuration (theme, app constants, feature icons)
  constants/      ← Domain constants (colors, routes, status codes) — pure data
  features/       ← Feature-specific UI components (ไม่มี routing logic)
  hooks/          ← Custom React hooks ที่ใช้ข้าม feature
  interfaces/     ← TypeScript interfaces และ type definitions
  pages/          ← Page-level components — entry point ของแต่ละ route
  routes/         ← Router definition + route guards
  services/       ← API service functions — 1 file ต่อ 1 domain
  stores/         ← Redux slices — 1 folder ต่อ 1 domain
  utils/          ← Pure utility functions (ไม่มี React dependency)

public/
  icons/          ← SVG icons ที่ reference ผ่าน /icons/<name>.svg`}</code>
    </pre>

    <h2 id="feature-boundaries">Feature Boundaries</h2>
    <p>Feature แต่ละอันกระจายอยู่หลาย layer แต่ผูกกันด้วยชื่อ domain เดียวกัน:</p>
    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>ที่อยู่</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Route entry point</td>
          <td><code>src/pages/&lt;feature&gt;/</code></td>
        </tr>
        <tr>
          <td>Feature-specific UI</td>
          <td><code>src/features/&lt;feature&gt;/</code></td>
        </tr>
        <tr>
          <td>API calls</td>
          <td><code>src/services/&lt;feature&gt;Service.ts</code></td>
        </tr>
        <tr>
          <td>Redux state</td>
          <td><code>src/stores/&lt;feature&gt;/</code></td>
        </tr>
        <tr>
          <td>TypeScript types</td>
          <td><code>src/interfaces/&lt;feature&gt;.ts</code></td>
        </tr>
        <tr>
          <td>Status constants</td>
          <td><code>src/constants/&lt;feature&gt;Constants/</code></td>
        </tr>
      </tbody>
    </table>

    {/* <p>Feature ที่มีอยู่ปัจจุบัน:</p>
    <table>
      <thead>
        <tr>
          <th>Feature</th>
          <th>pages/</th>
          <th>features/</th>
          <th>services/</th>
          <th>stores/</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Login</td>
          <td><code>login/</code></td>
          <td><code>login/</code></td>
          <td><code>authService.ts</code></td>
          <td><code>auth/</code></td>
        </tr>
        <tr>
          <td>Order Tracking</td>
          <td><code>orderTracking/</code></td>
          <td><code>jobManagement/orderTracking/</code></td>
          <td><code>orderTrackingService.ts</code></td>
          <td><code>orderTracking/</code></td>
        </tr>
        <tr>
          <td>Order History</td>
          <td><code>orderHistory/</code></td>
          <td><code>jobManagement/orderHistory/</code></td>
          <td><code>orderHistoryService.ts</code></td>
          <td><code>orderHistory/</code></td>
        </tr>
        <tr>
          <td>Rider Profiles</td>
          <td><code>riderProfiles/</code></td>
          <td><code>riderProfiles/</code></td>
          <td><code>riderProfilesService.ts</code></td>
          <td><code>riderProfiles/</code></td>
        </tr>
        <tr>
          <td>Rider Profile Detail</td>
          <td><code>riderProfiles/</code></td>
          <td><code>riderProfilesDetail/</code></td>
          <td><code>orderDetailService.ts</code></td>
          <td><code>riderProfilesDetail/</code></td>
        </tr>
      </tbody>
    </table> */}

    <h2 id="shared-vs-feature">Shared vs Feature-Specific</h2>
    <p>
      <strong>Shared</strong> — ใช้ได้จากทุก feature ต้องไม่มี feature-specific logic:
    </p>
    <table>
      <thead>
        <tr>
          <th>Folder</th>
          <th>มีอะไร</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>components/layout/</code></td>
          <td>PageLayout, Drawer, AuthRoute, Dialog, Pagination</td>
        </tr>
        <tr>
          <td><code>components/table/</code></td>
          <td>CommonTable, SearchAndFilter, DateInput</td>
        </tr>
        <tr>
          <td><code>components/inputs/</code></td>
          <td>Selecter</td>
        </tr>
        <tr>
          <td><code>components/popup/</code></td>
          <td>ErrorPopup, SuccessPopup, WarningPopup, ConfirmPopup</td>
        </tr>
        <tr>
          <td><code>hooks/</code></td>
          <td>useAuth, useAutoRefresh, useDebounce, usePageActivity</td>
        </tr>
        <tr>
          <td><code>utils/</code></td>
          <td>formatDate, formatNumber, exportFile, jwtDecode, deepParseJson ฯลฯ</td>
        </tr>
      </tbody>
    </table>

    <p>
      <strong>Feature-Specific</strong> (<code>src/features/</code>) — Logic และ UI ที่ผูกกับ
      domain เฉพาะ ไม่ควรนำไปใช้ข้าม feature:
    </p>
    <pre>
      <code>{`features/
  jobManagement/        ← AssignRiderDialog, CustomerAndDriver, OrderDetails, Timeline
    orderHistory/
    orderTracking/
  login/                ← Login form + input components
  riderProfiles/        ← RiderProfilesTable, RiderProfilesHeader
  riderProfilesDetail/  ← detail-specific components`}</code>
    </pre>

    <h2 id="public-assets">Public Assets</h2>
    <p>
      ไฟล์ใน <code>public/icons/</code> reference ผ่าน absolute path จาก root —
      ห้าม import ผ่าน ES module:
    </p>
    <pre>
      <code>{`// ✅ ถูก — absolute path
<img src="/icons/shop.svg" alt="shop" width={16} />

// ❌ ผิด — ES module import จาก public/
import shopIcon from '../../public/icons/shop.svg'`}</code>
    </pre>

    {/* <h2 id="store-convention">Store Folder Convention</h2>
    <p>
      ทุก folder ใน <code>src/stores/&lt;domain&gt;/</code> ต้องมีแค่ 2 ไฟล์นี้เสมอ:
    </p>
    <pre>
      <code>{`<domain>/
  index.ts        ← export reducers สำหรับ rootReducer
  stateSlice.ts   ← createSlice definition`}</code>
    </pre> */}
  </DocLayout>
)

export default RepoStructurePage
