import React from 'react'

function Header() {
  return (
    
    <header className="ltn__header-area ltn__header-3 section-bg-6---">   
        {/* <!-- ltn__header-top-area start --> */}
        {/* <div className="ltn__header-top-area border-bottom top-area-color-white---">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <div className="ltn__top-bar-menu">
                            <ul>
                                <li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail"></i> info@webmail.com</a></li>
                                <li><a href="locations.html"><i className="icon-placeholder"></i> 15/A, Nest Tower, NYC</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="top-bar-right text-end">
                            <div className="ltn__top-bar-menu"> */}
                                {/* <ul>
                                     <li>
                                        <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                            <ul>
                                                <li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
                                                    <ul>
                                                        <li><a href="#">Arabic</a></li>
                                                        <li><a href="#">Bengali</a></li>
                                                        <li><a href="#">Chinese</a></li>
                                                        <li><a href="#">English</a></li>
                                                        <li><a href="#">French</a></li>
                                                        <li><a href="#">Hindi</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </li> 
                                     <li> 
                                        <div className="ltn__social-media">
                                            <ul>
                                                <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                                <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                                
                                                <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                                <li><a href="#" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
                                            </ul>
                                        </div> 
                                     </li> 
                                </ul> */}
                            {/* </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
        {/* <!-- ltn__header-top-area end -->      */}
        {/* <!-- ltn__header-middle-area start --> */}
        <div className="ltn__header-middle-area">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo">
                            <a href="index.html"><img src="img/logo.png" alt="Logo"/></a>
                        </div>
                    </div>
                    <div className="col header-contact-serarch-column d-none d-xl-block">
                        <div className="header-contact-search">
                            {/* <!-- header-feature-item --> */}
                            <div className="header-feature-item d-none">
                                <div className="header-feature-icon">
                                    <i className="icon-phone"></i>
                                </div>
                                <div className="header-feature-info">
                                    <h6>Phone</h6>
                                    <p><a href="tel:0123456789">+0123-456-789</a></p>
                                </div>
                            </div>
                            {/* <!-- header-search-2 --> */}
                            <div className="header-search-2">
                                <form id="#123" method="get"  action="#">
                                    <input type="text" name="search" value="" placeholder="Search here..."/>
                                    <button type="submit">
                                        <span><i className="icon-search"></i></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        {/* <!-- header-options --> */}
                        <div className="ltn__header-options">
                            <ul>
                                <li className="d-none">
                                    {/* <!-- ltn__currency-menu --> */}
                                    <div className="ltn__drop-menu ltn__currency-menu">
                                        <ul>
                                            <li><a href="#" className="dropdown-toggle"><span className="active-currency">USD</span></a>
                                                <ul>
                                                    <li><a href="login.html">USD - US Dollar</a></li>
                                                    <li><a href="wishlist.html">CAD - Canada Dollar</a></li>
                                                    <li><a href="register.html">EUR - Euro</a></li>
                                                    <li><a href="account.html">GBP - British Pound</a></li>
                                                    <li><a href="wishlist.html">INR - Indian Rupee</a></li>
                                                    <li><a href="wishlist.html">BDT - Bangladesh Taka</a></li>
                                                    <li><a href="wishlist.html">JPY - Japan Yen</a></li>
                                                    <li><a href="wishlist.html">AUD - Australian Dollar</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="d-none--- ">
                                    {/* <!-- header-search-1 --> */}
                                    <div className="header-search-wrap d-block d-xl-none">
                                        <div className="header-search-1">
                                            <div className="search-icon">
                                                <i className="icon-search  for-search-show"></i>
                                                <i className="icon-cancel  for-search-close"></i>
                                            </div>
                                        </div>
                                        <div className="header-search-1-form">
                                            <form id="#" method="get"  action="#">
                                                <input type="text" name="search" value="" placeholder="Search here..."/>
                                                <button type="submit">
                                                    <span><i className="icon-search"></i></span>
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </li>
                                <li className="d-none---"> 
                                    {/* <!-- user-menu --> */}
                                    <div className="ltn__drop-menu user-menu">
                                        <ul>
                                            <li>
                                                <a href="#"><i className="icon-user"></i></a>
                                                <ul>
                                                    <li><a href="login.html">Sign in</a></li>
                                                    <li><a href="register.html">Register</a></li>
                                                    <li><a href="account.html">My Account</a></li>
                                                    <li><a href="wishlist.html">Wishlist</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li>
                                    {/* <!-- mini-cart 2 --> */}
                                    <div className="mini-cart-icon mini-cart-icon-2">
                                        <a href="#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                                            <span className="mini-cart-icon">
                                            <i class="fa fa-paperclip" aria-hidden="true"></i>
                                                <sup>2</sup>
                                            </span>
                                            <h6><span>Test Report</span></h6>
                                            {/* <span className="ltn__secondary-color">$89.25</span></h6> */}
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- ltn__header-middle-area end --> */}

        {/* <!-- MOBILE MENU START --> */}
        <div className="mobile-header-menu-fullwidth mb-20 d-block d-lg-none">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- Mobile Menu Button --> */}
                        <div className="mobile-menu-toggle d-lg-none">
                            <span>MENU</span>
                            <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top"></path>
                                    <path d="M300,320 L540,320" id="middle"></path>
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) "></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- MOBILE MENU END --> */}
        
        {/* <!-- header-bottom-area start --> */}
        <div  className="header-bottom-area ltn__border-top--- ltn__header-sticky  ltn__sticky-bg-white ltn__primary-bg---- menu-color-white---- d-none--- d-lg-block">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 align-self-center">
                        {/* <!-- CATEGORY-MENU-LIST START --> */}
                        <div  className="ltn__category-menu-wrap ltn__category-dropdown-hide ltn__category-menu-with-header-menu">
                            <div  className="ltn__category-menu-title">
                                <h2 className="section-bg-1--- ltn__secondary-bg text-color-white">categories</h2>
                            </div>
                            <div className="ltn__category-menu-toggle ltn__one-line-active">
                                <ul>
                                    {/* <!-- Submenu Column - unlimited --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Endocrinology </a>
                                        <ul className="ltn__category-submenu ltn__category-column-5">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches Clutches Clutches Clutches </a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fresh Meat</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Fish and Seafood</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu Column - 4 --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Hematology </a>
                                        <ul className="ltn__category-submenu ltn__category-column-4">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu Column - 3 --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Immunology</a>
                                        <ul className="ltn__category-submenu ltn__category-column-3">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu Column - 2 --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Pathology</a>
                                        <ul className="ltn__category-submenu ltn__category-column-2">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Clinical Biochemistry</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Serology</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Urinalysis</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Submenu --> */}
                                    <li className="ltn__category-menu-item ltn__category-menu-drop">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Microbiology</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    {/* <!-- Show more menu --> */}
                                    <li className="ltn__category-menu-more-item-child">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Parasitology</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="ltn__category-menu-more-item-child">
                                        <a href="shop.html"><i class="fa fa-flask" aria-hidden="true"></i>Virology</a>
                                        <ul className="ltn__category-submenu">
                                            <li className="ltn__category-submenu-title ltn__category-menu-drop"><a href="#">Handbags</a>
                                                <ul className="ltn__category-submenu-children">
                                                    <li><a href="#">Clutches</a></li>
                                                    <li><a href="#">Cross Body</a></li>
                                                    <li><a href="#">Satchels</a></li>
                                                    <li><a href="#">Sholuder</a></li>
                                                    <li><a href="#">Toter</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="ltn__category-menu-more-item-parent">
                                        <a className="rx-default">
                                            More categories <span className="cat-thumb  icon-plus"></span> 
                                        </a>
                                        <a className="rx-show">
                                            close menu <span className="cat-thumb  icon-remove"></span>
                                        </a>
                                    </li>
                                    {/* <!-- Single menu end --> */}
                                </ul>
                            </div>
                        </div>
                        {/* <!-- END CATEGORY-MENU-LIST --> */}
                    </div>
                    <div className="col-lg-7">
                        <div className="col--- header-menu-column justify-content-center---">
                            <div className="header-menu header-menu-2 text-start">
                                <nav>
                                    <div className="ltn__main-menu">
                                        <ul>
                                            <li className=""><a href="#">Home</a>
                                                
                                            </li>
                                            <li className=""><a href="#">Labs</a>
                                                
                                            </li>
                                            <li className=""><a href="#">Doctors</a>
                                                
                                            </li>
                                            <li className=""><a href="#">Test</a>
                                                <ul>
                                                    <li><a href="blog.html">News</a></li>
                                                    <li><a href="blog-grid.html">News Grid</a></li>
                                                    <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                                    <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                                    <li><a href="blog-details.html">News details</a></li>
                                                </ul>
                                            </li>
                                            <li className=""><a href="#">Packages</a>
                                                
                                            </li>
                                            <li><a href="contact.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-2 align-self-center d-none d-xl-block">
                        <div className="header-contact-info text-end">
                            <a className="font-weight-6 ltn__primary-color" href="tel:+123456789"><span className="ltn__secondary-color"><i className="icon-call font-weight-7"></i></span> +123-456-789-10</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <!-- header-bottom-area end --> */}

        {/* <!-- Utilize Cart Menu Start --> */}
    <div id="ltn__utilize-cart-menu" class="ltn__utilize ltn__utilize-cart-menu">
        <div class="ltn__utilize-menu-inner ltn__scrollbar">
            <div class="ltn__utilize-menu-head">
                <span class="ltn__utilize-menu-title">Cart</span>
                <button class="ltn__utilize-close">×</button>
            </div>
            <div class="mini-cart-product-area ltn__scrollbar">
                <div class="mini-cart-item clearfix">
                    <div class="mini-cart-img">
                        <a href="#"><img src="img/product/1.png" alt="Image"/></a>
                        <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                    </div>
                    <div class="mini-cart-info">
                        <h6><a href="#"> OptiGen Labs</a></h6>
                        <span class="mini-cart-quantity">1 x $65.00</span>
                    </div>
                </div>
                <div class="mini-cart-item clearfix">
                    <div class="mini-cart-img">
                        <a href="#"><img src="img/product/2.png" alt="Image"/></a>
                        <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                    </div>
                    <div class="mini-cart-info">
                        <h6><a href="#">Hyatt Labs</a></h6>
                        <span class="mini-cart-quantity">1 x $85.00</span>
                    </div>
                </div>
                <div class="mini-cart-item clearfix">
                    <div class="mini-cart-img">
                        <a href="#"><img src="img/product/3.png" alt="Image"/></a>
                        <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                    </div>
                    <div class="mini-cart-info">
                        <h6><a href="#">Cosmetic Containers</a></h6>
                        <span class="mini-cart-quantity">1 x $92.00</span>
                    </div>
                </div>
                <div class="mini-cart-item clearfix">
                    <div class="mini-cart-img">
                        <a href="#"><img src="img/product/4.png" alt="Image"/></a>
                        <span class="mini-cart-item-delete"><i class="icon-cancel"></i></span>
                    </div>
                    <div class="mini-cart-info">
                        <h6><a href="#">Thermometer Gun</a></h6>
                        <span class="mini-cart-quantity">1 x $68.00</span>
                    </div>
                </div>
            </div>
            <div class="mini-cart-footer">
                <div class="btn-wrapper">
                    <a style={{width:'100%'}} href="cart.html" class="theme-btn-1 btn btn-effect-1">View More</a>
                </div>
            </div>

        </div>
    </div>
    {/* <!-- Utilize Cart Menu End --> */}
        {/* <!-- Utilize Mobile Menu Start --> */}

        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
        <div className="ltn__utilize-menu-inner ltn__scrollbar">
            <div className="ltn__utilize-menu-head">
                <div className="site-logo">
                    <a href="index.html"><img src="img/logo.png" alt="Logo"/></a>
                </div>
                <button className="ltn__utilize-close">×</button>
            </div>
            <div className="ltn__utilize-menu-search-form">
                <form action="#">
                    <input type="text" placeholder="Search..."/>
                    <button><i className="fas fa-search"></i></button>
                </form>
            </div>
            <div className="ltn__utilize-menu">
                <ul>
                    <li><a href="#">Home</a>
                        <ul className="sub-menu">
                            <li><a href="index.html">Home Style 01</a></li>
                            <li><a href="index-2.html">Home Style 02</a></li>
                            <li><a href="index-3.html">Home Style 03</a></li>
                        </ul>
                    </li>
                    <li><a href="#">About</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Shop</a>
                        <ul className="sub-menu">
                            <li><a href="shop.html">Shop</a></li>
                            <li><a href="shop-grid.html">Shop Grid</a></li>
                            <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                            <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                            <li><a href="product-details.html">Shop details </a></li>
                            <li><a href="cart.html">Cart</a></li>
                            <li><a href="wishlist.html">Wishlist</a></li>
                            <li><a href="checkout.html">Checkout</a></li>
                            <li><a href="order-tracking.html">Order Tracking</a></li>
                            <li><a href="account.html">My Account</a></li>
                            <li><a href="login.html">Sign in</a></li>
                            <li><a href="register.html">Register</a></li>
                        </ul>
                    </li>
                    <li><a href="#">News</a>
                        <ul className="sub-menu">
                            <li><a href="blog.html">News</a></li>
                            <li><a href="blog-grid.html">News Grid</a></li>
                            <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                            <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                            <li><a href="blog-details.html">News details</a></li>
                        </ul>
                    </li>
                    <li><a href="#">Pages</a>
                        <ul className="sub-menu">
                            <li><a href="about.html">About</a></li>
                            <li><a href="service.html">Services</a></li>
                            <li><a href="service-details.html">Service Details</a></li>
                            <li><a href="portfolio.html">Portfolio</a></li>
                            <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                            <li><a href="portfolio-details.html">Portfolio Details</a></li>
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-details.html">Team Details</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                            <li><a href="history.html">History</a></li>
                            <li><a href="add-listing.html">Add Listing</a></li>
                            <li><a href="locations.html">Google Map Locations</a></li>
                            <li><a href="404.html">404</a></li>
                            <li><a href="contact.html">Contact</a></li>
                            <li><a href="coming-soon.html">Coming Soon</a></li>
                        </ul>
                    </li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
            <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                <ul>
                    <li>
                        <a href="account.html" title="My Account">
                            <span className="utilize-btn-icon">
                                <i className="far fa-user"></i>
                            </span>
                            My Account
                        </a>
                    </li>
                    <li>
                        <a href="wishlist.html" title="Wishlist">
                            <span className="utilize-btn-icon">
                                <i className="far fa-heart"></i>
                                <sup>3</sup>
                            </span>
                            Wishlist
                        </a>
                    </li>
                    <li>
                        <a href="cart.html" title="Shoping Cart">
                            <span className="utilize-btn-icon">
                                <i className="fas fa-shopping-cart"></i>
                                <sup>5</sup>
                            </span>
                            Shoping Cart
                        </a>
                    </li>
                </ul>
            </div>
            <div className="ltn__social-media-2">
                <ul>
                    <li><a href="#" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="#" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                    <li><a href="#" title="Linkedin"><i className="fab fa-linkedin"></i></a></li>
                    <li><a href="#" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>
    {/* <!-- Utilize Mobile Menu End --> */}

    <div className="ltn__utilize-overlay"></div>    
    </header>
    
  )
}

export default Header;