import { Grid, PageMenu } from '@amsterdam/design-system-react'
import { LoginIcon, MenuIcon, SearchIcon } from '@amsterdam/design-system-react-icons'

export const SiteHeader = () => (
  <Grid paddingVertical="small">
    <Grid.Cell fullWidth>
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'calc(var(--amsterdam-grid-gap ) * 4)' }}>
        <a href="#">
          <img
            src="https://geocraft.nl/wp-content/uploads/2018/10/logo-gemeente-amsterdam-700x219.png"
            height="40"
            alt=""
          />
        </a>
        <PageMenu className="amsterdam-header__page-menu">
          <PageMenu.Link className="amsterdam-show-from-wide" href="#" lang="en">
            English
          </PageMenu.Link>
          <PageMenu.Link className="amsterdam-show-from-wide" href="#">
            Contact
          </PageMenu.Link>
          <PageMenu.Link className="amsterdam-show-from-wide" href="#" icon={LoginIcon}>
            Mijn Amsterdam
          </PageMenu.Link>
          <PageMenu.Link className="amsterdam-show-from-wide" icon={SearchIcon}>
            Zoeken
          </PageMenu.Link>
          <PageMenu.Button icon={MenuIcon}>Menu</PageMenu.Button>
        </PageMenu>
      </div>
    </Grid.Cell>
  </Grid>
)
