interface HamburgerProps {
  hamburger: boolean,
  setHamburger: React.Dispatch<React.SetStateAction<boolean>>
}

const Hamburger = ({hamburger,setHamburger} : HamburgerProps ) => {
  const handleHamburger = () => {
    setHamburger(prev => !prev)
  }
  return (
    <div className={ hamburger?'hamburger active':'hamburger'} onClick={handleHamburger}>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
          <div className='hamburger-line'></div>
      </div>
  )
}

export default Hamburger