import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import LanguageIcon from '@mui/icons-material/Language';
import { Badge } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import DoneIcon from '@mui/icons-material/Done';
import { useEffect, useState } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SettingsIcon from '@mui/icons-material/Settings';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import PersonIcon from '@mui/icons-material/Person';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import LockIcon from '@mui/icons-material/Lock';
import SignUp from './SinUp';
import { useNavigate } from 'react-router-dom';


const ordersData = [
  {
    img1: "https://mironcoder-hotash.netlify.app/images/product/07.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/08.webp",
    number: "+3",
    name: "Miron Mahumud",
    money: "$289.00",
    time: "Now",
    img: "https://mironcoder-hotash.netlify.app/images/avatar/01.webp",
    para: "lorem ipsum has been the in a very better",
    No: "3"
  },
  {
    img1: "	https://mironcoder-hotash.netlify.app/images/product/01.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/02.webp",
    number: "+1",
    name: "Thamina Bonny",
    money: "$78.00",
    time: "2m",
    img: "	https://mironcoder-hotash.netlify.app/images/avatar/02.webp",
    para: "lorem ipsum has been the in a very better",
    No: "1"

  },
  {
    img1: "https://mironcoder-hotash.netlify.app/images/product/09.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/09.webp",
    number: "+5",
    name: "Shikdar Ahmed",
    money: "$2,975.00",
    time: "1h",
    img: "https://mironcoder-hotash.netlify.app/images/avatar/03.webp",
    para: "lorem ipsum has been the in a very better",
    No: "9"

  },
  {
    img1: "	https://mironcoder-hotash.netlify.app/images/product/01.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/02.webp",
    number: "+1",
    name: "Lobonno Khan",
    money: "$96.00",
    time: "3d",
    img: "	https://mironcoder-hotash.netlify.app/images/avatar/04.webp",
    para: "lorem ipsum has been the in a very better"


  },
  {
    img1: "	https://mironcoder-hotash.netlify.app/images/product/01.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/02.webp",
    number: "+2",
    name: "Kamalesh Hasan",
    money: "$103.00",
    time: "1w",
    img: "	https://mironcoder-hotash.netlify.app/images/avatar/05.webp",
    para: "lorem ipsum has been the in a very better"

  },
  {
    img1: "	https://mironcoder-hotash.netlify.app/images/product/01.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/02.webp",
    number: "+3",
    name: "Rabeya Akthar",
    money: "$190.00",
    time: "2m",
    img: "https://mironcoder-hotash.netlify.app/images/avatar/06.webp",
    para: "lorem ipsum has been the in a very better"
  },
  {
    img1: "https://mironcoder-hotash.netlify.app/images/product/07.webp",
    img2: "https://mironcoder-hotash.netlify.app/images/product/08.webp",
    number: "+3",
    name: "Miron Mahumud",
    money: "$289.00",
    time: "Now",
    img: "https://mironcoder-hotash.netlify.app/images/avatar/01.webp",
    para: "lorem ipsum has been the in a very better",
  }
]

function Nav({ onToggleSidebar, onToggleDarkMode, darkMode }) {

  const navigate = useNavigate(); 
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const click = () => {
    setIsOpen((prev) => !prev);
    setOpen(false);
    setChatOpen(false);
    setProfileOpen(false);
  }

  const orders = () => {
    setOpen((prev) => !prev);
    setChatOpen(false)
    setProfileOpen(false)

  }

  const chat = () => {
    setChatOpen((prev) => !prev);
    setOpen(false)
    setIsOpen(false)
    setProfileOpen(false)

  }

  const profile = () => {
    setProfileOpen((prev) => !prev);
     setOpen(false);
    setChatOpen(false);
    setIsOpen(false)

  }

  return (
    <header className={`${darkMode ? 'dark-mode' : ''}`}>
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-lg-2 col-md-3 logo-section">
            <a href="/">
              <img src="https://mironcoder-hotash.netlify.app/images/logo.webp" alt="" />
              <span>hotash</span>
            </a>
          </div>
          <div className="col-xl-4 col-lg-6 col-md input-section">
            <button className='sidebar-menu-icon' onClick={onToggleSidebar}>
              <MenuIcon />
            </button>
            <div className='header-search'>
              <button>
                <SearchIcon />
              </button>
              <input type="text" placeholder='quick finding....' />
            </div>
          </div>
          <div className="col-xl col-lg col-md col-sm header-right">
            <div className="dropdown dark-icon">
              <button onClick={onToggleDarkMode}><LightModeIcon /></button>
            </div>
            <div className="dropdown language-icon">
              <button onClick={click}><LanguageIcon /></button>
              <div className={`drop-down-item ${isOpen ? 'open' : 'closed'}`}>
                <ul>
                  <li>
                    <img src="	https://mironcoder-hotash.netlify.app/images/flags/us.webp" alt="" />
                    <span>English</span>
                    <i><DoneIcon /></i>
                  </li>
                  <li>
                    <img src='https://mironcoder-hotash.netlify.app/images/flags/sa.webp'></img>
                    <span>china</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="dropdown shopping-icon">
              <button onClick={orders}>
                <Badge badgeContent={4} gap="20px" color="primary">
                  <ShoppingCartIcon color="action" />
                </Badge>
              </button>
              <div className={`orders-drop-down ${open ? 'open' : 'closed'}`}>
                <div className='head'>
                  <h4>Orders(12)</h4>
                  <div className='head-icon'>
                    <button><SettingsIcon /></button>
                  </div>
                </div>
                <ul>
                  {
                    ordersData.map((item, index) => (
                      <li key={index}>
                        <div className='orders-images'>
                          <img className='items' src={item.img1} alt="" />
                          <img className='items left ' src={item.img2} alt="" />
                          <span className='items left'>{item.number}</span>
                        </div>
                        <div className='text'>
                          <h4>{item.name}<span>  ~ {item.time}</span></h4>
                          <span>({item.money})total price</span>
                        </div>
                        <button><MoreVertIcon /></button>
                      </li>
                    ))
                  }
                  <button className='btn'>view all orders</button>
                </ul>
              </div>
            </div>
            <div className="dropdown chat-icon">
              <button onClick={chat}>
                <Badge badgeContent={4} color="primary">
                  <EmailIcon color="action" />
                </Badge>
              </button>
              <div className={`orders-drop-down message ${chatOpen ? 'open' : 'closed'}`}>
                <div className='head'>
                  <h4>Messages(23)</h4>
                  <div className='head-icon'>
                    <button><SettingsIcon /></button>
                  </div>
                </div>
                <ul>
                  {
                    ordersData.map((item, index) => (
                      <li key={index}>
                        <img src={item.img} alt="" />
                        <div className='text'>
                          <h4>{item.name}<span>  ~ {item.time}</span></h4>
                          <p className='para'>{item.para}</p>
                        </div>
                        <span className='chat-number'>{item.No}</span>
                        <button><MoreVertIcon /></button>
                      </li>
                    ))
                  }
                  <button className='btn'>view all Messages</button>
                </ul>
              </div>
            </div>
            <div className="dropdown notification-icon">
              <button>
                <Badge badgeContent={4} color="primary">
                  <NotificationsIcon color="action" />
                </Badge>
              </button>
            </div>
            <div className='profile-section'>
              <button onClick={profile} className="header-profile">
                <img src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                <div className='name'>
                  <h3 className='text-start'>{user?.name || "Guest" }</h3>
                  <p>{user?.email || "@guest123" }</p>
                </div>
              </button>
              <div className={`profile-drop-down ${profileOpen ? 'open' : 'closed'}`}>
                <div>
                  <button>
                    <i><PersonIcon /></i>
                    <span>My Account</span>
                  </button>
                  <button>
                    <i><PrivacyTipIcon/></i>
                     <span>Reset Password</span>
                  </button>
                  <button onClick={() => {
                    navigate('/login')
                    localStorage.removeItem("loggedInUser");
                   }}
                    style={{ color: "#FF304F" }}>
                    <i><LockIcon /></i>
                    <span>LogOut</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav;