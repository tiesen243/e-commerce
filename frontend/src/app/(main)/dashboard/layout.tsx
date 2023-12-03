import DashboardNav from './nav'

const DashboardLayout: React.FC<React.PropsWithChildren> = ({ children }) => (
  <>
    <DashboardNav />
    <div className="mx-auto w-full"> {children}</div>
  </>
)

export default DashboardLayout
