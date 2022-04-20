import Logo from './Instagram_logo.png';
const Nav = () => `
  <nav>
    <a href="#" class="logo">
                    <img src=${Logo} alt="logo">
    </a>
    <input type="text" class="search" placeholder="Search">
    <span class="nav-links">
         <a href="#"><i class="fas fa-home"></i></a>
         <a href="#"><i class="fad fa-location-arrow"></i></a>
         <a href="#"><i class="fal fa-plus-square"></i></a>
         <a href="#"><i class="fal fa-compass"></i></a>
         <a href="#"><i class="fal fa-heart-circle"></i></a>
    </span>
  </nav>
`
export default Nav;