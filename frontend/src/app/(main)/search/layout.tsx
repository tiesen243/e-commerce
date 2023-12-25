import Sidebar from '@/components/layout/side-bar'

const SearchLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <div className="grid grid-cols-1 gap-2 md:grid-cols-4">
    <Sidebar />
    <section className="order-last col-span-1 md:order-none md:col-span-3">{children}</section>
  </div>
)

export default SearchLayout
