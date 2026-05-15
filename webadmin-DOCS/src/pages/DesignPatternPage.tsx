import type { FC } from 'react'
import DocLayout from '../components/DocLayout'
import type { TocItem } from '../components/Toc'
import type { PageId } from '../data/navigation'

type Props = { navigate: (page: PageId) => void }

const toc: TocItem[] = [
  { id: 'component-pattern', label: 'Component Pattern', level: 2 },
  { id: 'component-layers', label: 'Component Layers', level: 3 },
  { id: 'component-design-principles', label: 'Design Principles', level: 3 },
  { id: 'page-layout', label: 'ตัวอย่าง: PageLayout', level: 3 },
  { id: 'global-pagination', label: 'ตัวอย่าง: GlobalPagination', level: 3 },
  { id: 'common-table', label: 'ตัวอย่าง: CommonTable', level: 3 },
  { id: 'popup', label: 'Popup Components', level: 3 },
  { id: 'service-pattern', label: 'Service Pattern', level: 2 },
  { id: 'http-stack', label: 'HTTP Stack', level: 3 },
  { id: 'domain-service', label: 'Domain Service', level: 3 },
  { id: 'hook-pattern', label: 'Hook Pattern', level: 2 },
  { id: 'redux-hooks', label: 'useAppDispatch / useAppSelector', level: 3 },
  { id: 'use-debounce', label: 'useDebounce', level: 3 },
  { id: 'use-auto-refresh', label: 'useAutoRefresh', level: 3 },
]

const DesignPatternPage: FC<Props> = ({ navigate }) => (
  <DocLayout
    title="Design Pattern"
    description="รวบรวม pattern หลักที่ใช้ซ้ำทั่วทั้งโปรเจกต์ — สำหรับใช้เป็น reference เมื่อต้องสร้าง feature ใหม่"
    breadcrumb={['🏠', 'พื้นฐานโปรเจกต์', 'Design Pattern']}
    toc={toc}
    prev="formatting"
    navigate={navigate}
  >
    <h2 id="component-pattern">1. Component Pattern</h2>
    <p>
      โปรเจกต์แบ่ง component ออกเป็น 3 layer ที่มีหน้าที่ชัดเจน ก่อนสร้าง component ใหม่ควรถามว่า
      "component นี้ควรอยู่ layer ไหน?" เพราะตำแหน่งที่วางกำหนดว่า component นั้นจะมี
      dependency อะไรได้บ้าง
    </p>

    <h3 id="component-layers">1.1 Component Layers</h3>
    <table>
      <thead>
        <tr>
          <th>Layer</th>
          <th>ที่อยู่</th>
          <th>รู้จักอะไร</th>
          <th>ตัวอย่าง</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Page</strong></td>
          <td><code>src/pages/</code></td>
          <td>Redux, routing, API call, business logic ทั้งหมด</td>
          <td><code>OrderHistoryListPage</code></td>
        </tr>
        <tr>
          <td><strong>Feature</strong></td>
          <td><code>src/features/</code></td>
          <td>รู้จัก domain type และ business rule ของ feature นั้น</td>
          <td><code>RiderProfilesTable</code>, <code>AssignRiderDialog</code></td>
        </tr>
        <tr>
          <td><strong>Shared</strong></td>
          <td><code>src/components/</code></td>
          <td>ไม่รู้จัก domain ใด รับแค่ data และ callback ผ่าน props</td>
          <td><code>CommonTable</code>, <code>GlobalPagination</code>, <code>PageLayout</code></td>
        </tr>
      </tbody>
    </table>
    <blockquote>
      กฎเหล็ก: <strong>Shared component ห้ามรู้จัก feature-specific type</strong> — ถ้า{' '}
      <code>CommonTable</code> รู้จัก <code>RiderListItem</code> แปลว่า design ผิดแล้ว
    </blockquote>

    <h3 id="component-design-principles">1.2 Design Principles</h3>
    <p>หลักการออกแบบ component ให้ reusable และ maintain ได้ง่าย:</p>
    <table>
      <thead>
        <tr>
          <th>หลักการ</th>
          <th>ความหมาย</th>
          <th>ผลที่ได้</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Single Responsibility</strong></td>
          <td>
            component ทำหน้าที่เดียว เช่น <code>GlobalPagination</code> รู้แค่ page index/size
            ไม่รู้ว่า data ข้างบนเป็นอะไร
          </td>
          <td>นำกลับมาใช้ใหม่ได้โดยไม่ต้องแก้ component</td>
        </tr>
        <tr>
          <td><strong>Prop-driven</strong></td>
          <td>
            state ทั้งหมดอยู่ที่ parent — component รับผ่าน props และคืน event ผ่าน callback ไม่
            fetch data เอง
          </td>
          <td>ทดสอบง่าย, ไม่มี side effect ซ่อน</td>
        </tr>
        <tr>
          <td><strong>Generic over Specific</strong></td>
          <td>
            ถ้า logic เหมือนกันหลาย feature ให้ใช้ generic type เช่น{' '}
            <code>{'CommonTable<T>'}</code> แทน <code>RiderTable</code>, <code>OrderTable</code>{' '}
            แยกกัน
          </td>
          <td>แก้ bug ที่เดียว fix ทุก feature</td>
        </tr>
        <tr>
          <td><strong>Composition over Config</strong></td>
          <td>
            แทนที่จะใส่ <code>if</code> สำหรับทุก use case ให้รับ <code>ReactNode</code> ผ่าน
            props เช่น <code>options</code> prop ของ <code>PageLayout</code>
          </td>
          <td>ไม่ต้องแก้ shared component เมื่อ feature ใหม่มีความต้องการแปลกออกไป</td>
        </tr>
      </tbody>
    </table>

    <h3 id="page-layout">1.3 ตัวอย่าง: PageLayout — Composition over Config</h3>
    <p>
      <code>PageLayout</code> เป็นตัวอย่างของ <strong>Composition over Config</strong> — แทนที่จะ
      hardcode ปุ่ม Export หรือ title ทุกรูปแบบไว้ใน component ให้รับ <code>options</code> เป็น{' '}
      <code>ReactNode</code> ทำให้แต่ละ page ใส่อะไรก็ได้โดยไม่ต้องแก้ <code>PageLayout</code>
    </p>
    <p>
      ทุก page ภายใต้ <code>/app</code> ต้อง wrap ด้วย <code>&lt;PageLayout&gt;</code> เสมอ —
      ไม่สร้าง header หรือ breadcrumb เอง เพราะจะทำให้ layout ไม่สอดคล้องกัน
    </p>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>ใช้งาน</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>paths</code>
          </td>
          <td>object</td>
          <td>กำหนด breadcrumb navigation</td>
        </tr>
        <tr>
          <td>
            <code>title</code>
          </td>
          <td>string</td>
          <td>
            ชื่อหน้า (แสดงเป็น <code>&lt;h1&gt;</code>)
          </td>
        </tr>
        <tr>
          <td>
            <code>options</code>
          </td>
          <td>ReactNode</td>
          <td>แสดงขวาบนของ title — ใส่ปุ่มหรือ element อะไรก็ได้ (Composition)</td>
        </tr>
        <tr>
          <td>
            <code>openarrowback</code>
          </td>
          <td>boolean</td>
          <td>แสดงปุ่ม Back (ใช้ใน detail page)</td>
        </tr>
      </tbody>
    </table>
    <pre>
      <code>{`const path = {
  nav: [{ name: "Rider Management", path: "" }],
  urlHere: "Rider Profiles",
};

<PageLayout
  paths={path}
  title="Rider Profiles"
  options={<Button onClick={handleExport}>Export</Button>}
>
  {/* content */}
</PageLayout>`}</code>
    </pre>

    {/* <h3 id="common-table">1.2 CommonTable — Generic Table Component</h3>
    <p>
      <code>CommonTable&lt;T&gt;</code> เป็น generic component รับ type ของข้อมูลแต่ละแถว
      ไม่รู้จัก business logic ใด ๆ รับแค่ <code>columns</code> definition และ <code>data</code>{' '}
      array
    </p>
    <pre>
      <code>{`// Column definition
export interface ColumnDef<T> {
  id: string;
  label: React.ReactNode;
  width?: string | number;
  align?: "left" | "center" | "right";
  accessor?: keyof T;
  renderCell?: (item: T, index: number) => React.ReactNode;
  sortable?: boolean;
  onSort?: () => void;
}

// Usage
const columns: ColumnDef<RiderListItem>[] = [
  { id: "name", label: "Name", accessor: "name" },
  {
    id: "status",
    label: "Status",
    renderCell: (item) => <Chip>{item.status}</Chip>,
  },
];

<CommonTable
  columns={columns}
  data={riders}
  isLoading={isLoading}
  pagination={{
    page: pageIndex,
    pageSize: pageSize,
    total: total,
    onPageChange: (page) => dispatch(setPageIndex(page)),
    onPageSizeChange: (size) => dispatch(setPageSize(size)),
  }}
/>`}</code>
    </pre>
    <blockquote>
      ถ้า <code>data</code> ว่าง และ <code>isLoading</code> เป็น <code>false</code> → แสดง "No
      items found" ถ้าไม่ส่ง <code>pagination</code> prop → ไม่แสดง pagination
    </blockquote>

    <h3 id="search-filter">1.3 SearchAndFilter — Search + Filter Bar</h3>
    <p>
      Component กลางสำหรับ search input, dropdown filter, และ date range picker — ทุก prop เป็น
      optional
    </p>
    <pre>
      <code>{`<SearchAndFilter
  // Search
  searchValue={search}
  onSearchChange={(val) => dispatch(setSearchKeyword(val))}
  searchPlaceholder="Search by Order ID"

  // Dropdown filter
  filterTitle="Job Type"
  filterOptions={jobTypeOptions}
  filterValue={jobTypeFilter}
  onFilterChange={(val) => dispatch(setJobTypeFilter(val))}

  // Date range
  showDateRange
  startDate={startDate}
  endDate={endDate}
  onStartDateChange={setStartDate}
  onEndDateChange={setEndDate}

  // Action button (มุมขวา)
  actionButton={<Button onClick={handleExport}>Export</Button>}
/>`}</code>
    </pre> */}

    <h3 id="global-pagination">1.4 ตัวอย่าง: GlobalPagination — Prop-driven + Single Responsibility</h3>
    <p>
      <code>GlobalPagination</code> ไม่รู้ว่า data ข้างบนคืออะไร รู้แค่{' '}
      <code>totalItems</code>, <code>pageIndex</code>, <code>pageSize</code> และเรียก callback
      เมื่อ user กดเปลี่ยนหน้า state ทั้งหมดอยู่ที่ parent (Redux)
    </p>
    <table>
      <thead>
        <tr>
          <th>Prop</th>
          <th>Type</th>
          <th>ใช้งาน</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>totalItems</code></td>
          <td>number</td>
          <td>จำนวน record ทั้งหมด (จาก API)</td>
        </tr>
        <tr>
          <td><code>pageIndex</code></td>
          <td>number</td>
          <td>หน้าปัจจุบัน (0-based)</td>
        </tr>
        <tr>
          <td><code>pageSize</code></td>
          <td>number | null</td>
          <td>จำนวน row ต่อหน้า — <code>null</code> = แสดงทั้งหมด</td>
        </tr>
        <tr>
          <td><code>onPageChange</code></td>
          <td>(index: number) =&gt; void</td>
          <td>callback เมื่อเปลี่ยนหน้า</td>
        </tr>
        <tr>
          <td><code>onPageSizeChange</code></td>
          <td>(size: number) =&gt; void</td>
          <td>callback เมื่อเปลี่ยน page size</td>
        </tr>
        <tr>
          <td><code>hideRowsPerPage</code></td>
          <td>boolean</td>
          <td>ซ่อน dropdown เลือก page size</td>
        </tr>
        <tr>
          <td><code>disabled</code></td>
          <td>boolean</td>
          <td>disable ทุกปุ่มขณะ loading</td>
        </tr>
      </tbody>
    </table>
    <pre>
      <code>{`<GlobalPagination
  totalItems={totalItems}
  pageIndex={pageIndex}
  pageSize={pageSize}
  onPageChange={(page) => dispatch(setPageIndex(page))}
  onPageSizeChange={(size) => dispatch(setPageSize(size))}
  disabled={isLoading}
/>`}</code>
    </pre>
    <blockquote>
      <code>pageIndex</code> เป็น 0-based — หน้าแรกคือ <code>0</code> ไม่ใช่ <code>1</code>
    </blockquote>

    <h3 id="common-table">1.5 ตัวอย่าง: CommonTable — Generic over Specific</h3>
    <p>
      <code>{'CommonTable<T>'}</code> ใช้ generic type <code>T</code>
      ทำให้ component ไม่รู้จัก domain ใดเลย — caller ที่อยู่ feature layer รับผิดชอบกำหนด{' '}
      column definition เอง แก้ bug ที่ <code>CommonTable</code> ที่เดียวแก้ได้ทุก feature
    </p>
    <pre>
      <code>{`// ColumnDef<T> — caller กำหนดเองว่าแต่ละ column แสดงอะไร
export interface ColumnDef<T> {
  id: string;
  label: React.ReactNode;
  accessor?: keyof T;                                        // ดึง value ตรง ๆ
  renderCell?: (item: T, index: number) => React.ReactNode; // หรือ custom render
  sortable?: boolean;
  onSort?: () => void;
}

// Feature layer กำหนด columns — CommonTable ไม่รู้จัก RiderListItem
const columns: ColumnDef<RiderListItem>[] = [
  { id: "name", label: "Name", accessor: "name" },
  {
    id: "status",
    label: "Status",
    renderCell: (item) => <StatusChip status={item.status} />,
  },
];

<CommonTable
  columns={columns}
  data={riders}
  isLoading={isLoading}
  pagination={{
    page: pageIndex,
    pageSize: pageSize,
    total: total,
    onPageChange: (page) => dispatch(setPageIndex(page)),
    onPageSizeChange: (size) => dispatch(setPageSize(size)),
  }}
/>`}</code>
    </pre>
    <blockquote>
      ถ้าไม่ส่ง <code>pagination</code> prop → ไม่แสดง pagination —
      ใช้ได้กับ list ที่ไม่ต้อง paginate
    </blockquote>

    {/* <h3 id="popup">1.6 Popup Components</h3>
    <table>
      <thead>
        <tr>
          <th>Component</th>
          <th>ใช้เมื่อ</th>
          <th>Auto-close</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <code>ErrorPopup</code>
          </td>
          <td>API error, validation error</td>
          <td>✅ 2 วินาที (ปรับได้)</td>
        </tr>
        <tr>
          <td>
            <code>SuccessPopup</code>
          </td>
          <td>บันทึกสำเร็จ, action สำเร็จ</td>
          <td>✅</td>
        </tr>
        <tr>
          <td>
            <code>WarningPopup</code>
          </td>
          <td>แจ้งเตือนก่อนดำเนินการ</td>
          <td>❌</td>
        </tr>
        <tr>
          <td>
            <code>ConfirmPopup</code>
          </td>
          <td>ยืนยันการกระทำที่ย้อนกลับไม่ได้</td>
          <td>❌</td>
        </tr>
      </tbody>
    </table>
    <pre>
      <code>{`// ErrorPopup — pattern ที่ใช้ทุกหน้า
const [errorPopupOpen, setErrorPopupOpen] = useState(false);
const [errorMessage, setErrorMessage] = useState("");

<ErrorPopup
  open={errorPopupOpen}
  onClose={() => setErrorPopupOpen(false)}
  title={errorMessage}
/>

// ConfirmPopup — pattern สำหรับ destructive action
<ConfirmPopup
  open={confirmOpen}
  title="ยืนยันการลบ?"
  onConfirm={handleDelete}
  onClose={() => setConfirmOpen(false)}
  loading={isDeleting}
  confirmText="Delete"
  cancelText="Cancel"
>
  การกระทำนี้ไม่สามารถย้อนกลับได้
</ConfirmPopup>`}</code>
    </pre> */}

    <h2 id="service-pattern">2. Service Pattern</h2>
    <p>
      ทุก API call ต้องผ่าน layer ที่กำหนดไว้ — ห้าม call ตรงจาก component
      เพื่อให้ logic การเรียก API อยู่ที่เดียว แก้ไขได้ง่าย และ testable
    </p>

    <h3 id="http-stack">2.1 HTTP Stack</h3>
    <p>
      การเรียก API ไหลผ่าน 4 ชั้นเสมอ — แต่ละชั้นมีหน้าที่ชัดเจนและไม่ข้ามชั้น
      ทำให้ง่ายต่อการ mock ในการทดสอบและเปลี่ยน HTTP client ในอนาคตโดยไม่กระทบ business logic
    </p>
    <pre>
      <code>{`Component / Page
    ↓ calls
Domain Service  (e.g. riderProfilesService.ts)
    ↓ calls
apiService.fetchData<T>()
    ↓ calls
httpClientService  (axios instance)
    ↓
API Server`}</code>
    </pre>
    <blockquote>
      ห้าม เรียก <code>httpClientService</code> หรือ <code>axios</code> โดยตรงจาก component
      <br />
      ห้าม import <code>httpClientService</code> นอก <code>src/services/</code>
    </blockquote>

    <h3 id="domain-service">2.2 Domain Service — รูปแบบการเขียน</h3>
    <p>
      แต่ละ domain มี service file ของตัวเอง (เช่น <code>riderProfilesService.ts</code>)
      ชื่อ function บอก intent ชัดเจนด้วย prefix —{' '}
      <code>api*</code> คืน raw response, <code>get*</code> คืน unwrapped data, <code>export*</code> คืน Blob สำหรับ download
    </p>
    <pre>
      <code>{`// riderProfilesService.ts

// api prefix → คืน SuccessResponse<T> ที่ยังไม่ผ่านการแปลงค่า
export const apiGetRiderList = async (
  params: GetRiderListParams,
): Promise<SuccessResponse<GetRiderListResponse>> => {
  return apiService.fetchData<GetRiderListResponse>({
    url: "/api/v1/backoffice/riders",
    method: "get",
    params: { ...params },
    signal: params.signal,
  });
};

// get prefix → unwrap แล้วคืน data ตรง ๆ
export const getRiderList = async (params) => {
  const res = await apiService.fetchData<GetRiderListResponse>({ ... });
  return res.data;
};

// export prefix → file download
export const exportRiderOrderList = async (params) => {
  return apiService.fetchData<Blob>({
    url: "/api/v1/backoffice/riders/export",
    method: "get",
    responseType: "blob",
    params: { ... },
  });
};`}</code>
    </pre>
    <p>Response shape ที่ใช้ทั่วโปรเจกต์:</p>
    <pre>
      <code>{`interface SuccessResponse<T> {
  data: T;
  status: number;
  message: string;
  headers?: { "content-disposition"?: string };
}

interface ErrorResponseProps {
  status: number;
  code: string;
  message: string;
  title: string;
}`}</code>
    </pre>

    <h2 id="hook-pattern">3. Hook Pattern</h2>
    <p>
      Custom hook ที่ใช้ซ้ำทั่วโปรเจกต์ — แต่ละ hook มีหน้าที่เดียวและไม่ผูกกับ domain ใด
      ช่วยลด boilerplate และทำให้ component อ่านง่ายขึ้น
    </p>

    <h3 id="redux-hooks">3.1 useAppDispatch / useAppSelector — Typed Redux Hooks</h3>
    <p>
      ห้ามใช้ <code>useDispatch</code> / <code>useSelector</code> ดิบ — ใช้ typed version จาก{' '}
      <code>src/stores/hooks.ts</code> เสมอ
    </p>
    <pre>
      <code>{`// src/stores/hooks.ts
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Usage in component
const dispatch = useAppDispatch();
const { riders, pageIndex } = useAppSelector(
  (state) => state.riderProfiles.riderList,
);`}</code>
    </pre>

    <h3 id="use-debounce">3.2 useDebounce — Debounce Search Input</h3>
    <p>
      ป้องกัน API call ถี่เกินไปเมื่อ user พิมพ์ใน search box ใช้ <code>useRef</code> เพื่อไม่ให้
      debounced function สร้างใหม่ทุก render
    </p>
    <pre>
      <code>{`const SEARCH_DEBOUNCE_MS = 1000;

const createdDebouncedSearch = useDebounce((value: string) => {
  dispatch(setSearchKeyword(value));
  dispatch(setPageIndex(1));
}, SEARCH_DEBOUNCE_MS);
const debouncedSearchRef = useRef(createdDebouncedSearch);
const debouncedSearch = debouncedSearchRef.current;

const handleSearchChange = useCallback((value: string) => {
  setTempSearchValue(value);  // update local state ทันที
  debouncedSearch(value);     // dispatch หลัง debounce
}, [debouncedSearch]);`}</code>
    </pre>

    <h3 id="use-auto-refresh">3.3 useAutoRefresh — Polling / Auto Refresh</h3>
    <p>
      ใช้ใน real-time page เช่น Order Tracking หยุด refresh อัตโนมัติเมื่อ{' '}
      <code>shouldRefresh</code> เป็น <code>false</code> หรือ user idle
    </p>
    <pre>
      <code>{`type UseAutoRefreshProps = {
  fetchFn: () => void;
  interval: number;
  shouldRefresh: boolean;
  idle: boolean;
};

export const useAutoRefresh = ({
  fetchFn,
  interval,
  shouldRefresh,
  idle,
}: UseAutoRefreshProps) => {
  useEffect(() => {
    if (!shouldRefresh || idle) return;
    const id = setInterval(fetchFn, interval);
    return () => clearInterval(id);
  }, [fetchFn, interval, shouldRefresh, idle]);
};`}</code>
    </pre>
  </DocLayout>
)

export default DesignPatternPage
