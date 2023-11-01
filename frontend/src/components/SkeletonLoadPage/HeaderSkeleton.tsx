import { AppBar, Avatar, Container, Skeleton, Toolbar, Typography } from '@mui/material'

import { logo } from '@/lib'

const HeaderSkeleton = () => (
  <AppBar position="sticky">
    <Container maxWidth="lg">
      <Toolbar disableGutters className="flex justify-between gap-2 py-1">
        <Skeleton variant="rounded" className="icon-btn w-[42px] h-[42px] my-2 flex md:hidden" />

        <section className="flex items-center">
          <section className="flex items-center gap-2">
            <Avatar alt="Logo" src={logo} sx={{ width: 32, height: 32 }} />
            <Typography variant="h6" component="div" className="font-bold block md:hidden lg:block">
              {process.env.NEXT_PUBLIC_SITE_NAME}
            </Typography>
          </section>

          <section className="hidden ml-2 gap-6 text-sm md:flex md:items-center">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} variant="rectangular" className="w-[75px] h-11 aspect-square" />
            ))}
          </section>
        </section>

        <Skeleton variant="rounded" className="hidden md:block flex-grow h-[56px] border my-2" />

        <Skeleton variant="circular" className="w-11 h-11 ml-6" />
      </Toolbar>
    </Container>
  </AppBar>
)

export default HeaderSkeleton
