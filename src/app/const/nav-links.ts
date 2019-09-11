export const NAVIGATION_LINKS = {
    left: [
      {
        routerLink: '/',
        cssClass: 'nav-item nav-link',
        displayText: 'Home'
      },
      {
        routerLink: '/devices',
        cssClass: 'nav-item nav-link',
        displayText: 'Devices'
      },
      {
        routerLink: '/settings',
        cssClass: 'nav-item nav-link',
        displayText: 'Settings'
      },
      {
        routerLink: '/about',
        cssClass: 'nav-item nav-link',
        displayText: 'About-us'
      }
    ],
    right: [
      {
        routerLink: '/login',
        cssClass: 'nav-item nav-link',
        displayText: 'Login/Signup',
        unAuthenticatedOnly: true
      },
      {
        routerLink: '/logout',
        cssClass: 'nav-item nav-link',
        displayText: 'Logout',
        unAuthenticatedOnly: true
      }
    ]
  }