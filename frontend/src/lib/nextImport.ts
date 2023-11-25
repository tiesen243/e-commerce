import dynamic from 'next/dynamic'

const nextImport = (comp: string) =>
  dynamic(
    () =>
      import('@/components/ui').then((mod: any) => mod[comp]) as Promise<React.FC<any>>,
    {
      ssr: false,
    }
  )

export default nextImport
