import type { FC } from 'react'
import DocLayout from '../components/DocLayout'
import type { TocItem } from '../components/Toc'
import type { PageId } from '../data/navigation'

type Props = { navigate: (page: PageId) => void }

const toc: TocItem[] = [
  { id: 'case-styles', label: 'Naming Case Styles', level: 2 },
  { id: 'file-naming', label: 'File Naming', level: 2 },
  { id: 'page-components', label: 'Page Components', level: 3 },
  { id: 'feature-components', label: 'Feature Components', level: 3 },
  { id: 'shared-ui', label: 'Shared UI Components', level: 3 },
  { id: 'hooks', label: 'Custom Hooks', level: 3 },
  { id: 'services', label: 'Services', level: 3 },
  { id: 'utilities', label: 'Utilities & Types', level: 3 },
  { id: 'folder-naming', label: 'Folder Naming', level: 2 },
  { id: 'component-naming', label: 'Component Naming', level: 2 },
  { id: 'hook-naming', label: 'Hook Naming', level: 2 },
  { id: 'service-naming', label: 'Service & API Naming', level: 2 },
]

const NamingPage: FC<Props> = ({ navigate }) => (
  <DocLayout
    title="Naming Convention"
    description="ช่วยให้เข้าใจโครงสร้างและ role ของแต่ละไฟล์/ตัวแปรได้ง่ายขึ้น ลดความสับสน และเพิ่มความสม่ำเสมอของ codebase"
    breadcrumb={['🏠', 'พื้นฐานโปรเจกต์', 'Naming Convention']}
    toc={toc}
    prev="repo-structure"
    next="formatting"
    navigate={navigate}
  >
    <blockquote>
      <strong>กลุ่มเป้าหมาย:</strong> นักพัฒนา Frontend ทุกคนในโปรเจกต์นี้
      <br />
      <strong>วัตถุประสงค์:</strong> เพื่อให้ code style มีความสม่ำเสมอ อ่านง่ายขึ้น ลดความสับสน และเพิ่มความสอดคล้องของ codebase
    </blockquote>

    <h2 id="case-styles">Naming Case Styles</h2>
    <p>ก่อนอ่าน convention ควรรู้จัก case style พื้นฐานที่ใช้ในโปรเจกต์:</p>
    <table>
      <thead>
        <tr>
          <th>Style</th>
          <th>รูปแบบ</th>
          <th>ตัวอย่าง</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <strong>PascalCase</strong>
          </td>
          <td>ทุกคำขึ้นต้นด้วยตัวพิมพ์ใหญ่ ไม่มีตัวคั่น</td>
          <td>
            <code>OrderHistoryListPage</code>, <code>RiderProfilesTable</code>
          </td>
        </tr>
        <tr>
          <td>
            <strong>camelCase</strong>
          </td>
          <td>คำแรกพิมพ์เล็ก คำถัดไปขึ้นต้นด้วยพิมพ์ใหญ่</td>
          <td>
            <code>orderHistory</code>, <code>handleSearchChange</code>
          </td>
        </tr>
        <tr>
          <td>
            <strong>SCREAMING_SNAKE_CASE</strong>
          </td>
          <td>ทุกตัวพิมพ์ใหญ่ คั่นด้วย underscore</td>
          <td>
            <code>COLORS</code>, <code>ORDER_STATUS</code>, <code>SEARCH_DEBOUNCE_MS</code>
          </td>
        </tr>
        <tr>
          <td>
            <strong>kebab-case</strong>
          </td>
          <td>ทุกตัวพิมพ์เล็ก คั่นด้วย hyphen</td>
          <td>
            <code>/app/order-history</code>, <code>order-history/data</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 id="file-naming">File Naming</h2>

    <h3 id="page-components">Page Components — PascalCase + suffix Page + .tsx</h3>
    <p>
      ไฟล์ที่เป็น Page component ให้เติม <code>Page</code> ต่อท้ายชื่อเสมอ เพื่อบ่งบอกว่าเป็น
      top-level route component
    </p>
    <pre>
      <code>{`{Domain}{Description}Page.tsx`}</code>
    </pre>
    <blockquote>
      เช่น <code>OrderHistoryListPage.tsx</code>, <code>OrderHistoryDetailPage.tsx</code>,{' '}
      <code>RiderProfilesPage.tsx</code>, <code>LoginPage.tsx</code>
    </blockquote>

    <h3 id="feature-components">Feature Components — PascalCase + .tsx</h3>
    <p>
      Feature component คือ component ที่มี business logic เฉพาะของ domain นั้น ๆ ใช้{' '}
      <strong>PascalCase</strong> และตั้งชื่อให้สื่อว่าเป็นส่วนใดของ feature
    </p>
    <pre>
      <code>{`{Domain}{Description}.tsx`}</code>
    </pre>
    <blockquote>
      เช่น <code>RiderProfilesTable.tsx</code>, <code>RiderProfilesHeader.tsx</code>,{' '}
      <code>AssignRiderDialog.tsx</code>
    </blockquote>

    <h3 id="shared-ui">Shared UI Components — PascalCase + .tsx</h3>
    <p>
      Shared component คือ component กลางที่ใช้ได้หลาย domain ไม่มี business logic ตั้งชื่อตาม UI
      role
    </p>
    <pre>
      <code>{`{UIRole}.tsx`}</code>
    </pre>
    <blockquote>
      เช่น <code>CommonTable.tsx</code>, <code>SearchAndFilter.tsx</code>,{' '}
      <code>PageLayout.tsx</code>, <code>ErrorPopup.tsx</code>, <code>Pagination.tsx</code>
    </blockquote>

    <h3 id="hooks">Custom Hooks — use prefix + camelCase + .ts</h3>
    <p>
      Hook ทุกตัวต้องขึ้นต้นด้วย <code>use</code> ตามด้วยชื่อใน <strong>camelCase</strong>
    </p>
    <pre>
      <code>{`use{Description}.ts`}</code>
    </pre>
    <blockquote>
      เช่น <code>useAutoRefresh.ts</code>, <code>useAuth.ts</code>, <code>useDebounce.ts</code>,{' '}
      <code>usePageActivity.ts</code>
    </blockquote>

    <h3 id="services">Services — camelCase + suffix Service + .ts</h3>
    <p>
      Service file คือไฟล์ที่รวม API call function ของแต่ละ domain ใช้ <strong>camelCase</strong>{' '}
      และเติม <code>Service</code> ต่อท้ายเสมอ
    </p>
    <pre>
      <code>{`{domain}Service.ts`}</code>
    </pre>
    <blockquote>
      เช่น <code>apiService.ts</code>, <code>authService.ts</code>,{' '}
      <code>orderHistoryService.ts</code>, <code>riderProfilesService.ts</code>
    </blockquote>

    <h3 id="utilities">Utilities, Interface & Constant Files</h3>
    <table>
      <thead>
        <tr>
          <th>ประเภท</th>
          <th>Pattern</th>
          <th>ตัวอย่าง</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Utilities</td>
          <td>
            <code>camelCase + .ts</code>
          </td>
          <td>
            <code>formatDate.ts</code>, <code>exportFile.ts</code>, <code>jwtDecode.ts</code>
          </td>
        </tr>
        <tr>
          <td>Interface / Type Files</td>
          <td>
            <code>camelCase + .ts</code>
          </td>
          <td>
            <code>orderHistory.ts</code>, <code>riderProfiles.ts</code>, <code>user.ts</code>
          </td>
        </tr>
        <tr>
          <td>Constant Files</td>
          <td>
            <code>camelCase + .constant.ts</code>
          </td>
          <td>
            <code>color.constant.ts</code>, <code>routes.constant.ts</code>,{' '}
            <code>status.constant.ts</code>
          </td>
        </tr>
        <tr>
          <td>Redux Slice Files</td>
          <td>
            <code>stateSlice.ts</code> + <code>index.ts</code> (fixed names)
          </td>
          <td>
            <code>stores/orderHistory/stateSlice.ts</code>
          </td>
        </tr>
      </tbody>
    </table>

    <h2 id="folder-naming">Folder Naming</h2>
    <p>
      Top-level <code>src/</code> folders ใช้ตัวพิมพ์เล็กทั้งหมด:
    </p>
    <pre>
      <code>{`src/
  assets/       ← รูป, icon, font
  components/   ← shared UI components
  configs/      ← app config, theme
  constants/    ← constant values
  features/     ← feature-specific components
  hooks/        ← custom hooks
  interfaces/   ← TypeScript types/interfaces
  pages/        ← route-level page components
  routes/       ← router config, loaders, guards
  services/     ← API services
  stores/       ← Redux store slices
  utils/        ← utility functions`}</code>
    </pre>
    <p>
      Sub-folder ภายใน domain/feature ใช้ <strong>camelCase</strong> เพราะชื่อ folder ตรงกับชื่อ
      domain ที่ใช้ใน codebase เช่น <code>orderHistory</code> ตรงกับ Redux slice, interface file,
      และ service ที่ใช้ชื่อเดียวกัน ทำให้ navigate โครงสร้างได้ง่ายขึ้น
    </p>
    <p>
      ยกเว้น sub-folder ใน <code>components/</code> ที่จัดตาม <strong>UI category</strong> (ไม่ใช่
      domain) ให้ใช้ตัวพิมพ์เล็กทั้งหมด เช่น <code>layout/</code>, <code>popup/</code> —
      เพราะ folder เหล่านี้ไม่ได้ผูกกับ domain ใดเป็นพิเศษ
    </p>
    <pre>
      <code>{`pages/
  orderHistory/       ← camelCase (domain name)
  orderTracking/
  riderProfiles/

components/
  layout/             ← lowercase (UI category ไม่ใช่ domain)
  popup/
  inputs/
  table/`}</code>
    </pre>
    <blockquote>
      หลักง่าย ๆ: ถามว่า folder นี้เป็น "domain" หรือ "UI category"?
      <br />
      domain → <strong>camelCase</strong> &nbsp;|&nbsp; UI category → <strong>lowercase</strong>
    </blockquote>

    <h2 id="component-naming">Component Naming</h2>
    <p>
      Component function ทุกตัวใช้ <strong>PascalCase</strong> และต้องตรงกับชื่อไฟล์เสมอ
    </p>
    <pre>
      <code>{`// Page component
export default function OrderHistoryListPage() { ... }

// Feature component
export default function RiderProfilesTable(props: RiderProfilesTableProps) { ... }

// Shared UI component
export const Selecter = (props: SelecterProps) => { ... }`}</code>
    </pre>
    <p>
      Props type ตั้งชื่อตาม pattern <code>{'{ComponentName}Props'}</code> และประกาศเป็น named{' '}
      <code>type</code> หรือ <code>interface</code> เหนือ component function เสมอ — ห้าม inline
      prop type
    </p>
    <pre>
      <code>{`// ✅ ถูก — named interface
interface RiderProfilesTableProps {
  data: RiderListItem[];
  onNameSort: () => void;
}

// ❌ ผิด — inline anonymous type
export default function RiderProfilesTable({
  data, onNameSort,
}: { data: RiderListItem[]; onNameSort: () => void }) { ... }`}</code>
    </pre>

    <h2 id="hook-naming">Hook Naming</h2>
    <p>
      Hook ทุกตัวต้องขึ้นต้นด้วย <code>use</code> ตามด้วยชื่อที่สื่อว่า hook นั้นทำอะไร
      Props type ของ hook ตั้งชื่อตาม pattern <code>{'{HookName}Props'}</code> เช่นเดียวกับ
      component
    </p>
    <p>
      Hook ที่รับ props หลายตัวให้ destructure จาก props object เดียว — ไม่รับเป็น positional
      argument แยก เพื่อให้ call site อ่านง่ายขึ้นและเพิ่ม prop ใหม่ได้โดยไม่กระทบ signature
    </p>
    <pre>
      <code>{`// useAutoRefresh.ts
type UseAutoRefreshProps = {
  fetchFn: () => void;
  interval: number;
  shouldRefresh: boolean;
};

export const useAutoRefresh = ({
  fetchFn, interval, shouldRefresh,
}: UseAutoRefreshProps) => { ... }

// useDebounce.ts — generic hook
export function useDebounce<T extends (...args: unknown[]) => void>(
  mainFunction: T,
  delay: number,
) { ... }`}</code>
    </pre>

    <h2 id="service-naming">Service & API Function Naming</h2>
    <p>Function ใน service file ตั้งชื่อโดยใช้ prefix ที่บ่งบอก role:</p>
    <table>
      <thead>
        <tr>
          <th>Prefix</th>
          <th>บ่งบอกว่า</th>
          <th>ตัวอย่าง</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>api</code>
          </td>
          <td>
           เรียก API โดยตรง คืนค่าเป็น <code>SuccessResponse&lt;T&gt;</code> ที่ยังไม่ผ่านการแปลงค่า
          </td>
          <td>
            <code>apiGetOrderHistoryList</code>, <code>apiUserLogin</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>get</code>
          </td>
          <td>ดึงข้อมูลและ return ข้อมูลที่ unwrap/transform แล้ว</td>
          <td>
            <code>getRiderList</code>, <code>getJobTypeOptions</code>
          </td>
        </tr>
        <tr>
          <td>
            <code>export</code>
          </td>
          <td>ดาวน์โหลดไฟล์ / blob operation</td>
          <td>
            <code>exportOrderHistoryList</code>, <code>exportRiderOrderList</code>
          </td>
        </tr>
      </tbody>
    </table>
  </DocLayout>
)

export default NamingPage
