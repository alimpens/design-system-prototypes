'use client'

import {
  Screen,
  Footer,
  VisuallyHidden,
  Heading,
  Grid,
  Column,
  Paragraph,
  PageMenu,
  Link,
  Header,
  SkipLink,
} from '@amsterdam/design-system-react'
import NextLink from 'next/link'

function Signalen({ children }) {
  return (
    <Screen className="ams-theme" maxWidth="wide">
      <Grid>
        <Grid.Cell span="all">
          <SkipLink href="#main">Direct naar inhoud</SkipLink>
          <Header
            logoLink="/design-system-prototypes/signalen" // TODO: je kunt hier geen Next Link gebruiken
            logoLinkTitle="Naar de homepage van Signalen Amsterdam"
            links={
              <PageMenu alignEnd>
                <NextLink href="/signalen/beschrijf" legacyBehavior passHref>
                  <PageMenu.Link href="/signalen/beschrijf">Doe een melding</PageMenu.Link>
                </NextLink>
                <PageMenu.Link href="#">Meldingenkaart</PageMenu.Link>
                <PageMenu.Link href="#">Mijn meldingen</PageMenu.Link>
                <NextLink legacyBehavior href="/" passHref>
                  <PageMenu.Link>Prototypes</PageMenu.Link>
                </NextLink>
              </PageMenu>
            }
          />
        </Grid.Cell>
      </Grid>
      <main id="main">{children}</main>
      <Footer>
        <Footer.Top>
          <VisuallyHidden>
            <Heading>Colofon</Heading>
          </VisuallyHidden>
          <Grid gapVertical="large" paddingVertical="medium">
            <Grid.Cell span={{ narrow: 3, medium: 4, wide: 4 }}>
              <Column as="section" gap="extra-small">
                <Heading level={2} size="level-4" inverseColor>
                  Contact
                </Heading>
                <Paragraph size="small" inverseColor>
                  Lukt het niet om een melding te doen? Bel het telefoonnummer{' '}
                  <Link href="tel:+3114020" onBackground="dark" variant="inline">
                    14 020
                  </Link>
                  .
                </Paragraph>
                <Paragraph size="small" inverseColor>
                  Wij zijn bereikbaar van maandag tot en met vrijdag van 08.00 tot 18.00 uur.
                </Paragraph>
              </Column>
            </Grid.Cell>
          </Grid>
        </Footer.Top>
        <Footer.Bottom>
          <VisuallyHidden>
            <Heading level={2}>Over deze website</Heading>
          </VisuallyHidden>
          <Grid paddingVertical="small">
            <Grid.Cell span="all">
              <PageMenu>
                <PageMenu.Link href="#">Over deze site</PageMenu.Link>
                <PageMenu.Link href="#">Privacy</PageMenu.Link>
                <PageMenu.Link href="#">Toegankelijkheid</PageMenu.Link>
              </PageMenu>
            </Grid.Cell>
          </Grid>
        </Footer.Bottom>
      </Footer>
    </Screen>
  )
}

export default Signalen
