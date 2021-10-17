import React,{useState} from 'react'
import Sidebar from '../Sidebar'
import Navbar from '../Navbar'
const Header = () => {

    const [isOpen,setOpen] = useState(false)

    const toggle = ()=>{
        setOpen(!isOpen)
    }

    return (
        <header >
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
        </header>
    )
}

export default Header
