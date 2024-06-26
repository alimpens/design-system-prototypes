'use client'

import { Screen, Grid, PageHeading, Heading, LinkList } from '@amsterdam/design-system-react'
import Link from 'next/link'

export default function Page() {
  return (
    <Screen className="ams-theme" maxWidth="wide">
      <Grid paddingVertical="large">
        <Grid.Cell span="all">
          <PageHeading>Prototypes</PageHeading>
          <Heading level={2} size="level-4" className="ams-mb--md">
            Amsterdam Design System
          </Heading>
          <LinkList>
            <Link legacyBehavior href="/amopis" passHref>
              <LinkList.Link href="/amopis">Amopis</LinkList.Link>
            </Link>
            <Link legacyBehavior href="/amsterdam" passHref>
              <LinkList.Link href="/amsterdam">Amsterdam</LinkList.Link>
            </Link>
            <Link legacyBehavior href="/signalen" passHref>
              <LinkList.Link href="/signalen">Signalen</LinkList.Link>
            </Link>
          </LinkList>
        </Grid.Cell>
      </Grid>
    </Screen>
  )
}
