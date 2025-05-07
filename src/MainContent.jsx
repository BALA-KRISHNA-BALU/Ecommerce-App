import DashboardIcon from '@mui/icons-material/Dashboard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PixIcon from '@mui/icons-material/Pix';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import EmailIcon from '@mui/icons-material/Email';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import ClassIcon from '@mui/icons-material/Class';
import ArticleIcon from '@mui/icons-material/Article';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import HotelClassIcon from '@mui/icons-material/HotelClass';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import CasesIcon from '@mui/icons-material/Cases';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import LayersIcon from '@mui/icons-material/Layers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import RevenueChart from './RevenueChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import ErrorIcon from '@mui/icons-material/Error';
import PendingIcon from '@mui/icons-material/Pending';

import TotalSalesCard from './TotalSalesCard';
import OrdersChart from './OrdersChart';
import ClientsTable from './ClinetsTable';
// import DataTable from './SellingProducts';



const ecommerceData = [
  {
    title: "Total Users",
    value: "277",
    icon: <AccountCircleIcon />,
    iconBg: "linear-gradient(#27bf68, #1a9f53)",
    iconColor: "#89ecb3",
    trendIcon: <TrendingUpIcon />,
    trendingIconColor: "#1a9f53",
    change: "+95%",
    darkColor: "#187d44",
    note: "Last Month",
    bg: "linear-gradient(270deg, #4eda89, #1a9f53)"
  },
  {
    title: "Total Orders",
    value: "338",
    icon: <ShoppingCartIcon />,
    iconBg: "linear-gradient(#de2fff, #be0ee1)",
    iconColor: "#f3a0ff",
    trendIcon: <TrendingDownIcon />,
    trendingIconColor: "#be0ee1",
    change: "+30%",
    darkColor: "#a808c3",
    note: "Last Month",
    bg: "linear-gradient(270deg, #ed68ff, #be0ee1)"
  },
  {
    title: "Total Products",
    value: "557",
    icon: <ShoppingBagIcon />,
    iconBg: "linear-gradient(#4094f1, #2b77e5)",
    iconColor: "#96cefa",
    trendIcon: <TrendingDownIcon />,
    trendingIconColor: "#2b77e5",
    change: "+25%",
    darkColor: "#2262d3",
    note: "Last Month",
    bg: "linear-gradient(270deg, #64b3f6, #2b77e5)"
  },
  {
    title: "Total Reviews",
    value: "166",
    icon: <HotelClassIcon />,
    iconBg: "linear-gradient(#edb213, #e1940e)",
    iconColor: "#f6e053",
    trendIcon: <TrendingUpIcon />,
    trendingIconColor: "#e1940e",
    change: "+45%",
    darkColor: "#ae640f",
    note: "Last Month",
    bg: "linear-gradient(270deg, #f4d02b, #e1940e)"
  }
];

const revenueData = [
  {
    icon: <CasesIcon />,
    title: "invested",
    money: "3,387.67k",
    color: "#0858f7",

  },
  {
    icon: <BookmarksIcon />,
    title: "earnings",
    money: "2,856.35k",
    color: "#1a9f53",

  },
  {
    icon: <LayersIcon />,
    title: "expenses",
    money: "1,994.12k",
    color: "#be0ee1",

  }
]

const ordersData = [
  {
    icon: <PendingIcon />,
    content: "Pending",
    money: "547",
    background: "-webkit-linear-gradient(#be0ee1, #ed68ff)"
  },
  {
    icon: <AddCircleIcon />,
    content: "Shipped",
    money: "398",
    background: "-webkit-linear-gradient(#2b77e5, #64b3f6)"
  },
  {
    icon: <CheckCircleIcon />,
    content: "Received",
    money: "605",
    background: "-webkit-linear-gradient(#1a9f53, #4eda89)"
  },
  {
    icon: <CancelIcon />,
    content: "Cancelled",
    money: "249",
    background: "-webkit-linear-gradient(#f11133, #ff6179)"
  },
  {
    icon: <ErrorIcon />,
    content: "Refunded",
    money: "249",
    background: "-webkit-linear-gradient(#e1940e, #f4d02b)"
  }
]

function Main({ isOpen,darkMode}) {
  return (
    <div className={`main ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`sidebar ${isOpen ? '' : 'closed'}`}>
        <aside>
          <p>main pages</p>
          <ul>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <DashboardIcon />
                  <span>Dashboard</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <LockOutlineIcon />
                  <span>Authentication</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <AccountCircleIcon />
                  <span>Users</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <PixIcon />
                  <span>Products</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <ArticleIcon />
                  <span>Invoice</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <ShoppingCartIcon />
                  <span>Orders</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <EmailIcon />
                  <span>Messages</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <NotificationsIcon />
                  <span>Notifications</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <SettingsIcon />
                  <span>Settings</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
            <li>
              <button>
                <div className='side-bar-icon'>
                  <ClassIcon />
                  <span>Balnk Page</span>
                </div>
                <ChevronRightIcon />
              </button>
            </li>
          </ul>
        </aside>
      </div>
      <div className="main-right">
        <div className="row">
          <div className="col-lg-12">
            <div className='right-top'>
              <h1>Ecommerce</h1>
              <p><a href=''>Home</a> ~ <a href=''> Dashboard</a> ~ Ecommerce</p>
            </div>
          </div>
          <div className="col-xl-8">
            <div className="row">
              {ecommerceData.map((item, index) => (
                <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                  <div className='ecommerce' style={{ background: item.bg, color: "#fff" }}>
                    <i className='trading-icon' style={{ color: item.trendingIconColor }}>{item.trendIcon}</i>
                    <div className='card-data-head'>
                      <h4>
                        <span>{item.title}</span>
                        {item.value}
                      </h4>
                      <i style={{ background: item.iconBg, color: item.iconColor }}>{item.icon}</i>
                    </div>
                    <div className='month'>
                      <div className='month-data'>
                        <span style={{ background: item.darkColor }}>{item.change}</span>
                        <p>{item.note}</p>
                      </div>
                      <i style={{ color: item.darkColor }}><MoreVertIcon /></i>
                    </div>
                  </div>
                </div>
              ))}
              {/* <div className='ecommerce'>
                    <i className='trading-icon'><TrendingUpIcon /></i>
                    <div className='card-data-head'>
                      <h4>
                        <span>total users</span>
                        277
                      </h4>
                      <i><AccountCircleIcon/></i>
                    </div>
                    <div className='month'>
                      <div className='month-data'>
                        <span>+95%</span>
                        <p>Last Month</p>
                      </div>
                      <i><MoreVertIcon/></i>
                    </div>
                  </div> */}
            </div>
          </div>
          <div className="col-xl-4">
            <TotalSalesCard />
          </div>
        </div>
        <div className='col-xl'>
          <div className='best-selling-products'>
            {/* <DataTable/> */}
          </div>
        </div>
        <div className="col-xl">
          <div className="row">
            <div className="col-xl-8">
              <div className="revenue-report-card">
                <div className='revenue-head'>
                  <h5>Revenue Report</h5>
                  <div className='year-selection' >
                    <i><CalendarMonthIcon /></i>
                    <select className=''>
                      <option className='default-option'>Select Option</option>
                      <option value="year 2021">year 2021</option>
                      <option value="year 2020">year 2020</option>
                      <option value="year 2019">year 2019</option>
                      <option value="year 2018">year 2018</option>
                      <option value="year 2016">year 2016</option>
                      <option value="year 2015">year 2015</option>
                    </select>
                  </div>
                </div>
                <div className='revenue-data'>
                  {
                    revenueData.map((data, index) => (
                      <div className='revenue-card' key={index}>
                        <i style={{ color: data.color }}>{data.icon}</i>
                        <div className='data'>
                          <span>{data.title}</span>
                          <h3>{data.money}</h3>
                        </div>
                      </div>
                    ))
                  }
                </div>
                <div>
                  <RevenueChart />
                </div>
              </div>
            </div>
            <div className="col-xl-4">
              <div className='orders-card'>
                <div className='orders-head'>
                  <h5>Orders Overview</h5>
                  <div className='drop-down'>
                    <button>
                      <MoreHorizIcon />
                    </button>
                  </div>
                </div>
                <div className='orders-chart'>
                  <OrdersChart />
                </div>
                <div className='orders-cards-data'>
                  {
                    ordersData.map((data, index) => (
                      <div className='orders-data' key={index}>
                        <i style={{ background: data.background }}>{data.icon}</i>
                        <p>{data.content}</p>
                        <h5>{data.money}</h5>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl">
          <div className="row">
            <div className="col-xl-6">
              <div className='clients-card'>
                <div className='card-head'>
                  <h5>Popular Clients</h5>
                  <div className='drop-down'>
                    <button>
                      <MoreHorizIcon />
                    </button>
                  </div>
                </div>
                <div>
                  <ClientsTable />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className='recent-activity-card'>
                <div className='card-head'>
                  <h5>Recent Activities</h5>
                  <div className='drop-down'>
                    <button>
                      <MoreHorizIcon />
                    </button>
                  </div>
                </div>
                <div className='activity-data'>
                  <div className='activity-data-1'>
                    <div className='activity-head'>
                      <h6>Your account is logged in</h6>
                      <span>45 min ago </span>
                    </div>
                    <div className='activity-body'>
                      <p>Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, Aenean auctor sit amet eleifend.</p>
                      <div className='activity-user-details'>
                        <img src="	https://mironcoder-hotash.netlify.app/images/avatar/01.webp" alt="" />
                        <h6>miron mahmud</h6>
                      </div>
                    </div>
                  </div>
                  <div className='activity-data-1'>
                    <div className='activity-head'>
                      <h6>Current language has been changed</h6>
                      <span>24 hr ago </span>
                    </div>
                    <div className='activity-body'>
                      <p>Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, Aenean auctor sit amet eleifend.</p>
                      <div className='activity-user-details'>
                        <img src="	https://mironcoder-hotash.netlify.app/images/flags/bd.webp" alt="" />
                        <h6>Bengali Language</h6>
                      </div>
                    </div>
                  </div>
                   <div className='activity-data-1'>
                    <div className='activity-head'>
                      <h6>Asked about this this product</h6>
                      <span>yesterday </span>
                    </div>
                    <div className='activity-body'>
                      <p>Vestibulum rutrum rutrum neque. Aenean auctor gravida sem quam pede lobortis ligula, Aenean auctor sit amet eleifend.</p>
                      <div className='activity-user-details'>
                        <img src="	https://mironcoder-hotash.netlify.app/images/product/01.webp" alt="" />
                        <h6>Modern Tiny Red Skirt</h6>
                      </div>
                      <button>GO THERE</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main;