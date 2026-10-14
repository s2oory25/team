import { useEffect, useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import FaqPage from './pages/FaqPage'
import InquiryPage from './pages/InquiryPage'
import MyPage from './pages/MyPage'
import AccountPage from './pages/AccountPage'
import OrdersPage from './pages/OrdersPage'
import OrderDetailPage from './pages/OrderDetailPage'
import RecentPage from './pages/RecentPage'
import CartPage from './pages/CartPage'
import ShippingPage from './pages/ShippingPage'
import LikesPage from './pages/LikesPage'
import AiFittingPage from './pages/AiFittingPage'
import SiteMenu from './components/SiteMenu'

const sampleFaceShape = {
  name: '역삼각형',
  outline: '14,18 86,18 50,97',
}

function App() {
  const [activeMenu, setActiveMenu] = useState('CELEB PICK')
  const [menuOpen, setMenuOpen] = useState(false)
  const [categoryOpen, setCategoryOpen] = useState(false)
  const [styleOpen, setStyleOpen] = useState(false)
  const [customerOpen, setCustomerOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [mobileMypageOpen, setMobileMypageOpen] = useState(false)
  const [selectedCustomerItem, setSelectedCustomerItem] = useState(null)
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedOrder, setSelectedOrder] = useState(null)

  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [photoPreview, setPhotoPreview] = useState('')
  const [analysisMessage, setAnalysisMessage] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [hasAnalyzed, setHasAnalyzed] = useState(false)
  const [inquiryType, setInquiryType] = useState('')
  const [inquiryEmail, setInquiryEmail] = useState('abcd@gmail.com')
  const [inquiryContent, setInquiryContent] = useState('')
  const [showInquiryFaq, setShowInquiryFaq] = useState(false)
  const [inquiryMessage, setInquiryMessage] = useState('')
  const [accountMessage, setAccountMessage] = useState('')
  const [isChangingPassword, setIsChangingPassword] = useState(false)
  const [openFaqIndex, setOpenFaqIndex] = useState(null)
  const [cartAgreement, setCartAgreement] = useState(false)
  const [cartItems, setCartItems] = useState([
    { id: 'cocoa', brand: 'GENTLE MONSTER', name: '뉴 허 01', option: '블랙/블랙', price: 289000, image: '/new-her-order.jpg', quantity: 1, selected: true },
    { id: 'july', brand: 'Roy Bon', name: 'WAYFARER', option: '블랙/카키', price: 262200, image: '/ray-ban-wayfarer.jpg', quantity: 1, selected: true },
  ])

  const menuItems = ['CELEB PICK', '종류', 'AI 맞춤 서비스', '스타일']
  const categoryItems = ['스퀘어', '라운드', '캣아이', '스포츠']
  const styleItems = ['클래식', '스포츠', '캐주얼', '트렌디']
  const customerItems = ['FAQ', '1:1문의']
  const mypageItems = ['마이페이지 홈', '좋아요']

  const faqItems = [
    '회원가입은 어떻게 하나요?',
    '로그인은 어떻게 하나요?',
    '주문은 어떻게 하나요?',
    '배송은 얼마나 걸리나요?',
    '교환 및 반품은 어떻게 하나요?',
    '결제 방법은 어떤 것이 있나요?',
  ]

  const faqDetails = [
    {
      question: 'AI 얼굴형 분석은 어떻게 이용하나요?',
      answer: 'AI 맞춤 서비스에서 정면 사진을 올리고 얼굴형 분석하기를 눌러주세요.',
    },
    {
      question: '사진은 저장되나요?',
      answer: '현재 데모에서는 사진을 브라우저에서 미리보기로만 사용하며 서버에 저장하지 않습니다.',
    },
    {
      question: 'AI 피팅은 어디서 하나요?',
      answer: 'AI 맞춤 서비스에서 사진 분석 후 추천 상품의 AI 피팅 버튼을 눌러주세요.',
    },
    {
      question: '배송은 얼마나 걸리나요?',
      answer: '배송 일정은 주문과 배송이 연결되면 주문 내역에서 확인할 수 있습니다.',
    },
    {
      question: '교환/반품은 가능한가요?',
      answer: '교환 및 반품 신청은 고객센터 1:1 문의를 통해 접수해주세요.',
    },
  ]

  const products = [
    {
      id: 1,
      name: '코코아',
      description: '라운드 메탈 선글라스',
      price: '₩333,000',
      shape: 'round',
      image: '/cocoa-01.png',
    },
    {
      id: 2,
      name: '줄라이',
      description: '모던 스퀘어 선글라스',
      price: '₩333,000',
      shape: 'square',
      image: '/july-01.png',
    },
    {
      id: 3,
      name: '르',
      description: '캣아이 선글라스',
      price: '₩333,000',
      shape: 'cat',
      image: '/le-01.png',
    },
  ]

  useEffect(() => {
    if (!selectedPhoto) {
      setPhotoPreview('')
      return undefined
    }

    const previewUrl = URL.createObjectURL(selectedPhoto)
    setPhotoPreview(previewUrl)

    return () => URL.revokeObjectURL(previewUrl)
  }, [selectedPhoto])

  useEffect(() => {
    if (!isAnalyzing) return undefined

    const timer = setTimeout(() => {
      setIsAnalyzing(false)
      setHasAnalyzed(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [isAnalyzing])

  const closeSubmenus = () => {
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setMobileMypageOpen(false)
    setSelectedCustomerItem(null)
  }

  const navigateTo = (page) => {
    setCurrentPage(page)
    setMenuOpen(false)
    closeSubmenus()

    if (page === 'home') {
      setActiveMenu('')
    }
  }

  const handleMenuClick = (menu) => {
    if (menu === 'CELEB PICK') {
      setActiveMenu('')
      closeSubmenus()
      setMenuOpen(false)
      return
    }

    if (menu === 'AI 맞춤 서비스') {
      setActiveMenu('')
      navigateTo('ai-fitting')
      return
    }

    setActiveMenu(menu)

    if (menu === '종류') {
      setCategoryOpen((prev) => !prev)
      setStyleOpen(false)
      setCustomerOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
      return
    }

    if (menu === '스타일') {
      setStyleOpen((prev) => !prev)
      setCategoryOpen(false)
      setCustomerOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
      return
    }

    if (menu === '고객센터') {
      setCustomerOpen((prev) => !prev)
      setCategoryOpen(false)
      setStyleOpen(false)
      setMobileMypageOpen(false)
      setSelectedCustomerItem(null)
    }
  }

  const handleMobileMypageClick = () => {
    setActiveMenu('마이페이지')
    setMobileMypageOpen((prev) => !prev)
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setSelectedCustomerItem(null)
  }

  const handleSubMenuClick = (item) => {
    if (item === '마이페이지 홈') {
      navigateTo('mypage')
      return
    }

    if (item === '좋아요') {
      navigateTo('likes')
      return
    }

    if (item === '주문내역') {
      navigateTo('orders')
      return
    }

    if (item === '최근 본 상품') {
      navigateTo('recent')
      return
    }

    if (item === '장바구니') {
      navigateTo('cart')
      return
    }

    console.log(`${item} 페이지로 이동`)
  }

  const handleMobileCustomerClick = (item) => {
    if (item === 'FAQ') {
      navigateTo('faq')
      return
    }

    if (item === '1:1문의') {
      navigateTo('inquiry')
      return
    }

    console.log(`${item} 페이지로 이동`)
  }

  const handleCustomerItemClick = (item) => {
    setSelectedCustomerItem(item)
    if (item === '1:1문의') {
      navigateTo('inquiry')
      return
    }
    console.log(`${item} 선택`)
  }

  const handleInquirySubmit = (event) => {
    event.preventDefault()
    setInquiryMessage('문의 접수 기능은 아직 연결되지 않았습니다.')
  }

  const handleLoginClick = () => {
    setIsLoggedIn(true)
    setCategoryOpen(false)
    setStyleOpen(false)
    setCustomerOpen(false)
    setMobileMypageOpen(false)
    setSelectedCustomerItem(null)
    setActiveMenu('')
  }

  const handleLogoutClick = () => {
    setIsLoggedIn(false)
    setSelectedCustomerItem(null)
  }

  const handleProfileCardClick = () => {
    setIsLoggedIn(true)
    setAccountMessage('')
    navigateTo('account')
  }

  const handleAccountMenuClick = (destination) => {
    if (destination === 'account') {
      navigateTo('account')
    } else if (destination === 'orders') {
      navigateTo('orders')
    } else if (destination === 'recent') {
      navigateTo('recent')
    } else if (destination === 'cart') {
      navigateTo('cart')
    } else if (destination === 'likes') {
      navigateTo('likes')
    } else if (destination === 'inquiry') {
      navigateTo('inquiry')
    } else if (destination === 'mypage') {
      navigateTo('mypage')
    } else if (destination === 'logout') {
      handleLogoutClick()
      navigateTo('mypage')
    } else {
      setAccountMessage('선택하신 메뉴는 아직 준비 중입니다.')
    }
  }

  const openMenu = () => {
    setMenuOpen(true)
    closeSubmenus()
    setActiveMenu(isLoggedIn ? '' : 'CELEB PICK')
  }

  const closeMenu = () => {
    setMenuOpen(false)
    closeSubmenus()
  }

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0]

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setAnalysisMessage('이미지 파일을 선택해 주세요.')
      return
    }

    setSelectedPhoto(file)
    setAnalysisMessage('')
    setIsAnalyzing(false)
    setHasAnalyzed(false)
  }

  const handleAnalyze = () => {
    if (!selectedPhoto) {
      setAnalysisMessage('먼저 분석할 사진을 업로드해 주세요.')
      return
    }

    setAnalysisMessage('')
    setHasAnalyzed(false)
    setIsAnalyzing(true)
  }

  const handleRetry = () => {
    setIsAnalyzing(false)
    setHasAnalyzed(false)
    setAnalysisMessage('')
  }

  const selectedCartItems = cartItems.filter((item) => item.selected)
  const cartSubtotal = selectedCartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const orderDetail = selectedOrder || {
    number: 'CF20260907-1234', date: '2026.09.07 10:23', brand: 'GENTLE MONSTER',
    name: '뉴 허 01', option: '블랙/블랙', quantity: 1, price: 289000,
    image: '/new-her-order.jpg', status: '배송중',
  }

  const pageProps = { activeMenu, setActiveMenu, menuOpen, setMenuOpen, categoryOpen, setCategoryOpen, styleOpen, setStyleOpen, customerOpen, setCustomerOpen, isLoggedIn, setIsLoggedIn, mobileMypageOpen, setMobileMypageOpen, selectedCustomerItem, setSelectedCustomerItem, currentPage, setCurrentPage, selectedOrder, setSelectedOrder, selectedPhoto, setSelectedPhoto, photoPreview, setPhotoPreview, analysisMessage, setAnalysisMessage, isAnalyzing, setIsAnalyzing, hasAnalyzed, setHasAnalyzed, inquiryType, setInquiryType, inquiryEmail, setInquiryEmail, inquiryContent, setInquiryContent, showInquiryFaq, setShowInquiryFaq, inquiryMessage, setInquiryMessage, accountMessage, setAccountMessage, isChangingPassword, setIsChangingPassword, openFaqIndex, setOpenFaqIndex, cartAgreement, setCartAgreement, cartItems, setCartItems, menuItems, categoryItems, styleItems, customerItems, mypageItems, faqItems, faqDetails, products, closeSubmenus, navigateTo, handleMenuClick, handleMobileMypageClick, handleSubMenuClick, handleMobileCustomerClick, handleCustomerItemClick, handleInquirySubmit, handleLoginClick, handleLogoutClick, handleProfileCardClick, handleAccountMenuClick, openMenu, closeMenu, handlePhotoChange, handleAnalyze, handleRetry, selectedCartItems, cartSubtotal, orderDetail, sampleFaceShape }
  return (
    <div
      className={`app ${
        currentPage === 'ai-fitting' ? 'ai-page-active' : ''
      }`}
    >
      <header className="header">
        <button
          type="button"
          className="menu-button"
          onClick={openMenu}
        >
          ☰ 메뉴
        </button>

        <div className="logo">Chalfit</div>

        <div className="header-right">
          <button
            type="button"
            className="login-text"
            onClick={() => navigateTo('mypage')}
          >
            마이페이지
          </button>
          <button type="button" className="cart-text" onClick={() => navigateTo('cart')}>장바구니</button>

          <span className="header-person-icon">
            <span className="header-person-head" />
            <span className="header-person-body" />
          </span>
        </div>
      </header>

      {currentPage === 'home' ? <HomePage {...pageProps} />
        : currentPage === 'faq' ? <FaqPage {...pageProps} />
        : currentPage === 'inquiry' ? <InquiryPage {...pageProps} />
        : currentPage === 'mypage' ? <MyPage {...pageProps} />
        : currentPage === 'account' ? <AccountPage {...pageProps} />
        : currentPage === 'orders' ? <OrdersPage {...pageProps} />
        : currentPage === 'order-detail' ? <OrderDetailPage {...pageProps} />
        : currentPage === 'recent' ? <RecentPage {...pageProps} />
        : currentPage === 'cart' ? <CartPage {...pageProps} />
        : currentPage === 'shipping' ? <ShippingPage {...pageProps} />
        : currentPage === 'likes' ? <LikesPage {...pageProps} />
        : <AiFittingPage {...pageProps} />
      }
      <SiteMenu {...pageProps} />
    </div>
  )
}

export default App
