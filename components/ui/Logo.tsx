import Image from "next/image"

const Logo = () => {
  return (
    <Image src='/assets/logo.svg' width={93} height={33} alt="logo" className="h-auto"/>
  )
}

export default Logo
